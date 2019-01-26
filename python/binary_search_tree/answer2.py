class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    @classmethod
    def make_node(cls, items):
        length = len(items)
        len_half = length // 2
        data = items[len_half]
        left = items[: len_half]
        right = items[len_half + 1:]

        node = cls(data)
        node.left = None if len(left) == 0 else cls.make_node(left)
        node.right = None if len(right) == 0 else cls.make_node(right)
        return node


def get_datas(root, datas=[]):
    data, left, right = root.data, root.left, root.right
    datas = datas + [data]

    if left == None and right == None:
        return datas

    return datas + get_datas(left, []) + get_datas(right, [])


def check_binary_search_tree_(root, seen=[]):
    data, left, right = root.data, root.left, root.right

    if data in seen:
        return False

    if left == None and right == None:
        return True

    left_data, right_data = left.data, right.data

    if left_data in seen or right_data in seen:
        return False

    if left_data == right_data:
        return False

    try:
        if data - left_data <= 0:
            return False

        if data - right_data >= 0:
            return False

    except:
        return False

    for x in get_datas(left):
        if x >= data:
            return False

    for y in get_datas(right):
        if y <= data:
            return False

    seen = seen + [data]
    return check_binary_search_tree_(left, seen) == True and check_binary_search_tree_(right, seen) == True


if __name__ == "__main__":
    # inputs = [int(x.strip()) for x in '1 2 3 4 5 6 7'.split()]
    # inputs = [int(x.strip()) for x in '1 2 3 5 4 6 7'.split()]
    inputs = [int(x.strip()) for x in '1 2 4 3 5 6 7'.split()]
    root = Node.make_node(inputs)
    result = check_binary_search_tree_(root)
    # r = get_datas(root)
    1
