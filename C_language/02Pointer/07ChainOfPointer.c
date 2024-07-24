#include<stdio.h>


//Chain of Pointer => Double Pointer => Pointer of Pointer

void main(){
	
	int a = 5;    // 5

	int *p1;  // 5
	p1 = &a;   // 6487572
	
	int **p2;  // 6487560
	p2 = &p1;  // 6487572
	
	
	
	printf("a => %u => %d\n", p1, *p1);
	printf("p1 => %u => %u => %d\n", p2, *p2, **p2);
}
