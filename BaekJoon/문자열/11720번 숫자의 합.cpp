#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	int n, sum=0, a;
	char arr[101];
	
	scanf("%d", &n);
	scanf("%s", &arr); 
	
	//a=atoi(arr); // char -> int 로 변환 시켜줌 
	
	for(int i=0; i<strlen(arr); i++) { //strlen() -> 문자열의 길이를 알 수 있음 
		sum += arr[i] - '0';
		//아스키 숫자 n에서 숫자 0만큼 빼면 숫자에 대한 정수값을 구할 수있다.  
	}
	
	printf("%d", sum);

	return 0;
}

