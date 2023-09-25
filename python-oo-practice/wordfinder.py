"""Word Finder: finds random words from a dictionary."""

import random
import doctest


class WordFinder:
    """ Return a random word from words.txt
        >>> word = WordFinder('simple.txt')
        3 words read
        >>> word.random() in ['cat', 'dog', 'rat']
        True
        """
    def __init__(self, file):
        self.file = open(file)
        self.list = [i.removesuffix('\n') for i in self.file]
        print(f'{len(self.list)} words read')
        self.file.close()
    
    def random(self):
        
        words = self.list
        return random.choice(words)
        # return a random item from self.list

# print(words.list)

# print(words.random())
# print(words.random())
# print(words.random())
# print(words.random())


class SpecialWordFinder(WordFinder):
    def __init__(self, file):
        super().__init__(file)
        self.list = [i for i in self.list if i.isalpha() is True]


my = SpecialWordFinder('words.txt')
# words = WordFinder('words.txt')

print(my.random())

# print(my.random())
# print(words.random())
# print(words.random())
# print(words.random())