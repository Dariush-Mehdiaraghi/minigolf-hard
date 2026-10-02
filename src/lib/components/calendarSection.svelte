<script lang="ts">
	import { onMount } from 'svelte';
	import { getCalendarDates, type CalendarEvent } from '$lib/utils/getCalendarDates';
	import { language } from '$lib/stores/language';

	let events: CalendarEvent[] = [];
	let isLoading = true;
	let errorMessage = '';

	onMount(async () => {
		try {
			events = await getCalendarDates();
		} catch (error) {
			errorMessage = error instanceof Error ? error.message : 'Kalender konnte nicht geladen werden.';
		} finally {
			isLoading = false;
		}
	});
</script>

<section id="kalender" class="calendar-section" aria-labelledby="calendar-heading" aria-busy={isLoading}>
	<div class="calendar-content">
		<h2 id="calendar-heading">{$language === 'de' ? 'Kalender' : 'Calendar'}</h2>

		{#if isLoading}
			<p class="calendar-state" role="status">{$language === 'de' ? 'Kalender wird geladen...' : 'Loading calendar...'}</p>
		{:else if errorMessage}
			<p class="calendar-state" role="status">{$language === 'de' ? errorMessage : 'Could not load the calendar.'}</p>
		{:else if events.length === 0}
			<p class="calendar-state">{$language === 'de' ? 'Zurzeit sind keine kommenden Veranstaltungen eingetragen.' : 'There are no upcoming events at the moment.'}</p>
		{:else}
			<div class="events">
				{#each events as event, index (`${event.startTimestamp}-${index}`)}
					<article class="event">
						<time class="event-date" datetime={event.startDateTime}>
							{event.date}<span>{event.startTime}{#if event.endTime !== event.startTime}–{event.endTime}{/if}</span>
						</time>
						<div class="event-details">
							<h3>{event.title}</h3>
							{#if event.description}<p class="event-description">{event.description}</p>{/if}
							{#if event.location}<p class="event-location">{event.location}</p>{/if}
						</div>
					</article>
				{/each}
			</div>
		{/if}

		<a
			class="calendar-link"
			href="https://hardgutbrache.ch/kalender"
			target="_blank"
			rel="noopener noreferrer"
		>
			{$language === 'de' ? 'Alle Veranstaltungen auf hardgutbrache.ch' : 'All events on hardgutbrache.ch'} <span aria-hidden="true">↗</span>
		</a>
	</div>
</section>

<style scoped>
	.calendar-section {
		grid-column: 1 / -1;
		padding: var(--section-vertical-space) 1.5rem;
		background: var(--white-main);
		color: var(--color-text);
	}

	.calendar-content {
		width: min(100%, var(--full-section-content-width));
		margin-inline: auto;
	}

	h2 {
		margin: 0 0 2rem;
		text-align: center;
		font-size: 2.5rem;
	}

	.events {
		border-top: 1px dotted rgba(0, 0, 0, 0.4);
	}

	.event {
		display: grid;
		grid-template-columns: minmax(9rem, 0.35fr) 1fr;
		gap: 1.5rem;
		padding: 1.25rem 0;
		border-bottom: 2px dotted rgba(0, 0, 0, 0.4);
	}

	.event-date {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-weight: 600;
	}

	.event-details h3,
	.event-details p {
		margin: 0;
	}

	.event-details h3 {
		font-size: 1.25rem;
	}

	.event-description {
		margin-top: 0.5rem !important;
		white-space: pre-line;
	}

	.event-location {
		margin-top: 0.5rem !important;
		font-weight: 500;
	}

	.calendar-state {
		text-align: center;
	}

	.calendar-link {
		display: table;
		margin: 2rem auto 0;
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	@media (max-width: 600px) {
		.event {
			grid-template-columns: 1fr;
			gap: 0.6rem;
		}

		.event-date,
		.event-description,
		.event-location {
			font-size: 1.1rem;
		}
	}
</style>