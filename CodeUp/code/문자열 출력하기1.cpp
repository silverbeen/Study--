#include <stdio.h>

int main()
{
	char a[100];
	
	gets(a);
	
	for(int i =0; a[i]!='\0'; i++) {
		if(a[i] == ' '){
			continue;
		}
		printf("%c", a[i]);
	}
	
	return 0;
}
