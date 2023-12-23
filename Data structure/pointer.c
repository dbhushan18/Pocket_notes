#include<stdio.h>

void main(){
    int a=10;
    int *b;
    int* *c;

    b= &a;
    c=&b;

    printf("\n%d",a);     //10
    printf("\n%u",&a);    //
    printf("\n%u",b);     // address a
    printf("\n%u",&b);    //address b
    printf("\n%d",*b);     // 10
    printf("\n%u",c);      //add b
    printf("\n%u",*c);     //address of a
    printf("\n%u",**c);    //10

    return;
}