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

2223
