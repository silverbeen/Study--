#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	int n, sum=0, a;
	char arr[101];
	
	scanf("%d", &n);
	scanf("%s", &arr); 
	
	//a=atoi(arr); // char -> int �� ��ȯ ������ 
	
	for(int i=0; i<strlen(arr); i++) { //strlen() -> ���ڿ��� ���̸� �� �� ���� 
		sum += arr[i] - '0';
		//�ƽ�Ű ���� n���� ���� 0��ŭ ���� ���ڿ� ���� �������� ���� ���ִ�.  
	}
	
	printf("%d", sum);

	return 0;
}

