#include<iostream>
using namespace std;

int main(){
    int n,i=1;
    cin>>n;
    

    while(i<=n){

        //1st triangle
        int num= n - i + 1;
        int j=1;
        while(num--){
            cout<<j;
            j++;
        }

        //2nd triangle
        int star1 = i-1;
        while(star1--){
            cout<<"*";
        }

        //3rd triangle
        int star2= i -1;
        while(star2--){
            cout<<"*";
        }

        //4th triangle
        int start=n-i+1;
        //int col=1;
        while(start){
            cout<<start;
            start--;
        }

        i++;
        cout<<endl;
    }
    
   
    return 0;
}