#include<stdio.h>

// Pointer => It is a variable which stores the address of another variable.

void main(){
	 int a = 10;
	 
	 
	 int *p; // * => Asterick
	 
	 p = &a;
	 
//	 printf("for a => Value is %d and Address is %u", *p, p);
	
//	printf("%p\n", &a);   // It shows the address in normal memory location
//	printf("%u\n", &a);	 // It shows the address in Integer 
//	printf("%d\n", a);   // It shows the value 
//	
	
//	sizeof()
	
	printf("%lu\n", sizeof(int));
	printf("%lu\n", sizeof(float));
	printf("%lu\n", sizeof(char));
	printf("%lu\n", sizeof(double));
}
