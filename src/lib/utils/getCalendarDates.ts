export interface CalendarEvent {
	date: string;
	startTime: string;
	endTime: string;
	startDateTime: string;
	title: string;
	description: string;
	location: string;
	startTimestamp: number;
}

export async function getCalendarDates(): Promise<CalendarEvent[]> {
	const response = await fetch('/api/calendar', { cache: 'no-store' });
	if (!response.ok) {
		const error = (await response.json().catch(() => null)) as { message?: string } | null;
		throw new Error(error?.message ?? `Kalender konnte nicht geladen werden (${response.status}).`);
	}

	return (await response.json()) as CalendarEvent[];
}
