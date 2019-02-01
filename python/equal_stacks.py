def equalStacks(h1, h2, h3):
    # print(h1, h2, h3)
    sx1, s1 = [], 0
    sx2, s2 = [], 0
    sx3, s3 = [], 0

    for i in range(-1, -len(h1)-1, -1):
        s1 += h1[i]
        sx1.append(s1)

    for i in range(-1, -len(h2)-1, -1):
        s2 += h2[i]
        sx2.append(s2)

    for i in range(-1, -len(h3)-1, -1):
        s3 += h3[i]
        sx3.append(s3)

    # print('first', sx1, sx2, sx3)
    v1, v2, v3 = sx1[-1], sx2[-1], sx3[-1]

    while not (v1 == v2 and v1 == v3):
        m = min(v1, v2, v3)

        while v1 > m:
            sx1.pop()
            try:
                v1 = sx1[-1]
            except IndexError:
                return 0
        while v2 > m:
            sx2.pop()

            try:
                v2 = sx2[-1]
            except IndexError:
                return 0

        while v3 > m:
            sx3.pop()

            try:
                v3 = sx3[-1]
            except IndexError:
                return 0

    return sx1[-1]


def string1():
    return """xxxx
        3 2 1 1 1
        4 3 2
        1 1 4 1"""


def string2():
    return """xxx
        1 1 1 1 2
        3 7
        1 3 1"""


def string3():
    import os
    p = os.path.join(os.path.dirname(__file__),
                     '../javascript/src/equal-stacks-input-3.txt', )
    f = open(p)
    s = f.read()
    f.close()
    return s.strip()


result = equalStacks(*[[int(j) for j in x.strip().split(' ')]
                       for x in string3().split('\n')[1:]])
print(result)
