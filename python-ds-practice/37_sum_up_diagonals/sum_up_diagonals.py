def sum_up_diagonals(matrix):
    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """

    l = len(matrix)
    tl_to_br = [matrix[i][i] for i in range(l)]
    tr_to_bl = [matrix[l-1-i][i] for i in range(l)]

    return sum(tl_to_br) + sum(tr_to_bl)

m1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(sum_up_diagonals(m1))
