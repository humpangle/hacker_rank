class Node(object):
    def __init__(self, data, left=None, right=None):
        self.data, self.left, self.right = data, left, right

    def __str__(self):
        left = self.left and self.left.data or ''
        right = self.right and self.right.data or ''
        return '%s-%s-%s' % (str(left), self.data, str(right))

    def walk(self):
        left, right, data = self.left, self.right, [self.data]
        return (left and left.walk() or []) + data + \
            (right and right.walk() or [])

    def is_binary_search(self):
        left, right, data = self.left, self.right, self.data
        is_ok = True
        if left:
            is_ok = is_ok and all(data > x for x in left.walk())
        if right:
            is_ok = is_ok and all(data < x for x in right.walk())
        return is_ok

    @classmethod
    def make_node(cls, data):
        len_data = len(data)
        if len_data < 1:
            raise ValueError('A node must have a data value.')
        if len_data == 1:
            return Node(data[0])
        mid = len_data // 2
        return Node(
            data[mid],
            cls.make_node(data[: mid]),
            cls.make_node(data[mid + 1:])
        )


def transverse(node):
    if node is None:
        return []
    left, right = node.left, node.right
    return (left and transverse(left) or []) + [node.data] + \
        (right and transverse(right) or [])


def checkBST(root):
    if root is None:
        return True
    data, left, right = root.data, root.left, root.right
    if left and data <= left.data:
        return False

    if right and data >= right.data:
        return False

    data_left = transverse(left)
    if data_left and not all(data > x for x in data_left):
        return False

    data_right = transverse(right)
    if data_right and not all(data < x for x in data_right):
        return False

    return checkBST(right) and checkBST(left)


# root = Node.make_node([int(x.strip()) for x in '1 2 4 4 5 6 7'.split()])
root = Node.make_node([int(x.strip())
                       for x in '1 2 3 4 5 6 7 8 9 10 11 13 12 14 15'.split()])
print(checkBST(root))
