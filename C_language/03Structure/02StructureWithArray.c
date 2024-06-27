#include<stdio.h>

struct student
{
	int id;
	char name[100];
	int age;
}s[10];

main(){
	
	int n, i;
	printf("Enter Total Number of Students : ");
	scanf("%d", &n);
	struct student s[n];
	
	for(i=0; i < n; i++){
		printf("Enter Id : ");
		scanf("%d", &s[i].id);
		printf("Enter Name : ");
		scanf("%s", &s[i].name);
		printf("Enter Age : ");
		scanf("%d", &s[i].age);
	}
	
	
	for(i=0;i<n;i++){
		printf("ID : %d, Name : %s, Age : %d\n", s[i].id, s[i].name, s[i].age);
	}
	
	
}
