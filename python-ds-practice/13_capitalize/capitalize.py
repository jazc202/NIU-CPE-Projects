def capitalize(phrase):
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """
    phrase = phrase.split(' ')
    print(phrase)
    phrase[0] = phrase[0].capitalize()
    print(phrase)
    phrase = ' '.join(phrase)
    print(phrase)
    return phrase

print(capitalize('hello world'))