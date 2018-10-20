#!/bin/python3


# Complete the beautifulBinaryString function below.
def beautifulBinaryString(b):
  r = 0

  while len(b) > 0:
    a = b[0:3]

    if a == '010':
      r += 1
      b = b[3:]
    else:
      b = b[1:]
  return r

if __name__ == '__main__':
    b = input()
    result = beautifulBinaryString(input())
    print(result)
