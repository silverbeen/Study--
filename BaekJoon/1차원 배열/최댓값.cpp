#include <stdio.h>

int main()
{
	int arr[9]={0,}, Max=0, a;

	for(int i=0;i<9;i++) {
		scanf("%d", &arr[i]);
		if(arr[i] > Max) {
			Max=arr[i];
			a=i;
		}
	}
	printf("%d\n%d", Max, a+1);
	
	return 0;
}
