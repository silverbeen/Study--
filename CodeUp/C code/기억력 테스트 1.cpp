#include <stdio.h>

int main()
{
	int n[11], k;
	
	for(int i =0 ;i <10 ; i++) {
		scanf("%d ", &n[i]);
	}
	scanf("%d", &k);
	
	printf("%d", n[k-1]);
	
	return 0;
} 
