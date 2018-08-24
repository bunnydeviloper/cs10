# Luhn Algorithm is used to verify credit card numbers
# First: from the right most digit, moving left, double the value of every second digit
#   if the product of this doubling operation is > 9, then sum the digits of the products
# Second: take the sum of all the digits

def split(n):
    return n // 10, n % 10

def sum_digits(n):
    if n < 10:
        return n
    else:
        all_but_last, last = split(n)
        return sum_digits(all_but_last) + last

print(sum_digits(2015)) # expect 2+0+1+5 = 8

def luhn_sum(n):
    if n < 10:
        return n
    else:
        all_but_last, last = split(n)
        return luhn_sum_double(all_but_last) + last

def luhn_sum_double(n):
    all_but_last, last = split(n)
    luhn_digit = sum_digits(last * 2)
    if n < 10:
        return luhn_digit
    else:
        return luhn_sum(all_but_last) + luhn_digit

print(luhn_sum(3)) # expect 3
print(luhn_sum(23)) # expect 2*2 + 3 = 7
print(luhn_sum(32)) # expect 3*2 + 2 = 8
print(luhn_sum(138743)) # expect 1*2 + 3 + (1+6)*2 + 7 + 4*2 + 3 = 30
print(luhn_sum(5105105105105100)) # expect 20

