def cascadeRecurse(n):
    if n < 10:
        print(n)
    else:
        print(n)
        cascadeRecurse(n // 10)
        print(n)

cascadeRecurse(5)
cascadeRecurse(123456789)

def cascadeRecurseAnotherWay(n):
    print(n)
    if n >= 10:
        cascadeRecurseAnotherWay(n // 10)
        print(n)

cascadeRecurseAnotherWay(555)
cascadeRecurseAnotherWay(987654321)

def cascadeInverse(n):
    grow(n)
    print(n)
    shrink(n)

def fTHENg(f, g, n):
    if n:
        f(n)
        g(n)

grow = lambda n: fTHENg(grow, print, n // 10)
shrink = lambda n: fTHENg(print, shrink, n // 10)

cascadeInverse(1111111111111) # cannot use 0 in this test

def count_partitions(n, m):
    if n == 0:
        return 1
    elif n < 0:
        return 0
    elif m == 0:
        return 0
    else:
        with_m = count_partitions(n-m, m)
        without_m = count_partitions(n, m-1)
        return with_m + without_m

print(count_partitions(5,3)) # 5 ways
# 1 + 1 + 1 + 1 + 1
# 1 + 1 + 1 + 2
# 1 + 2 + 2
# 1 + 1 + 3
# 2 + 3
