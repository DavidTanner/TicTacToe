import { useState } from 'react';
import {Board} from "../cmp/Board";
import {SquareValue} from "../types";

export const RegularGame = () => {
    const [currentSquares, setSquares] = useState<SquareValue[]>([...new Array(9)])
    const [history, setHistory] = useState<SquareValue[][]>([]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = (currentMove % 2) === 0;

    const handlePlay = (nextSquares: SquareValue[]) => {
        const nextHistory = [...history, nextSquares];
        setHistory(nextHistory);
        setSquares(nextSquares);
        setCurrentMove(nextHistory.length);
    }

    const jumpTo = (nextMove: number) => {
        const squares = nextMove ? history[nextMove - 1] : [...new Array(9)];
        setSquares(squares)
        setHistory([...history.slice(0, nextMove)]);
        setCurrentMove(nextMove);
    }

    const moves = history.map((_, move) => {
        let description: string;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default RegularGame;