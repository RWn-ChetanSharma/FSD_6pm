#include<stdio.h>

void main(){
	int i;
	char name[] = "Namaste";
	
	char *p;
	p = &name;
//	printf("%c", *p);
	for(i=0; name[i]!=NULL; i++){
		printf("For Name =>  Value is %c and Address is %u\n", *(p+i), (p+i));
	}
	
	
//	printf("For Name =>  Value is %c and Address is %u\n", *(p+0), (p+0));
//	printf("For Name =>  Value is %c and Address is %u\n", *(p+1), (p+1));
//	printf("For Name =>  Value is %c and Address is %u\n", *(p+2), (p+2));
//	printf("For Name =>  Value is %c and Address is %u\n", *(p+3), (p+3));
//	printf("For Name =>  Value is %c and Address is %u\n", *(p+4), (p+4));
//	printf("For Name =>  Value is %c and Address is %u\n", *(p+5), (p+5));
//	printf("For Name =>  Value is %c and Address is %u\n", *(p+6), (p+6));
	
}
