def multiply_even_numbers(nums):
    """Multiply the even numbers.
    
        >>> multiply_even_numbers([2, 3, 4, 5, 6])
        48
        
        >>> multiply_even_numbers([3, 4, 5])
        4
        
    If there are no even numbers, return 1.
    
        >>> multiply_even_numbers([1, 3, 5])
        1
    """

    evens = [n for n in nums if n % 2 == 0]
    
    if len(evens) == 0:
        return 1
    else:
        product = 1
        for n in evens:
            product *= n
        return product

print(multiply_even_numbers([1, 2, 3, 4]))