<script lang="ts">
	import { gameStore } from '$lib/stores/gameStore';
	import ScoreBoardH1 from './ScoreBoardH1.svelte';
</script>

<div id="scoreboard-table">
	<ScoreBoardH1>Scoreboard</ScoreBoardH1>
	{#each $gameStore.users as user}
		<div class="user-row">
			<div class="user-name-and-attempts">
				<h2 class="user-name">{user.userName}</h2>
				<p class="total-attempts">
					{$gameStore.holesState
						.map((hole) => hole.scores.find((score) => score.userName === user.userName)?.attempts)
						.reduce((a, b) => (a ?? 0) + (b ?? 0), 0)}
				</p>
			</div>
			<div class="hole-grid">
				{#each $gameStore.holesState as hole}
					<div class="hole">
						<td>{hole.holeId}</td>-
						<td>{hole.scores.find((score) => score.userName === user.userName)?.attempts}</td>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss" scoped>
	#scoreboard-table {
		box-sizing: border-box;
		margin-top: 3em;
		width: 100%;
		padding: 0 1em;
		display: flex;
		flex-direction: column;
		gap: 1.5em;
		max-width: 500px;
		h1 {
			text-align: center;
			border-bottom: 1px dotted black ;
		}
	}
	.total-attempts {
		font-weight: bold;
		font-size: 1.5em;
		margin: 0;
	}
	.user-name {
		margin: 0;
	}
	.user-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		gap: 0.5em;

		.hole-grid {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			.hole {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
