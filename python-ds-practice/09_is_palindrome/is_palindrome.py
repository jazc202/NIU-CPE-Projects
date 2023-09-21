def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """

    phrase_list = [char for char in phrase.lower().replace(' ', '')]
    phrase_clean = ''.join(phrase_list)
    # print(phrase_clean)
    # print(phrase_list)
    reversed_phrase = list(reversed(phrase_list))
    
    reversed_phrase_clean = ''.join(reversed_phrase)
    # print(reversed_phrase_clean)
    
    if phrase_clean == reversed_phrase_clean:
        return True
    else:
        return False

# print(is_palindrome('taco cat'))

print(is_palindrome('taco cat'))