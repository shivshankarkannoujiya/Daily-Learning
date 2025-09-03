def reverse_string(str):
    reverse_string = ""
    for char in str:
        reverse_string = char + reverse_string
    return reverse_string

reversed_string = reverse_string("Hello")
print(reversed_string)
