class SinglyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None


class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, node_data):
        node = SinglyLinkedListNode(node_data)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node

        self.tail = node


def has_cycle(head):
    slow, fast = head, head
    while slow and fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow == fast:
            return True
    return False


def node_from_question(string):
    string = string.split('\n')
    node_count = int(string[1])
    linked_list = SinglyLinkedList()

    for node_data_index in range(node_count):
        data = string[4 + node_data_index - 1]
        linked_list.insert_node(int(data))
