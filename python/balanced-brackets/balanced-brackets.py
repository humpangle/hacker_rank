pairs = dict((('{', '}'), ('(', ')'), ('[', ']')))


def is_matched0(exp):
    seen = ''
    len_exp = len(exp)
    while len_exp > 0:
        if len_exp == 1:
            if not seen:
                return False
            return len(seen) == 1 and pairs.get(seen[0]) == exp
        exp0 = exp[0]
        if seen and pairs.get(seen[-1]) == exp0:
            seen = seen[:-1]
        else:
            seen += exp0
        exp = exp[1:]
        len_exp = len(exp)
    return not seen


def is_matched(exp):
    stack = []
    for item in exp:
        if item in pairs:
            stack.append(pairs[item])
        elif not stack or stack.pop() != item:
            return False
    return not stack

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
        p = maximumToys(map(lambda x: int(x.strip()), "1 12 5 111 200 1000 10".split(" ")), 50)
        print(p)

# if __name__ == '__main__':
#     string = open(r"C:\Users\maneptha\Desktop\foss\hackerrank\ctci-balanced-brackets-English\input\input20.txt").read().split("\n")
#     string = map(lambda x: str(is_matched(x.strip(" "))), string)
#     print(list(string))
