from typing import List

NodeData = List[int]


class Node(object):
    def __init__(self, data):
        self.data, self.left, self.right = data, None, None

    def walk(self):
        data, left, right = self.data, self.left, self.right
        return ([] if left == None else left.walk()) + [data] + \
            ([] if right == None else right.walk())

    @classmethod
    def make_node(cls, node_data: NodeData):

        if not node_data:
            raise ValueError('You must supply at least one data value')

        len_data = len(node_data)

        if len_data == 1:
            return cls(node_data[0])

        mid = len_data // 2
        node = cls(node_data[mid])
        node.left = cls.make_node(node_data[:mid])
        node.right = cls.make_node(node_data[mid+1:]) if len_data > 2 else None
        return node

def walk(node):
        data, left, right = node.data, node.left, node.right
        return ([] if left == None else walk(left)) + [data] + \
            ([] if right == None else walk(right))


def is_binary_search(root: Node):
    left, right, data = root.left, root.right, root.data
    if left is None and right is None:
        return True

    if not left or not right:
        return False

    if [x for x in walk(left) if x >= data ] or \
            [y for y in walk(right) if y <= data]:
        return False

    return is_binary_search(left) and is_binary_search(right)
