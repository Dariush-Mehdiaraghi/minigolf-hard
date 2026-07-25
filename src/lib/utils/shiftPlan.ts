const SPREADSHEET_ID = '1DWzdj3dfXAUQ0NJtNxDfqWvW6AeO8LcTMXUUZeGU4XU';

// The CSV export is used instead of the gviz/JSON endpoint: gviz forces a single type per column,
// and since the date column mixes text dates with real dates it returns the text ones as empty.
export const SHIFT_PLAN_CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv`;

const splitCsvLine = (line: string) => {
	const fields: string[] = [];
	let field = '';
	let isQuoted = false;

	for (let i = 0; i < line.length; i++) {
		const char = line[i];
		if (char === '"') {
			if (isQuoted && line[i + 1] === '"') {
				field += '"';
				i++;
			} else {
				isQuoted = !isQuoted;
			}
		} else if (char === ',' && !isQuoted) {
			fields.push(field);
			field = '';
		} else {
			field += char;
		}
	}
	fields.push(field);

	return fields.map((value) => value.trim());
};

const isSameDay = (dateString: string, day: Date) => {
	const dateParts = dateString.split('.');
	if (dateParts.length !== 3) return false;

	const rawYear = parseInt(dateParts[2]);
	const year = rawYear < 100 ? 2000 + rawYear : rawYear;
	const month = parseInt(dateParts[1]) - 1; // Subtract 1 since months are zero-based
	const dayOfMonth = parseInt(dateParts[0]);
	if (isNaN(year) || isNaN(month) || isNaN(dayOfMonth)) return false;

	return year === day.getFullYear() && month === day.getMonth() && dayOfMonth === day.getDate();
};

// A day has several shifts, each on its own row, so the day counts as open as soon as one of them is ticked.
export const isOpenOnDate = (csv: string, day: Date) => {
	const [headerLine, ...rows] = csv.trim().split(/\r?\n/);
	if (!headerLine) return false;

	const header = splitCsvLine(headerLine);
	const dateIndex = header.indexOf('date');
	const isOpenIndex = header.indexOf('isOpen');
	if (dateIndex === -1 || isOpenIndex === -1) return false;

	return rows.some((row) => {
		const fields = splitCsvLine(row);
		return (
			isSameDay(fields[dateIndex] ?? '', day) &&
			(fields[isOpenIndex] ?? '').toUpperCase() === 'TRUE'
		);
	});
};

export const fetchIsOpenToday = async () => {
	const response = await fetch(SHIFT_PLAN_CSV_URL);
	if (!response.ok) throw new Error(`Shift plan request failed: ${response.status}`);

	return isOpenOnDate(await response.text(), new Date());
};
