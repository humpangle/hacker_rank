def process_data(string=None):
    s = []
    for j in [list(map(lambda x: int(x), input().split(' '))) for c in range(int(input()))]:
        k = j[0]

        if k == 1:
            s.append(j[1])
        elif k == 2:
            s.pop()
        else:
            print(max(s))


process_data()


string = """10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3"""

process_data(string)
