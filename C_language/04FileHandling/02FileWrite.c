#include<stdio.h>



// => File Writing => w => write
//    a => append

void main(){
		
	FILE *p;
	char data[1000];
//	p = fopen("hello.txt", "w");
	p = fopen("hello.txt", "a");
	
	if(p==NULL){
		printf("Not Found");
	}	
	else{
		printf("Success\n");
		fputs("\n", p);
		fputs("Namaste Bharat", p);
		fclose(p);		
	}
		
}
