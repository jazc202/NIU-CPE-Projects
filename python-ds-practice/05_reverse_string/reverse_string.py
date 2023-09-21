def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    str_list = [char for char in phrase]
    str_list = str_list.reverse()

    reverse_string = ''.join(str_list)
    print(reversed_string)

reverse_string('pancake')