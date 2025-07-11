def iterative_factorial(number):
    result = 1
    for i in range(2, number + 1):
        result *=i
    return result



def recursive_factorial(number):
    # base case
    if number == 0 or number == 1:
        return 1
    return number * recursive_factorial(number - 1)
