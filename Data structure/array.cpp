#include<iostream>
using namespace std;

int mini(int a[], int size){
    int ans=INT8_MAX;
    for(int i=0;i<size;i++){

        ans=min(ans,a[i]);
       // if(a[i]<ans)
         //   ans=a[i];
    }
    return ans;
}

int maxi(int a[], int size){
    int ans=INT8_MIN;
    for(int i=0;i<size;i++){

        ans=max(ans, a[i]);
       // if(a[i]>ans)
          //  ans=a[i];
    }
    return ans;
}


int main(){
    int arr[5]={5,2,15,11,1};

    
    cout<<"min value is:"<<mini(arr,5)<<endl;

    cout<<"max value is:"<<maxi(arr,5)<<endl;

    return 0;
}