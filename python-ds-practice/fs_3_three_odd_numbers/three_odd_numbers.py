def three_odd_numbers(nums):
    """Is the sum of any 3 sequential numbers odd?"

        >>> three_odd_numbers([1, 2, 3, 4, 5])
        True

        >>> three_odd_numbers([0, -2, 4, 1, 9, 12, 4, 1, 0])
        True

        >>> three_odd_numbers([5, 2, 1])
        False

        >>> three_odd_numbers([1, 2, 3, 3, 2])
        False
    """

    sums = []
    for i in range(len(nums)):
        seq = nums[i:i+3]
        if len(seq) == 3:
            sums.append(sum(seq))
    
    odds = [True if x % 2 != 0 else False for x in sums]

    if any(odds):
        return True
    else:
        return False

print(three_odd_numbers([5, 2, 1]))