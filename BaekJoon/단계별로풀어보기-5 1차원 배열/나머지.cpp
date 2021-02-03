#include <stdio.h>

int main()
{
	int arr[11], a, count=0, result=0;
	
	for(int i = 0; i < 10; i++){
		scanf("%d", &arr[i]);
	}
	
	for(int i =0 ; i < 10; i++){
		a = arr[i] % 42;
		for( int j = 0; j < i; j++) {
			if(a == arr[j]){
				count++;
			}
			else{
				break;
			}
		}
		
		if(count == 0){
			result++;
		}
	}
	printf("%d", result);
	
	return 0;
}
