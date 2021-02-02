#include <stdio.h>
#include <string.h>

int main()
{
	char n[1000], m[1000];
	scanf("%s %s", &n, &m);
	
	if(strlen(n) > strlen(m)){
		printf("%s %s", m, n);
	}
	else if(strlen(n) < strlen(m)){
		printf("%s %s", n, m);
	}
	
	else{
		if(strcmp(n, m) < 0){
			printf("%s %s", n, m);
		}
		else if(strcmp(n, m) > 0){
			printf("%s %s", m, n);
		}
		else {
			return 0;
		}
	}
}
