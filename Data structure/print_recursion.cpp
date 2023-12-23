#include<iostream>

using namespace std;

int print(int n){
    if(n==0){
        return;
    }
    cout<<n<<endl;
    print(n-1);
}

int main(){
    int n;
    cout<<"enter value to be printed: ";
    cin>>n;
    print(n);
}