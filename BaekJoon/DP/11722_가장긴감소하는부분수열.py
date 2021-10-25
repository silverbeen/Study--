n = int(input())

dp = [0 for i in range(n)]
arr = list(map(int, input().split()))

for i in range(n, 0, -1):
    dp[i] = arr[i]
    for j in range(i):
        if arr[i] < arr[j] and dp[i] < dp[j] + arr[i] :
            dp[i] = dp[j] + arr[i]

print(max(dp))



