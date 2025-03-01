interface User {
    userName: string;
    totalAttempts: number;
    currentRank: number;
}

interface HoleScore {
    userName: string;
    attempts: number;
}

interface HoleState {
    holeId: string;
    scores: HoleScore[];
}

interface GameState {
    isFinished: boolean;
    users: User[];
    holesState: HoleState[];
}