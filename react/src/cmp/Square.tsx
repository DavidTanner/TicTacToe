import {SquareValue} from "../types";

export interface SquareArgs {
    value: SquareValue
    onSquareClick: () => void
}

export const Square = ({ value, onSquareClick }: SquareArgs) => {
    return (
        <button className='square' onClick={onSquareClick}>
            {value}
        </button>
    )
}

export type Square = typeof Square;
