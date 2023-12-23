#include<iostream>
#include<map>
using namespace std;

//same key will not point to different values
// O(logn)

int main(){
    map<int, string> m;

    m[1]="Bhushan";
    m[2]="Deshpande";
    m[13]="kumar";

    m.insert({5,"sonu"});


    cout<<"before erase: "<<endl;
    for(auto i:m){
        cout<<i.first<<" "<<i.second<<endl;
    }cout<<endl;

    cout<<"finding 13 " << m.count(13)<<endl;

    m.erase(13);
    cout<<"after erase: "<<endl;
    for(auto i:m){
        cout<<i.first<<" "<<i.second<<endl;
    }

    auto it = m.find(2);
    cout<<(*it).second<<endl;
    cout<<endl;

    for(auto i=it; i!=m.end(); i++){
        cout<<(*i).second<<endl;
    }

}