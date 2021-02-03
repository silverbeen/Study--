a = [] #빈 리스트 정의
for i in range(9):
    a.append(int(input())) #리스트에서 추가하기 위해서는 .append()함수 사용
print(max(a)) # 최댓값 구하는 함수
print(a.index(max(a))+1)