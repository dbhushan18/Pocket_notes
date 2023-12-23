#include<iostream>
#include<array>
using namespace std;

int main(){
    int basic[3] = {0,1,2};
    array<int,4> a = {0,1,2,3};

    //a.fill(3);
    

    int size = a.size();
    for(int i=0;i< size ;i++){
        cout<<a[i]<<endl;
    }

    cout<< "second element is: "<< a.at(2)<<endl;
    cout<<"first eleemnt: "<< a.front()<< endl;
    cout<<"last element: "<< a.back()<<endl;
 return 0;
}