import { expect, test } from 'bun:test';
import { gameStore, type GameState } from './gameStore';

function snapshot(): GameState {
	let value!: GameState;
	const unsubscribe = gameStore.subscribe((v) => (value = v));
	unsubscribe();
	return value;
}

test('updateScore replaces hole and score objects instead of mutating them', () => {
	gameStore.resetGame();
	gameStore.addPlayer('Ada');
	gameStore.startGame();

	const before = snapshot();
	const holeBefore = before.holesState[0];
	const scoreBefore = holeBefore.scores[0];
	const attemptsBefore = scoreBefore.attempts;

	gameStore.updateScore(holeBefore.holeId, 'Ada', true);

	const after = snapshot();
	const holeAfter = after.holesState.find((h) => h.holeId === holeBefore.holeId)!;
	const scoreAfter = holeAfter.scores[0];

	// The value must increment.
	expect(scoreAfter.attempts).toBe(attemptsBefore + 1);

	// Svelte 5 only invalidates when references change, so the previously
	// rendered objects must not be mutated in place.
	expect(scoreBefore.attempts).toBe(attemptsBefore);
	expect(scoreAfter).not.toBe(scoreBefore);
	expect(holeAfter).not.toBe(holeBefore);
});

test('updateScore clamps between 1 and 7', () => {
	gameStore.resetGame();
	gameStore.addPlayer('Ada');
	gameStore.startGame();

	const holeId = snapshot().holesState[0].holeId;
	const attemptsOf = () =>
		snapshot().holesState.find((h) => h.holeId === holeId)!.scores[0].attempts;

	for (let i = 0; i < 12; i++) gameStore.updateScore(holeId, 'Ada', true);
	expect(attemptsOf()).toBe(7);

	for (let i = 0; i < 12; i++) gameStore.updateScore(holeId, 'Ada', false);
	expect(attemptsOf()).toBe(1);
});
