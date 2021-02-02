#include <stdio.h>

int main()
{
	int n;
	double Max = 0, sum= 0;
	scanf("%d", &n);
	double arr[n];
	
	for(int i= 0 ; i<n; i++){
		scanf("%lf", &arr[i]); //점수 값 입력 
	}
	
	for(int i = 0; i<n; i++) {
		if(arr[i] > Max) {
			Max = arr[i]; //최대값 찾기 
		}
	}
	
	for(int i =0 ; i<n; i++) {
		sum = sum + ((arr[i]/Max)*100);
	}
	
	printf("%0.2lf", sum/n);
	
	return 0;
}
