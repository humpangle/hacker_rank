pairs = dict(zip(('{(['), ('})]')))


def is_matched(string):
    pairs = dict((('{', '}'), ('(', ')'), ('[', ']')))
    stack = []
    for item in string:
        if item in pairs:
            stack.append(pairs[item])
        elif not stack or stack.pop() != item:
            return 'NO'
    return stack and 'NO' or 'YES'


def maximumToys(prices, k):
    num_toys = 0
    total_cost_toys = 0
    for p in sorted(set(prices)):
        num_toys += 1
        total_cost_toys += p

        if total_cost_toys == k:
            return num_toys
        if total_cost_toys > k:
            return num_toys - 1


if __name__ == '__main__':
    p = maximumToys(map(lambda x: int(x.strip()),
                        "1 12 5 111 200 1000 10".split(" ")), 50)
    print(p)
