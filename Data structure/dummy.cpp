#include<iostream>
using namespace std;


void dummy(int &n){
    n++;
    cout<<"updated n is:"<<n<<endl;
   // return 0;
}

int main(){
    int n;
    cin>>n;

    dummy(n);
    cout<<"n is:"<<n;
    return 0;
}