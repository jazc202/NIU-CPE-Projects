def find_the_duplicate(nums):
    """Find duplicate number in nums.

    Given a list of nums with, at most, one duplicate, return the duplicate.
    If there is no duplicate, return None

        >>> find_the_duplicate([1, 2, 1, 4, 3, 12])
        1

        >>> find_the_duplicate([6, 1, 9, 5, 3, 4, 9])
        9

        >>> find_the_duplicate([2, 1, 3, 4]) is None
        True
    """

    unique_values = set(nums)

    for a in unique_values:
        appearances = nums.count(a)

        if appearances > 1:
            return a
        
print(find_the_duplicate([1, 2, 4, 3, 12]))

