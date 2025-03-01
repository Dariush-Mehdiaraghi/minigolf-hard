<script lang="ts">
	import content from '$lib/content/content';
	import HoleMap from './HoleMap.svelte';

	export let gameState: GameState = {
		isFinished: false,
		users: [],
		holesState: []
	};
	let setupModalIsOpen = false;
	let newPlayerName = '';
	let openHoleState: HoleState | undefined = undefined
	
	function sanitizeAttempts(value: string | number): number {
		// Convert to number and handle NaN
		const numValue = Number(value);
		if (isNaN(numValue)) return 1;
		
		// Clamp between 1 and 7
		return Math.min(Math.max(Math.round(numValue), 1), 7);
	}

	function addPlayer() {
		if (newPlayerName.trim()) {
			gameState.users = [...gameState.users, { 
				userName: newPlayerName.trim(),
				totalAttempts: 0,
				currentRank: gameState.users.length + 1
			}];
			newPlayerName = '';
		}
	}

	function deletePlayer(index: number) {
		gameState.users = gameState.users.filter((_, i) => i !== index);
	}

	function startGame() {
		if (gameState.users.length > 0) {
			setupModalIsOpen = false;
			gameState.holesState = content.scoreboard.holes.map(hole => ({
				holeId: hole.id,
				scores: gameState.users.map(user => ({
					userName: user.userName,
					attempts: 0
				}))
			}))
			// Additional game start logic can be added here
		}
	}
	console.log(gameState.users)
</script>

<div id="scoreboard">
	<h1>{content.scoreboard.title}</h1>
	{#if gameState.users.length === 0}
	<button id="start-btn" on:click={() => {
		setupModalIsOpen = true;
	}}>+ Neues Spiel</button>
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
				{#each gameState.users as user, i}
					<div class="player-row">
						<span>{user.userName}</span>
						<button class="delete-btn" on:click={() => deletePlayer(i)}>Löschen</button>
					</div>
				{/each}
			</div>
			<div class="dialog-buttons">
				<button class="start-btn" disabled={gameState.users.length === 0} on:click={startGame}>Spiel Starten</button>
				<button class="close-btn" on:click={() => setupModalIsOpen = false}>Schliessen</button>
			</div>
		</div>
	</dialog>
	<dialog id="hole-modal" open={openHoleState !== undefined}>
		<div class="dialog-content">
			<h2 class="hole-title">{openHoleState?.holeId}</h2>
			{#if openHoleState}
				{#each 	openHoleState.scores as score}
					<div class="player-row">
						<span>{score.userName}</span>
						<input 
							type="number" 
							value={score.attempts}
							on:input={(e) => {
								score.attempts = sanitizeAttempts(e.currentTarget.value);
							}}
							max={7} 
							min={1} 
						/>
					</div>
				{/each}
			{/if}
			<button class="close-btn" on:click={() => openHoleState = undefined}>Schliessen</button>
		</div>
	</dialog>
	<HoleMap {gameState} onHoleSelected={(holeId)=> openHoleState = gameState.holesState.find(hole => hole.holeId === holeId)} />

</div>

<style lang="scss">
	button {
		color: inherit;
		border: none;
		border-radius: 3em;
		padding: .5em 1em;
		cursor: pointer;
	}
	#start-btn {
		font-size: 2em;
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
	#scoreboard {
		display: grid;
		place-items: center;
		background-color: var(--green-main);
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
			padding: .5em 1em;
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

	.start-btn, .close-btn {
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
			opacity: .5;
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
	}
</style>
