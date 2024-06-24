#include<stdio.h>

// Call by Reference


swap(int *n1, int *n2){
	int *t;
	t = *n1;
	n1 = *n2;
	n2 = t;
	
	printf("Value of x is %d and value of y is %d", n1, n2);
}

void main(){
	int x, y;
	
	x = 30;
	y = 40;
	
	swap(&x, &y);
}
