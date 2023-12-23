#include<iostream>
using namespace std;

int bsearch(int arr[],int key,int size){
    
    int s= 0;
    int e= size -1;
    int mid;
    mid= s + (e-s)/2;

    while(s<=e){
        if(arr[mid]==key){
            return mid;
        }
        if(arr[mid]< key){
            s= mid + 1;
        }
        else{
            e= mid-1;
        }
        mid= s+ (e-s)/2;
    }
    return -1;
}

int main(){

    int arr[6]={2,8,15,19,65,89};

    int ans= bsearch(arr, 19 , 6);

    cout<<"19 is present at index:"<< ans;

}