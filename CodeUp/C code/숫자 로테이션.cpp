#include <stdio.h>

int main()
{
	int n, k[1000];
	scanf("%d", &n);
	
	for(int i = 0;i < n ;i++) {
		scanf("%d", &k[i]);
	}
	
	for(int i= 0; i<n;i ++){
			for(int j = 0; j < n -i; j++) {
				printf("%d ", k[j+i]);
			}
			
			for(int j =0 ; j< i; j++) {
				printf("%d ", k[j]);
			}
			printf("\n");
		} 
	return 0;
}
