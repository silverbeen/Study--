#include <stdio.h>
#include <string.h>

int main(void) 
{
	char word[1000];
	
	scanf("%s", &word);
	
	if(strcmp(word, "IOI")==0) {
		printf("IOI is the International Olympiad in Informatics.");
	}
	else{
		printf("I don't care.");
	}
	
	return 0;
}

//int strcmp(const char* str1, const char* str2);
