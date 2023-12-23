#include<iostream>
using namespace std;

double morePrecision(int n, int precision, int tempSol){
    double factor =1;
    double ans=tempSol;

    for(int i=1; i<=precision ; i++){
        factor= factor/10;
        for(double j=tempSol ; j*j <= n; j=j+factor){
            ans = j;
        }
    }
    return ans;

}



long long int sqrtInteger(int n){

    int s=0;
    int e= n-1;
    long long int mid =s+ (e-s)/2;

    long long int ans=-1;

    while(s<=e){
        long long int ans= mid*mid;
        if(ans == n)
            return mid;
        if(ans < n){
            ans=mid;
            s=mid+1;
        }
        else{
            e=mid-1;
        }
        mid= s+ (e-s)/2;

    }
    return ans;
}


int main(){
    int n;
    cout<<"Enter the no: ";
    cin>>n;

    int tempSol = sqrtInteger(n);
    //cout<<tempSol;

    double ans = morePrecision(n, 6 ,tempSol);
    cout<<"Sqrt is :"<< ans <<endl;

    return 0;

}