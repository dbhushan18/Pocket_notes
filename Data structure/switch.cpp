#include<iostream>
using namespace std;

int main(){
    int amt,ans=0;
    cout<<"enter amount:";
    cin>>amt;

    int tmp2=0, tmp=0, tmp1=0;
    switch (1)
    {
    case 1:       
        if((amt/100)>=1){
            tmp=amt/100;
            ans=(amt-(100*tmp));
        }
        cout<<"100 rupee notes are:"<<tmp<<endl;
        cout<<ans<<endl;
    case 2:
        if((ans/10)>=1){
            tmp1=ans/10;
            ans=(ans-(10*tmp1));
        }
        cout<<"10 rupee notes are:"<<tmp1<<endl;

    case 3:       
        if((ans/1)>=1){
            tmp2=ans/1;
            ans=(ans-(1*tmp2));
        }
        cout<<"1 rupee notes are:"<<tmp2<<endl;
        break;
    }

    return 0;
}