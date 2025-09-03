def printNumbers(Lrange, Urange):
    # base case
    if Lrange > Urange:
        return
    
    print(Lrange)
    printNumbers(Lrange + 1, Urange)


# TODO: Calling Function
printNumbers(1, 5)