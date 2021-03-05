#include <stdio.h>
#include <stdlib.h>

int main() {
	char a[10], b[10];
	char c[4], d[4];
	
	scanf("%s %s", a, b);
	
	for(int i=2; i>=0; i--) {
		c[2-i] = a[i];
		d[2-i] = b[i];
	}
	
	int n1 = atoi(c);
	int n2 = atoi(d);
	
	if(n1> n2) {
		printf("%d", n1);
	}
	else {
		printf("%d", n2);
	}
	
	return 0;
}
