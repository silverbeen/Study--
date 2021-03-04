#include <stdio.h>

int main() 
{
	char S[100], check[26]={};
	int num = 1;
	
	scanf("%s", S);
	
	for(int i =0; i< 26; i++) {
		check[i] = -1;
	}
	
	for(int j =0; S[j]!=NULL; j++) {	
		if(check[S[j] - 'a'] == -1){
			check[S[j] - 'a'] += num; 
		}
		num++;
	}
	
	for(int i=0; i<26; i++) {
		printf("%d ", check[i]);
	}
	
	return 0;
}
