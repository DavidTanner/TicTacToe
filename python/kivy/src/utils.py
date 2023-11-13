from typing import Union

SquareValue = Union[str, None]  # Define SquareValue as a Union of str and None

boardLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]  # No need for `as const` in Python

def calculate_board_winner(squares: List[SquareValue]) -> Optional[SquareValue]:
    for a, b, c in boardLines:
        first, second, third = squares[a], squares[b], squares[c]
        if first is not None and first == second and second == third:
            return first
    return None