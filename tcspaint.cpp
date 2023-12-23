#include<iostream>

using namespace std;

float paint(float s1, float s2){
    return ((s1*18) + (s2*12));
}

int main(){
    int i;
    int e;
    float sum1=0,sum2=0;
    cin>>i>>e;
    float inter[i],exte[e];

    if(i!=0 || e!=0){
       
        for(int j=0;j<i;j++){
            cin>>inter[j];
            sum1+=inter[j];
        }
        for(int k=0;k<e;k++){
            cin>>exte[k];
            sum2+=exte[k];
    }
    }
    else{
        cout<<"user dont want painting"<<endl;
    }

    float ans=paint(sum1, sum2);
    cout<<"Total estimated cost is: RS."<<ans;
    return 0;

}