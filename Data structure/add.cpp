#include<iostream>
using namespace std;

int sum(int arr[], int n, int ans){
    for(int i=0; i<n-2; i++){
        for(int j=i+1; j<n-1; j++){
            for(int k=j+1; k<n; k++){
                if((arr[i]+arr[j]+arr[k]) == ans){
                    cout<< arr[i] <<","<<arr[j]<<","<<arr[k]<<endl;
                }
            }
        }
    }
    return 0;

}

int main(){

    int arr[]= {1,2,6,5,2};
    int ans=9;
    sum(arr, 5, ans);

    return 0;
}