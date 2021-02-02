#include <stdio.h>

int main()
{	
	int a, total= 1;
	int arr[10];
	
	for(int i = 0 ; i <= 9; i++) {
		arr[i] = 0;
	}
	
	for( int i = 0; i<3; i++){
		scanf("%d", &a);
		total *= a;
	}
	
	for(int i = 0; total > 0; i++){
		a = total % 10;
		arr[a] += 1;
		total/=10;
	}
	
	for(int i = 0; i < 10 ;i ++){
		printf("%d\n", arr[i]);
	}
}
