#include<stdio.h>

union student
{
	int id;
	char name[100];
	int age;
	float per;
};

main(){
	

	union student s1;
	
	s1.id = 1;
	strcpy(s1.name, "Rohan");
	s1.age = 20;
	s1.per = 95.44;
	
	printf("ID : %d, Name : %s, Age : %d, Per : %.2f\n", s1.id, s1.name, s1.age, s1.per);
	
	
	
}
