"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start):
        self.start = start
        self.iter = 0

    def __repr__(self):
        return f'start={self.start}, next={self.start+self.iter+1}'
    
    def generate(self):
        """Prints the sum of the self.start and self.iter
        increments self.iter by 1
        """        
        print(self.start + self.iter)
        self.iter += 1
    
    def reset(self):
        """Sets self.iter to 0
        """        
        self.iter = 0


serial = SerialGenerator(100)

print(serial.__repr__())
serial.generate()
serial.generate()
serial.generate()
serial.generate()
serial.reset()
serial.generate()