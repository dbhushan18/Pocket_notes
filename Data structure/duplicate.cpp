#include<iostream>
using namespace std;

int main(){
    int arr[6]={1,5,2,4,3,5};

    int ans=0;
    for(int i=0;i<=5;i++){
        ans=ans^arr[i];
        
    }
    cout<<"1st loop:"<<ans<<endl;
    

    for(int i=1;i<6;i++){
        ans=ans^i;
        cout<<"2nd loop:"<<ans<<endl;
    }
    cout<<"answer:"<<ans;
    return 0;
   
}