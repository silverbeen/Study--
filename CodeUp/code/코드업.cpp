#include <stdio.h>

int main()
{
	int n, arr[1000];
	scanf("%d", &n);
	
	for(int i = 1; i<= n;i++ ){
		scanf("%d", &arr[i]);
	}
	for(int j = n; j>0; j--){
		printf("%d ", arr[j]);
	}
	
	return 0;
}
