class Node:
    def __init__(self, info):
        self.info = info
        self.left = None
        self.right = None
        self.level = None

    def __str__(self):
        return str(self.info)


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def create(self, val):
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root

            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break


def postOrder(root):
    # Write your code here
    def walk(node):
        if not node:
            return []
        return walk(node.left) + walk(node.right) + [str(node.info)]
    result = ''
    data = walk(root)
    len_data = len(data) - 1
    for i in range(len_data):
        result += (data[i] + ' ')
    return result + data[len_data]


def make_question(string):
    tree = BinarySearchTree()

    for t in string.split():
        tree.create(t)
    return tree
