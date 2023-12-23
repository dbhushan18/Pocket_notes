#include<iostream>
using namespace std;

void selectionSort(int arr[], int size){
   // int i=0;
    //int minIndex=i;
    for(int i=0; i<size-1; i++){
        int minIndex= i;
        for(int j=i+1; j<size ; j++){
            if(arr[j]<arr[minIndex])
                minIndex = j;
        }
        swap(arr[minIndex], arr[i]);
    }
    cout<<"Sorted array is: ";

    for(int i=0; i<size; i++){
        cout<<arr[i]<<" ";
    }
    
}

int main(){
    int arr[7]={8,2,3,15,1,1,9};

    selectionSort(arr,7);
    return 0;
}