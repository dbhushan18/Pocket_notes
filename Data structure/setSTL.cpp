#include<iostream>
#include<set>
using namespace std;

//stores element single time : unique
//return in sorted oder

int main(){
     
     set<int> s;

     s.insert(1);
     s. insert(2);
     s. insert(6);
     s. insert(4);
     s. insert(3);
     s. insert(9);
     s. insert(2);
     s. insert(2);

     //O(logn)  BST
     
     for(int i:s){
        cout<<i<<endl;
     } cout<< endl;
     
    set<int>::iterator it =s.begin();
    it;

     s.erase(it);
    // s.erase(s.begin());

     for(int i:s){
        cout<<i<<endl;
     }
     cout<<"2 is present or not: "<<s.count(2)<<endl;

     //set<int>:: iterator itr = s.find(6);
     auto itr= s.find(6);
     
     for(auto it= itr; it!=s.end(); it++){
        cout<<*it<<" ";
     }

}