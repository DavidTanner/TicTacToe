import {SquareValue} from "./types";

const boardLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
] as const;


export const calculateBoardWinner = (squares: SquareValue[]): undefined | SquareValue => {
    for (const [a, b, c] of boardLines) {
        const [first, second, third] = [squares[a], squares[b], squares[c]];
        if (first && first === second && second === third) {
            return first;
        }
    }
    return undefined;
}