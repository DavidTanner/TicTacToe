import {SquareValue} from "../types";
import {Square} from "./Square";

export interface RowArgs {
    squares: SquareValue[]
    rowLength: number
    rowNumber: number
    onClick: (idx: number) => void
}

export const Row = (
    {
        rowLength,
        rowNumber,
        onClick,
        squares
    }: RowArgs
) => {
    const offset = rowNumber * rowLength;
    return (
        <div className='board-row'>
            {squares
                .slice(offset, rowLength + offset)
                .map((value, idx) => (
                    <Square key={`row-${rowNumber}-column-${idx}`} value={value} onSquareClick={() => onClick(idx + offset)} />
                ))}
        </div>
    )
}
