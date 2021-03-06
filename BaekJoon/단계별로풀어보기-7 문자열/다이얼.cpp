#include <stdio.h>
#include <string.h>

int main() {
	char a[100];
	scanf("%s", a);
	int sum = 0;
	
	for(int i=0; a[i] !=NULL ; i++) {
		if(a[i] == 'A' || a[i] == 'B' || a[i] == 'C') {
			sum += 3;
		}
		else if(a[i] == 'D' || a[i] == 'E' || a[i] =='F') {
			sum += 4;
		}
		else if(a[i] == 'G' || a[i] == 'H' || a[i] == 'I') {
			sum += 5;
		}
		else if(a[i] == 'J' || a[i] == 'K' || a[i]== 'L') {
			sum += 6;
		}
		else if(a[i] == 'N' || a[i] == 'M' || a[i]== 'O' ) {
			sum += 7;
		}
		else if(a[i] == 'P' || a[i] == 'Q' || a[i]== 'R' || a[i] == 'S') {
			sum += 8;
		}
		else if(a[i] == 'T' || a[i] == 'U' || a[i]== 'V') {
			sum += 9;
		}
		else if(a[i] == 'X' || a[i] == 'Y' || a[i]== 'W' ||a[i] == 'Z')  {
			sum += 10;
		}
	}
	printf("%d", sum);
	
	
	return 0;
}
