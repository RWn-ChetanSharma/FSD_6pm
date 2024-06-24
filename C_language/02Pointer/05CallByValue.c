#include<stdio.h>


swap(int n1, int n2){
	int t;
	t = n1;
	n1 = n2;
	n2 = t;
	
	printf("After Swapping of a = %d and b = %d", n1,n2);
}


void main(){
	
	
	int a,b;
	a=5;
	b=6;
	
	swap(a,b);
	
	
	
}
