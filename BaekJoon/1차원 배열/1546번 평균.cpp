#include <stdio.h>

int main()
{
	int n;
	double Max = 0, sum= 0;
	scanf("%d", &n);
	double arr[n];
	
	for(int i= 0 ; i<n; i++){
		scanf("%lf", &arr[i]); //���� �� �Է� 
	}
	
	for(int i = 0; i<n; i++) {
		if(arr[i] > Max) {
			Max = arr[i]; //�ִ밪 ã�� 
		}
	}
	
	for(int i =0 ; i<n; i++) {
		sum = sum + ((arr[i]/Max)*100);
	}
	
	printf("%0.2lf", sum/n);
	
	return 0;
}
