def tree(root, branches=[]):
    for branch in branches:
        assert is_tree(branch)
    return [root] + list(branches)

def root(tree):
    return tree[0]

def branches(tree):
    return tree[1:] # slicing a list from 1 to last element

# tree(3, [tree(1),
#         tree(2, [tree(1),
#                 tree(1)]
# )])

# print(tree) # will result in this: [3, [1], [2, [1], [1]] ]

def is_tree(tree):
    if type(tree) != list or len(tree) < 1:
        return False
    for branch in branches(tree):
        if not is_tree(branch):
            return False
    return True

def is_leaf(tree):
    return not branches(tree)

def fib_tree(n):
    if n == 0 or n == 1:
        return tree(n)
    else:
        left, right = fib_tree(n-2), fib_tree(n-1)
        fib_n = root(left) + root(right)
        return tree(fib_n, [left, right])

def count_leaves(tree):
    """Count the leaves of a tree
    >>> count_leaves(fib_tree(4))
    5
    """
    if is_leaf(tree):
        return 1
    else:
        counts = [count_leaves(b) for b in branches(tree)]
        return sum(counts)

def leaves(tree):
    """Return a list containing the leaves of tree.
    >>> leaves(fib_tree(5))
    [1, 0, 1, 0, 1, 1, 0, 1]
    >>> sum(leaves(fib_tree(7)))
    13
    """
    if is_leaf(tree):
        return [root(tree)]
    else:
        return sum([leaves(b) for b in branches(tree)], [])

def partition_tree(n, m):
    if n == 0:
        return tree(True)
    elif n < 0 or m == 0:
        return tree(False)
    else:
        left = partition(n-m, m)
        right = partition_tree(n, m-1)
        return tree(m, [left, right])

def pritn_parts(tree, partition=[]):
    if is_leaf(tree):
        if root(tree):
            print(partition)
    else:
        left, right = branches(tree)
        print_parts(left, partition+[root(tree)])
        print_parts(right, partition)

print_parts(partition_tree(2, 2))
# [2]
# [1, 1]
print_parts(partition_tree(6, 4))
# [4, 2]
# [4, 1, 1]
# [3. 3]
# [3. 2, 1]
# [3. 1, 1, 1]
# [2, 2, 2]
# [2, 2, 1, 1]
# [2, 1, 1, 1, 1]
# [1, 1, 1, 1, 1, 1]
