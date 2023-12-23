#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;

    int cnt=0,bit;
    while(n){
        bit=n&1;
       // cout<<bit;
        if(bit==1){
            cnt++;
        }
       n= n>>1;
        //cout<<cnt;
    }
    if(cnt==1)
        cout<<"power of 2";
    else   
        cout<<"not power of 2";

 return 0;
}