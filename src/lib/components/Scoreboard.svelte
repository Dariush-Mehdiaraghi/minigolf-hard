<script lang="ts">
	import content from '$lib/content/content';
	import HoleMap from './HoleMap.svelte';
	import { gameStore } from '$lib/stores/gameStore';
	import ScoreboardTable from './ScoreboardTable.svelte';
	import ScoreBoardH1 from './ScoreBoardH1.svelte';

	// Local UI state
	let setupModalIsOpen = false;
	let newPlayerName = '';
	let selectedHoleId: string | null = null;

	// Make openHoleState reactive by deriving it from the store and selectedHoleId
	$: openHoleState = selectedHoleId
		? $gameStore.holesState.find((hole) => hole.holeId === selectedHoleId)
		: undefined;

	function sanitizeAttempts(value: string | number): number {
		// Convert to number and handle NaN
		const numValue = Number(value);
		if (isNaN(numValue)) return 1;

		// Clamp between 1 and 7
		return Math.min(Math.max(Math.round(numValue), 1), 7);
	}

	function addPlayer() {
		if (newPlayerName.trim()) {
			gameStore.addPlayer(newPlayerName);
			newPlayerName = '';
		}
	}

	function startGame() {
		if ($gameStore.users.length > 0) {
			addPlayer();
			setupModalIsOpen = false;
			gameStore.startGame();
		}
	}

	function updateScore(score: any, increment: boolean) {
		if (!openHoleState) return;
		gameStore.updateScore(openHoleState.holeId, score.userName, increment);
		// No need to manually update openHoleState as it's now reactive
	}
</script>

<main>
	<div id="scoreboard">
		<ScoreBoardH1>{content.scoreboard.title}</ScoreBoardH1>
		{#if $gameStore.users.length === 0}
			<button
				id="start-btn"
				on:click={() => {
					setupModalIsOpen = true;
				}}>+ Neues Spiel</button
			>
		{:else}
			<button
				id="reset-btn"
				on:click={() => {
					if (confirm('Möchten Sie wirklich das Spiel zurücksetzen?')) {
						gameStore.resetGame();
						selectedHoleId = null;
					}
				}}>Spiel zurücksetzen</button
			>
		{/if}

		<dialog id="setup-modal" open={setupModalIsOpen}>
			<div class="dialog-content">
				<div class="player-input">
					<input
						type="text"
						bind:value={newPlayerName}
						placeholder="Neuer Spieler"
						on:keydown={(e) => e.key === 'Enter' && addPlayer()}
					/>
					<button on:click={addPlayer} disabled={newPlayerName.trim() === ''}>+</button>
				</div>

				<div class="player-list">
					{#each $gameStore.users as user, i}
						<div class="player-row">
							<span>{user.userName}</span>
							<button class="delete-btn" on:click={() => gameStore.deletePlayer(i)}>Löschen</button>
						</div>
					{/each}
				</div>
				<div class="dialog-buttons">
					<button class="start-btn" disabled={$gameStore.users.length === 0} on:click={startGame}
						>Spiel Starten</button
					>
					<button
						class="close-btn"
						on:click={() => {
							addPlayer();
							setupModalIsOpen = false;
						}}>Schliessen</button
					>
				</div>
			</div>
		</dialog>
		<dialog id="hole-modal" open={openHoleState !== undefined}>
			<div class="dialog-content">
				<h2 class="hole-title">{openHoleState?.holeId}</h2>
				{#if openHoleState}
					{#each openHoleState.scores as score}
						<div class="player-row">
							<span>{score.userName}</span>
							<div class="score-input">
								<button
									class="score-btn-decrement"
									aria-label="Anzahl Versuche verringern"
									on:click={() => updateScore(score, false)}
									disabled={score.attempts <= 1}>-</button
								>
								<div class="score-input-value">{score.attempts}</div>
								<button
									class="score-btn-increment"
									aria-label="Anzahl Versuche erhöhen"
									on:click={() => updateScore(score, true)}
									disabled={score.attempts >= 7}>+</button
								>
							</div>
						</div>
					{/each}
				{/if}
				<button class="close-btn" on:click={() => (selectedHoleId = null)}>Schliessen</button>
			</div>
		</dialog>
		<HoleMap {openHoleState} onHoleSelected={(holeId) => (selectedHoleId = holeId)} />
		<ScoreboardTable />
	</div>
</main>

<style lang="scss" scoped>
	main {
		display: grid;
		place-items: center;
		background-color: var(--green-main);
	}
	#scoreboard {
		display: grid;
		place-items: center;
		max-width: 500px;
		width: 100%;
	}
	button {
		color: inherit;
		border: none;
		border-radius: 3em;
		padding: 0.5em 1em;
		cursor: pointer;
	}
	#start-btn {
		font-size: 2em;
		white-space: nowrap;
		background-color: var(--yellow-main);
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transform-origin: center;
		transition: transform 0.2s ease-in-out;
		&:hover {
			transform: translate(-50%, -50%) scale(1.1);
		}
	}
	#reset-btn {
		background-color: var(--red-main);
		font-size: 1.5em;
		margin-bottom: 1em;
	}

	.dialog-content {
		padding: 20px;
		min-width: 300px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.player-input {
		display: flex;
		flex-direction: row;
		input {
			width: 100%;
			padding: 0.5em 1em;
			border: 2px solid #c9c9c9;
			border-radius: 20px;
			font-size: 16px;
		}
	}

	.player-list {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.player-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.dialog-buttons {
		display: flex;
		gap: 1em;
		justify-content: space-between;
	}

	.start-btn,
	.close-btn {
		flex: 1;
		padding: 8px;
		border-radius: 20px;
		border: none;
		cursor: pointer;
		font-size: 16px;
	}

	.start-btn {
		background-color: var(--yellow-main);
		&:disabled {
			opacity: 0.5;
		}
		&:hover {
			background-color: var(--yellow-main);
		}
	}

	.close-btn {
		background-color: #e0e0e0;
		&:hover {
			background-color: #cccccc;
		}
	}

	dialog {
		border: none;
		border-radius: 2em;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		position: fixed;
		margin: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		&::backdrop {
			background-color: rgba(0, 0, 0, 0.5);
		}
	}
	.hole-title {
		font-size: 2em;
		text-align: center;
		margin-bottom: 0.5em;
		margin-top: 0;
	}
	.score-input {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1em;
		.score-input-value {
			font-weight: bold;
			width: 1em;
			text-align: center;
		}
	}
</style>
