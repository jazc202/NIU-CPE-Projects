def list_check(lst):
    """Are all items in lst a list?

        >>> list_check([[1], [2, 3]])
        True

        >>> list_check([[1], "nope"])
        False
    """

    is_lst = [isinstance(i, list) for i in lst]
    is_lst_true = [i for i in is_lst if i is True]

    if len(is_lst_true) == len(is_lst):
        return True
    else:
        return False
    