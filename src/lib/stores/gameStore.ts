import { writable, derived } from 'svelte/store';
import content from '$lib/content/content';

export interface User {
    userName: string;
}

export interface HoleScore {
    userName: string;
    attempts: number;
}

export interface HoleState {
    holeId: string;
    scores: HoleScore[];
}

export interface GameState {
    isFinished: boolean;
    users: User[];
    holesState: HoleState[];
}

function createGameStore() {
    // Create the writable store with initial state
    const initialState: GameState = {
        isFinished: false,
        users: [],
        holesState: []
    };

    // Create the store
    const { subscribe, set, update } = writable<GameState>(initialState);

    // Load from localStorage on initialization (client-side only)
    if (typeof window !== 'undefined') {
        const savedState = localStorage.getItem('gameState');
        if (savedState) {
            try {
                set(JSON.parse(savedState));
            } catch (error) {
                console.error('Failed to parse saved game state:', error);
            }
        }
    }

    // Store updates in localStorage when the state changes
    const unsubscribe = subscribe(state => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('gameState', JSON.stringify(state));
        }
    });

    // Return public store interface
    return {
        subscribe,
        
        // Reset the game
        resetGame: () => {
            set(initialState);
        },
        
        // Add a new player
        addPlayer: (playerName: string) => {
            update(state => {
                if (playerName.trim()) {
                    return {
                        ...state,
                        users: [
                            ...state.users,
                            {
                                userName: playerName.trim(),
                                totalAttempts: 0,
                                currentRank: state.users.length + 1
                            }
                        ]
                    };
                }
                return state;
            });
        },
        
        // Delete a player
        deletePlayer: (index: number) => {
            update(state => ({
                ...state,
                users: state.users.filter((_, i) => i !== index)
            }));
        },
        
        // Start the game
        startGame: () => {
            update(state => {
                if (state.users.length > 0) {
                    return {
                        ...state,
                        holesState: content.scoreboard.holes.map((hole) => ({
                            holeId: hole.id,
                            scores: state.users.map((user) => ({
                                userName: user.userName,
                                attempts: 0
                            }))
                        }))
                    };
                }
                return state;
            });
        },
        
        // Update a player's score
        updateScore: (holeId: string, userName: string, increment: boolean) => {
            update(state => {
                const newState = { ...state };
                const holeIndex = newState.holesState.findIndex(h => h.holeId === holeId);
                
                if (holeIndex === -1) return state;
                
                const scoreIndex = newState.holesState[holeIndex].scores.findIndex(
                    s => s.userName === userName
                );
                
                if (scoreIndex === -1) return state;
                
                const score = newState.holesState[holeIndex].scores[scoreIndex];
                
                if (increment) {
                    if (score.attempts < 7) score.attempts++;
                } else {
                    if (score.attempts > 1) score.attempts--;
                }
                
                // Create new references to trigger reactivity
                newState.holesState = [...newState.holesState];
                
                return newState;
            });
        },
        
        // Get a specific hole state
        getHoleState: (holeId: string) => {
            let result: HoleState | undefined;
            
            update(state => {
                result = state.holesState.find(hole => hole.holeId === holeId);
                return state;
            });
            
            return result;
        },

        // Set game finished state
        setFinished: (isFinished: boolean) => {
            update(state => ({
                ...state,
                isFinished
            }));
        }
    };
}

// Create and export the store
export const gameStore = createGameStore();

// Derived store for current hole state to be used in UI
export const currentHoleState = (holeId: string) => {
    return derived(gameStore, $gameStore => 
        $gameStore.holesState.find(hole => hole.holeId === holeId)
    );
}; 