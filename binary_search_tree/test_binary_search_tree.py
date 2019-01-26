# from .test import Node
import importlib
import os
import sys
from test import Node, is_binary_search

import pytest


def test_make_node_empty_node_data_raises_value_error():
    with pytest.raises(ValueError) as e:
        Node.make_node([])


def test_make_node_empty_with_one_data():
    n = Node.make_node([1])
    assert n.data == 1
    assert n.left == n.right == None


def test_make_node_with_2_data():
    n = Node.make_node([1, 2])
    assert n.data == 2
    assert n.right == None
    left = n.left
    assert isinstance(left, Node)
    assert left.data == 1
    assert left.left == None
    assert left.right == None


def test_make_node_with_3_data():
    n = Node.make_node([1, 2, 3])
    assert n.data == 2
    left, right = n.left, n.right
    assert isinstance(left, Node)
    assert isinstance(right, Node)
    assert left.data == 1
    assert left.left == None
    assert left.right == None
    assert right.data == 3
    assert right.left == None
    assert right.right == None


def test_walks_node():
    import random
    num_data = random.choice(range(1, 20))
    data = [x for x in range(1, num_data + 1)]
    data.sort()
    n = Node.make_node(data)
    assert n.walk() == data


@pytest.mark.parametrize('node,expected', [
    (Node.make_node([1]), True),
    (Node.make_node([1, 2]), False),
    (Node.make_node([1, 2, 3, 4]), False),
    (Node.make_node([1, 2, 3, 4, 5, 6, 7]), True),
    (Node.make_node([1, 2, 3, 5, 4, 6, 7]), False),
])
def test_is_binary_search_with_one_data_node(node, expected):
    assert is_binary_search(node) == expected
