#include<iostream>
using namespace std;

int main(){
    int arr[8]={2,1,9,8,10,11,3,1};
    bool sorted=false;

    for(int i=0;i<7; i++){
        sorted=false;
        for(int j=0; j<8-i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
                sorted= true;
            }
        }
        if(sorted==false)
            break;
    }

    for(int i=0;i<8;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}