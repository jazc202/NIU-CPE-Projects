def repeat(phrase, num):
    """Return phrase, repeated num times.

        >>> repeat('*', 3)
        '***'

        >>> repeat('abc', 2)
        'abcabc'

        >>> repeat('abc', 0)
        ''

    Ignore illegal values of num and return None:

        >>> repeat('abc', -1) is None
        True

        >>> repeat('abc', 'nope') is None
        True
    """

    it = 0
    str_to_list = [i for i in phrase]
    rep = []

    # for i in range(num):
    #     rep.append(str_to_list[i])
    #     it += 1

    if type(num) == int and num >= 0:
        while it < num:
            for i in str_to_list:
                rep.append(i)
            it += 1
        
        return ''.join(rep)
    else:
        return None

print(repeat('abc', 3))
