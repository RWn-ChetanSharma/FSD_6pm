#include<stdio.h>

// Structure => custom data 

struct student
{
	int id;            // 4
	char name[100];    // 100
	int age;		   // 4
}s1,s2;

main(){
	
//	struct student s1, s2;   // object
	printf("Size of s1 + s2 is %d\n", sizeof(s1) + sizeof(s2));
	s1.id = 1;
	strcpy(s1.name,"Rohan");
	s1.age = 22;
	
	s2.id = 2;
	strcpy(s2.name,"Mitan");
	s2.age = 20;
	
	printf("ID : %d, Name : %s, Age : %d\n", s1.id, s1.name, s1.age);
	printf("ID : %d, Name : %s, Age : %d\n", s2.id, s2.name, s2.age);
	
	
}
