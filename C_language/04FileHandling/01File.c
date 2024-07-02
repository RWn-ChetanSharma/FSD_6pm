#include<stdio.h>

//1. File Handling

// => File Opening
// => File Reading => r => read
// => File Writing => w => write

void main(){
		
	FILE *p;
	char data[1000];
	p = fopen("hello.txt", "r");
	
	if(p==NULL){
		printf("Not Found");
	}	
	else{
		printf("Success\n");
//		fgets(variableName, buffer_Size, pointer);
		while(fgets(data,50,p) != NULL)
		{
			printf("%s", data);
		}
		fclose(p);		
	}
		
}
