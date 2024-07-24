#include<stdio.h>

void main(){
	int a;    // &2006 
	a = 10;   // value of a = 10;
	
	int *ptr1;   // &4080
	ptr1 = &a;   // &2006
	
	int **ptr2;    // &8010
	ptr2 = &ptr1;  // &4080
	
	int ***ptr3;     // &8500
	ptr3 = &ptr2;  // &8010
	
	int ****ptr4;  // &9010
	ptr4 = &ptr3;   // &8500
	
	
	printf("a => %u => %d\n", ptr1, *ptr1);
	printf("ptr1 => %u => %u => %d\n", ptr2, *ptr2, **ptr2);
	printf("ptr2 => %u => %u => %u => %d\n", ptr3, *ptr3, **ptr3, ***ptr3);
	printf("ptr2 => %u => %u => %u => %u => %d\n", ptr4, *ptr4, **ptr4, ***ptr4, ****ptr4);
	
}


//a => 6487572 => 10
//ptr1 => 6487560 => 6487572 => 10
//ptr2 => 6487552 => 6487560 => 6487572 => 10
