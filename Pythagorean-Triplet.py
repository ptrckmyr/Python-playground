"""Create a function that validates whether three given integers form a Pythagorean triplet.
The sum of the squares of the two smallest integers must equal the square of the largest number to be validated."""

def is_triplet(x, y, z):
    xy = (x * x) + (y * y)
    zz = (z * z)
    if xy == zz:
        return True
    else:
        return False

print(is_triplet(3, 4, 5))