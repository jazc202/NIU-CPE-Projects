def sum_floats(nums):
    """Return sum of floating point numbers in nums.
    
        >>> sum_floats([1.5, 2.4, 'awesome', [], 1])
        3.9
        
        >>> sum_floats([1, 2, 3])
        0
    """

    floats = [i for i in nums if isinstance(i, float) is True]
    sum = 0
    
    for i in floats:
        sum += i
    return sum


    # hint: to find out if something is a float, you should use the
    # "isinstance" function --- research how to use this to find out
    # if something is a float!

print(sum_floats([1.5, 2.4, 'awesome', [], 1]))