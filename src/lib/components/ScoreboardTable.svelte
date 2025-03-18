<script lang="ts">
	import { gameStore } from '$lib/stores/gameStore';
	import { grow } from '$lib/utils/growTransition';
	import ScoreBoardH1 from './ScoreBoardH1.svelte';
</script>

<div id="scoreboard-table" transition:grow>
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
						<div class="hole-id">{hole.holeId}</div>
						<div>-</div>
						<div class="hole-attempts">
							{hole.scores.find((score) => score.userName === user.userName)?.attempts}
						</div>
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
		padding: 1em;
		display: flex;
		flex-direction: column;
		gap: 1.5em;
		max-width: 500px;
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
			gap: 0.5em;
			.hole {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				text-align: center;
			}
			.hole-id,
			.hole-attempts {
			
				width: 1em;
			}
		}
	}
</style>
