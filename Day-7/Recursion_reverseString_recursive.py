def recursive_reverse_string(str):
    if len(str) <= 1:
        return str
    return recursive_reverse_string(str[1:]) + str[0] 
