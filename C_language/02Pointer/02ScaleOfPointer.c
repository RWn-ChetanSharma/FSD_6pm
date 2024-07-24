#include<stdio.h>

int main(){
	int a = 10;
//	int b = 20;
	
//	int c = 30;
	
	int *p1, *p2, *p3;
	
	p1 = &a;
//	p2 = &b;
//	p3 = &c;	
	
	printf("For a => Value is %d And Address is %u\n", *p1, p1);
//	printf("For b => Value is %d And Address is %u\n", *p2, p2);
	printf("For b => Value is %d And Address is %u\n", *p1+1, p1+1);
	printf("For b => Value is %d And Address is %u\n", *p1+2, p1+2);
//	printf("For b => Value is %d And Address is %u\n", *p1-1, p1-1);
//	printf("For c => Value is %d And Address is %u\n", *p3, p3);
}
