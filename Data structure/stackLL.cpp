#include<iostream>
using namespace std;

class Stack{
    public:
        int size;
        
        int data;
        Stack* next;

        Stack(int size,int data){
            this->size =size;
            this->data =data;
        
            this->next=NULL;

        }
        ~Stack(){
            if(this->next!=NULL){
                delete next;
                this->next=NULL;
            }
        }

};

void push(Stack* &tail, int d, int size,int& cnt){
    Stack* temp=new Stack(size,d);
    if(cnt>size-1){
        cout<<"Overflow"<<endl;
        return;
    
    }
    else{
        temp->next =tail->next;
        tail->next =temp;
        tail=temp;
        cnt++;
        //cout<<"push count is "<<cnt<<endl;

    }

}

void pop(Stack* &head, Stack* &tail,int& cnt){
    if(cnt<=1){
        cout<<"underflow"<<endl;
        return;
    }
    else{
        
        Stack* temp= head;
        Stack* temp1=tail;
        

        while(temp->next->next!=NULL){
            temp=temp->next;
        }
        temp->next=tail->next;
        tail=temp;
        cnt--;
        //cout<<"pop cnt is "<<cnt<<endl;
        if(cnt==0){
            delete tail;
            delete head;
            head=NULL;
        }
        else{
            delete temp1;

        }
        
    }
}

int peek(Stack* tail){
        cout<<"stack top is: "<< tail->data<<endl;
}
void print(Stack* &head){
    Stack* temp=head;

    while(temp != NULL){
        cout<<temp->data<<" ";
        temp=temp->next;
    }
    cout<<endl;
}

int main(){
    Stack* st1= new Stack(5,4);
    Stack* tail = st1;
    Stack* head = st1;
    static int cnt=1;

    push(tail,25,5,cnt);
    print(head);

    push(tail,55,5,cnt);
    print(head);

    push(tail,7,5,cnt);
    print(head);

    push(tail,36,5,cnt);
    print(head);

    pop(head,tail,cnt);
    print(head);

    pop(head,tail,cnt);
    print(head);

    pop(head,tail,cnt);
    print(head);

    pop(head,tail,cnt);
    print(head);

    pop(head,tail,cnt);
    print(tail);
    
    pop(head,tail,cnt);
    print(tail);

//    cout<<"cnt is:"<<cnt<<endl;

    peek(tail);

}