n = int(input())
a = list(map(int, input().split()))
max = a[0]  #초기화 항상 해주기
min = a[0]

for i in range(n):
    if max < a[i]:
        max = a[i]
    elif a[i] < min:
        min = a[i]

print(min, max)