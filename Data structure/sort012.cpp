#include<iostream>
using namespace std;

void printArray(int arr[], int size){
    
    for(int n=0; n<size; n++){
        cout<<arr[n];
    }
}

int main(){
    int arr[9]={0,2,2,1,0,1,1,0,2};
    int i=0, j=8,mid=0;

    while(mid<j){
        while(arr[mid]==0 && mid<=j){
            swap(arr[i],arr[mid]);
            i++;
            mid++;
        }

        while(arr[mid]==1 && mid<=j){
            mid++;
        }

        if(arr[mid]==2 && mid<=j){
            swap(arr[mid],arr[j]);
            j--;
        }
    }

    printArray(arr,9);
    return 0;
}