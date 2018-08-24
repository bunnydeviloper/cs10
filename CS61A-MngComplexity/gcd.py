# greatest common divisor

def gcd(n, m):
    """Return the largest k that evenly divides both m and n

    k, m, and n are all positive integers

    >>>gcd(4, 8)
    4
    >>>gcd(24, 42)
    6
    >>>gcd(5, 5)
    5
    """
    if m % n == 0:
        return n
    if n % m == 0:
        return m
    elif (m < n):
        return gcd(n, m)
    else:
        return gdc(m-n, n)

def curry(f):
    def g(x):
        def h(y):
            return f(x, y)
        return h
    return g


