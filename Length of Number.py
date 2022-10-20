"""Create a function that takes a number num and returns its length. WITHOUT len()"""

def number_length(num):

    if num < 10:
        return "1"

    else:
        count = 0
        while num:
            count += 1
            num //= 10
        return count




print(number_length(10000000564564565468732483657000000))

