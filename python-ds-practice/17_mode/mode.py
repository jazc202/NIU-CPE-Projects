def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    numbers = set(nums)

    numbers_dict = {}

    for i in numbers:
        num_array = [a for a in nums if a == i]
        numbers_dict[i] = len(num_array)
    
    max = 0
    most = 0
    for i in numbers_dict:
        num = i
        freq = numbers_dict[i]

        if freq > max:
            max = freq
            most = num
    
    return most

print(mode([2, 2, 3, 3, 2]))
