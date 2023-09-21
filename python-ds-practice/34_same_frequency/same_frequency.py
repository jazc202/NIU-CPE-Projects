def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """

    to_str_1 = str(num1)
    to_str_2 = str(num2)
    digits1 = set(to_str_1)
    digits2 = set(to_str_2)
    
    freq_dict_1 = {}
    freq_dict_2 = {}

    for i in digits1:
        arr = [a for a in to_str_1 if a == i]
        freq_dict_1[i] = len(arr)
    for x in digits2:
        arr = [a for a in to_str_2 if a == x]
        freq_dict_2[x] = len(arr)

    true_array = []
    for i in freq_dict_1:
        if freq_dict_1[i] == freq_dict_2[i]:
            true_array.append(True)
        else:
            true_array.append(False)
    
    if False not in true_array:
        return True
    else:
        return False



print(same_frequency(551122, 21515))