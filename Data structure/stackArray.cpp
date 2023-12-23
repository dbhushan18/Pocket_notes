#include<iostream>
using namespace std;

class Stack{

    public:
    int* arr;
    int top;
    int size;

    Stack(int size){
        this->size= size;
        arr= new int[size];
        this->top = -1;
    }

    void push(int element){
        if(top>=size-1){
            cout<<"overflow"<<endl;
        }
        else{
            top++;
            arr[top]=element;
        }
    }

    void pop(){
        if(top<=-1){
            cout<<"underflow"<<endl;
        }
        else{
            top--;
        }

    }

    int peek(){
        if(top<=-1){
            cout<<"No elements in stack"<<endl;
            return -1;
        }
        else
            return arr[top];
    }

};


int main(){
    Stack st(5);

    st.push(12);
    st.push(5);
    st.push(9);
    st.push(16);

    st.push(4);
    st.push(8);
    //st.pop();
    //st.pop();
    //st.pop();
    cout<<st.peek()<<endl;

}
