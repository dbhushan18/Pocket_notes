#include<iostream>
using namespace std;

class Node{
    public:
    int data;
    Node* next;
    Node* prev;

    Node(int data){
        this->data = data;
        this->next = NULL;
        this->prev = NULL;
    }
};

void print(Node* &head){
    Node* temp = head;

    while(temp != NULL){
        cout<<temp->data<<" ";
        temp= temp->next;
    }
    cout<<endl;
}

void insertatHead(Node* &head, int d){
    if(head == NULL){
        Node* temp= new Node(d);
        head=temp;
    }
    else{
        Node* temp= new Node(d);
        temp->next = head;
        head->prev = temp;
        head= temp;
    }
    
}

void insertatTail(Node* &tail, int d){
    if(tail == NULL){
        Node* temp= new Node(d);
        tail=temp;
    }
    else{
    Node* temp = new Node(d);
    tail-> next = temp;
    temp -> prev =tail;
    tail= temp;
    }
}

void insertatPosition(int pos, Node* &head, Node* &tail, int d){
    if(pos == 1){
        insertatHead(head,d);
        return;
    }
        int cnt =1;
        Node* temp= head;
        Node* atpos = new Node(d);
        while(cnt < pos-1){
            temp=temp->next;
            cnt++;
        }

//inserting at last
    if(temp->next==NULL){
        insertatTail(tail,d);
        return;
    }

        atpos -> next = temp-> next;
        atpos -> prev =temp;
        temp->next -> prev =atpos;
        temp->next = atpos;


}


int main(){
    Node* node1 = new Node(15);
    Node* head = node1;
    Node* tail = node1;

    print(head);

    insertatHead(head,22);
    print(head);

    insertatTail(tail,55);
    print(head);

    insertatHead(head,6);
    print(head);

    insertatPosition(5,head,tail,32);
    print(head);


}
