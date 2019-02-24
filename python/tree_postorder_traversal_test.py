import pytest
import sys

from tree_postorder_traversal import postOrder, make_question


def test1():
    root = make_question('1 2 5 3 6 4').root
    assert postOrder(root) == '4 3 6 5 2 1'


def test2():
    root = make_question('1 14 3 7 4 5 15 6 13 10 11 2 12 8 9').root
    assert postOrder(root) == '12 11 10 13 2 15 6 5 4 9 8 7 3 14 1'


if __name__ == "__main__":
    pytest.main(sys.argv)
