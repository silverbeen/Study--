arr = []

for i in range(10):
    n = int(input())
    arr.append(n % 42)

#set 합수는 중복을 제거하기 위한 필터 역할
arr = set(arr)
#len은 arr의 길이를 출력해준다.
print(len(arr))