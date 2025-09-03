def printNumbers(Lrange, Urange):
    # Base case
    if Lrange > Urange:
        return
    
    printNumbers(Lrange + 1, Urange)
    print(Lrange)

# Calling function
printNumbers(1, 5)