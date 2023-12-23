#include<stdio.h>

void main(){
    int a[3][3], b[3][3], c[3][3];
   // int i=0,j=0;
    printf("enter matrix 1 data:\n");

    for(int i=0; i<3 ; i++ ){
        for(int j=0; j<3 ;j++){
            scanf("%d",&a[i][j]);
            
        }
    }

printf("enter matrix 2 data:\n");

    for(int i=0; i<3 ; i++ ){
        for(int j=0; j<3 ;j++){
            scanf("%d",&b[i][j]);
        }
        }

    for(int i=0; i<3 ; i++ ){
        for(int j=0; j<3 ;j++){
            c[i][j] = a[i][j] + b[i][j]; 
        }
    }


    //printf("Addition is:\n");
    for(int i=0; i<3 ; i++ ){
        for(int j=0; j<3 ; j++){
            printf("%d\t", a[i][j]);
        }

    for(int j=0; j<3 ; j++){
            printf("%d\t", b[i][j]);
        }

        for(int j=0; j<3 ;j++){
            printf("%d ", c[i][j]);
        }
        printf("\n");
    }
    return;
}
