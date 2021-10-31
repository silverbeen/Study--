

n = int(input())

def min_coin(n):
    cnt = 0
    lst = [500, 100, 50, 10]

    for coin in lst:
        cnt += n // coin
        n %= coin

    return cnt


min_coin(n)




