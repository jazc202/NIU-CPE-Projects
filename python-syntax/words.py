# 1. For a list of words, print out each word on a separate line, but in all uppercase. How can you change a word to uppercase? Ask Python for help on what you can do with strings!
# 2. Turn that into a function, ***print_upper_words***. Test it out. (Don’t forget to add a docstring to your function!)
# 3. Change that function so that it only prints words that start with the letter ‘e’ (either upper or lowercase).
# 4. Make your function more general: you should be able to pass in a set of letters, and it only prints words that start with one of those letters.

def print_upper_words(word_list, letters):
    new_words = []
    for l in letters:
        letter_words = [word for word in word_list if word[0]==l]
        new_words.extend(letter_words)
    for word in new_words:
        print(word.capitalize())

print_upper_words(['cat', 'dog', 'eat', 'fate'], {'e', 'f', 'g'})