#값 받기
a = int(input())
b = int(input())
c = int(input())

#결과 값을 문자열로 바꾼 뒤 배열로 변환
result = list(str(a*b*c))

for i in range(10):
    print(result.count(str(i)))
