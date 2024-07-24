#include<stdio.h>

int main(){
	int i;
	int a[] = {10,20,30,40,50};
	
	int *p;
	p = &a;
	
//	printf("%d", *p);
	for(i=0;i<=4;i++){
		printf("For Array a[%d] => Value is %d and Address is %u\n", i, *(p+i), (p+i));
	}
	
	
//	printf("For Array a => Value is %d and Address is %u\n", *p, p);
//	printf("For Array a => Value is %d and Address is %u\n", *(p+1), (p+1));
//	printf("For Array a => Value is %d and Address is %u\n", *(p+2), (p+2));
//	printf("For Array a => Value is %d and Address is %u\n", *(p+3), (p+3));
//	printf("For Array a => Value is %d and Address is %u\n", *(p+4), (p+4));
//	
	
}
