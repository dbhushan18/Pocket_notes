#include<iostream>
using namespace std;

int main(){
    int nums[10]={0,0,1,1,1,2,2,3,3,4};
    int j=0,cnt=0;

    for(int i=1;i<10;i++){
            cout<<nums[j]<<" "<<nums[i]<<endl;
            if(nums[j]!=nums[i]){
                ++j;
                nums[j]=nums[i];
                cout<<"i is: "<<i<<", "<<"j is: "<<j<<" ";
                cout<<"array element is:"<<nums[j]<<endl;
            } 
        }
    }

