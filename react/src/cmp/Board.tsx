import { SquareValue } from "../types";
import {calculateBoardWinner} from "../utils";
import {Row} from "./Row";

export interface BoardArgs {
    xIsNext: boolean;
    squares: SquareValue[];
    onPlay: (newSquares: SquareValue[]) => void;
}

export const Board = (
    { squares, xIsNext, onPlay }: BoardArgs
) => {
    const handleClick = (idx: number): void => {
        if (calculateBoardWinner(squares) || squares[idx]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[idx] = 'X';
        } else {
            nextSquares[idx] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateBoardWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${(xIsNext ? 'X' : 'O') as SquareValue}`
    return (
        <>
            <div className='status'>{status}</div>
            <Row key={`row-1`} squares={squares} rowLength={3} rowNumber={0} onClick={handleClick} />
            <Row key={`row-2`} squares={squares} rowLength={3} rowNumber={1} onClick={handleClick} />
            <Row key={`row-3`} squares={squares} rowLength={3} rowNumber={2} onClick={handleClick} />
        </>
    )
}