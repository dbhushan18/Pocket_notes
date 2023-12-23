#include<iostream>
using namespace std;

bool possibleSol(int arr[], int size, int stu , int mid){
    int pagesum= 0;
    int cnt=1;
    for(int i=0; i<size; i++){
        if(pagesum + arr[i] <= mid){
            pagesum += arr[i];
        }
        else{
            cnt++;
            if(cnt> stu || arr[i]> mid ){
                return false;
            }
            pagesum = arr[i];
        }
        
    }
    return true;
}


int main(){
    int arr[]={10,20,30,40,50};
    
    int s=0;
    int n= sizeof(arr)/sizeof(int);
    int max=0;
    for(int i=0 ;i<n; i++){
        max+= arr[i];
    }
    int e=max;
    int ans=-1;
    
    int mid = s + (e-s)/2;

    while(s<=e){
        if(possibleSol(arr, n, 2, mid)){
            ans= mid;
            e= mid -1;
        }
        else{
            s=mid+1;
        }
        mid = s+ (e-s)/2;
    }
    cout<< "minimum possible allocated pages are: "<<ans;
    return 0;
}