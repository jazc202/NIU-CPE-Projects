def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """

    #for every opening paretheses, check for closing parentheses to the right
    # for every closing parentheses, check for opening parentheses to the left

    count = 0

    for c in parens:
        if c == '(':
            count += 1
        elif c == ')':
            count -= 1
            if count < 0:
                return False
    return count == 0




print(valid_parentheses(")(()"))
