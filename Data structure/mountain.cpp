#include<iostream>
using namespace std;

int getmt(int arr[], int size){
    int s=0;
    int e=size-1;
    int mid = s+ (e-s)/2;
    int ans=-1;
    while(s<e){
    if(arr[mid]>arr[mid-1]){
        ans=mid;
        s=mid+1;
    }
    else{
        e=mid;
    }
    mid = s+ (e-s)/2;
    }
    return ans;
}

int main(){
    int arr[]={0,10,21,5,3,2};
    int ans;
    ans= getmt(arr,6);
    cout<<"index is:"<<ans;

    return 0;
}