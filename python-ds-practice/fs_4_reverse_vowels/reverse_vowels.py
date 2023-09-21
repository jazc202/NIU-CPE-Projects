def reverse_vowels(s):
    
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """

    vowels = 'aeiou'
    string_list = [i for i in s]
    letters_in_string = [{string_list[i]: i} for i in range(len(string_list))]

    # print(only_keys)
    vowels_in_string = [i for i in letters_in_string if vowels.find(list((i.keys()))[0]) != -1]
    reversed_vowels_in_string = []

    for i in range(len(vowels_in_string)):
        k = list(vowels_in_string[-i-1].keys())[0]
        v = list(vowels_in_string[i].values())[0]

        pair = {k: v}
        reversed_vowels_in_string.append(pair)

    # res = [{key: reversed_vowels_in_string[i].get(key, letters_in_string[key]) for i.key in letters_in_string}]
    as_list = []

    for i in range(len(letters_in_string)):
        x = list(letters_in_string[i].keys())[0]
        ind = list(letters_in_string[i].values())[0]

        as_list.insert(ind, x)
    
    for i in range(len(reversed_vowels_in_string)):
        x = list(reversed_vowels_in_string[i].keys())[0]
        ind = list(reversed_vowels_in_string[i].values())[0]
        as_list[ind] = x
    
    string = ''.join(as_list)

    return string

print(reverse_vowels('when the moon hits your eye like a big pizza pie thats amore'))