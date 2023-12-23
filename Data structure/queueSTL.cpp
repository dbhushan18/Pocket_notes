#include<iostream>
#include<queue>
using namespace std;

//FIFO

int main(){
    queue<string> q;

    q.push("Bhushan");
    q.push("Deshpande");
    q.push("kumar");

    cout<<q.size()<<endl;

    cout<<"first: "<< q.front()<<endl;

    cout<<"size before pop: "<< q.size()<<endl;

    q.pop();
    cout<<"first: "<< q.front()<<endl;

    cout<<"size after pop: "<< q.size()<<endl;

    cout<<q.empty();
}