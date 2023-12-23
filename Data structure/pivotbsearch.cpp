#include<iostream>
using namespace std;

int getpivot(int arr[], int size){
    int s=0;
    int e=size-1;
    int mid = s+ (e-s)/2;
    
    while(s<e){
    if(arr[mid]>=arr[0]){
        s=mid+1;
    }
    else{
        e=mid;
    }
    mid = s+ (e-s)/2;
    }
    return mid;
}

int main(){
    int arr[]={4,6,8,9,15,2,4};
    int ans;
    ans= getpivot(arr,7);
    cout<<"pivot is:"<<ans;

    return 0;
}