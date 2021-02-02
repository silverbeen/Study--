#include <stdio.h>
#include <string.h>

int main()
{
	int n, count=0, sum=0;
	char arr[100];
	
	scanf("%d", &n);
	
	for(int i=0; i<n; i++){
		
		scanf("%s", arr);
		
		for(int j=0; j<strlen(arr); j++) {
			if(arr[j] == 'O'){
				sum += count+1;
				count++;
			}
			else{
				count=0;
			}
		}
		printf("%d\n", sum);
		sum=0;
		count =0;
	}
	
	return 0;
	
}
