import ICAL from 'ical.js';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { CalendarEvent } from '$lib/utils/getCalendarDates';

const CALENDAR_URL =
	'https://hardgutbrache.netlify.app/google-calendar/calendar/ical/72209cbca9a3e2b2d1ad251b672cb6487df1e55535eed90d7a603caeea202344%40group.calendar.google.com/public/basic.ics';

const dateFormatter = new Intl.DateTimeFormat('de-CH', {
	timeZone: 'Europe/Zurich',
	year: 'numeric',
	month: '2-digit',
	day: '2-digit'
});

const timeFormatter = new Intl.DateTimeFormat('de-CH', {
	timeZone: 'Europe/Zurich',
	hour: '2-digit',
	minute: '2-digit',
	hourCycle: 'h23'
});

function plainTextDescription(description: string): string {
	return description
		.replace(/<br\s*\/?>/gi, '\n')
		.replace(/<\/(?:p|div|li|h[1-6])\s*>/gi, '\n')
		.replace(/<[^>]*>/g, '')
		.replace(/&nbsp;/gi, ' ')
		.replace(/&amp;/gi, '&')
		.replace(/&lt;/gi, '<')
		.replace(/&gt;/gi, '>')
		.replace(/&quot;/gi, '"')
		.replace(/&#39;/gi, "'")
		.replace(/\n{3,}/g, '\n\n')
		.trim();
}

function formatEvent(event: ICAL.Event, occurrence: ICAL.Time): CalendarEvent {
	const startDate = occurrence.toJSDate();
	const originalDuration =
		event.endDate.toJSDate().getTime() - event.startDate.toJSDate().getTime();
	const endDate = new Date(startDate.getTime() + Math.max(0, originalDuration));

	return {
		date: dateFormatter.format(startDate),
		startTime: timeFormatter.format(startDate),
		endTime: timeFormatter.format(endDate),
		startDateTime: startDate.toISOString(),
		title: event.summary || 'Veranstaltung',
		description: plainTextDescription(event.description || ''),
		location: event.location || '',
		startTimestamp: startDate.getTime()
	};
}

function parseCalendar(ics: string): CalendarEvent[] {
	const calendar = new ICAL.Component(ICAL.parse(ics));
	const components = calendar.getAllSubcomponents('vevent');
	const now = Date.now();
	const events: CalendarEvent[] = [];

	for (const component of components) {
		const event = new ICAL.Event(component);
		if (event.isRecurrenceException()) {
			continue;
		}

		if (!event.isRecurring()) {
			const occurrence = event.startDate;
			if (occurrence.toJSDate().getTime() >= now) {
				events.push(formatEvent(event, occurrence));
			}
			continue;
		}

		const iterator = event.iterator();
		let scannedOccurrences = 0;
		let upcomingOccurrences = 0;
		let occurrence: ICAL.Time | null;

		while (
			(occurrence = iterator.next()) &&
			scannedOccurrences < 5000 &&
			upcomingOccurrences < 10
		) {
			scannedOccurrences += 1;
			if (occurrence.toJSDate().getTime() < now) {
				continue;
			}

			events.push(formatEvent(event, occurrence));
			upcomingOccurrences += 1;
		}
	}

	return events.sort((first, second) => first.startTimestamp - second.startTimestamp).slice(0, 3);
}

export const GET: RequestHandler = async () => {
	try {
		const response = await fetch(CALENDAR_URL);
		if (!response.ok) {
			return json({ message: `Kalender konnte nicht geladen werden (${response.status}).` }, { status: 502 });
		}

		const events = parseCalendar(await response.text());
		return json(events, { headers: { 'cache-control': 'public, max-age=300' } });
	} catch (error) {
		console.error('Could not load Hardgutbrache calendar', error);
		return json({ message: 'Kalender konnte nicht geladen werden.' }, { status: 502 });
	}
};