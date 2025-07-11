def sum_recursive(arr):
    if not arr:
        return 0
    return arr[0] + sum_recursive(arr[1:])

sum = sum_recursive([1,2,3,4,5])
print(sum)
