def sum_iterative(arr):
    total = 0
    for number in arr:
        total += number
    return total

sum = sum_iterative([1,2,3,4,5])
print(sum)