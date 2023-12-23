#include<iostream>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = NULL;
    }

    ~Node(){
        if(this -> next != NULL){
            delete next;
            this->next = NULL;
        }
    }
};


void insertatTail(Node* &tail, int d){
    Node* temp= new Node(d);
    tail->next=temp;
    tail=temp;
}

void insertatHead(Node* &head, int d){
    Node* temp= new Node(d);
    temp->next =head;
    head = temp;

}

void insertatPosition(Node* &tail ,Node* &head, int position, int d){
    if(position==1){
        insertatHead(head,d);
        return;
    }
    
    Node* temp= head;
    int cnt=1;

    while(cnt< position-1){
        temp = temp->next;
        cnt++;
    }

    //inserting at last
    if(temp->next==NULL){
        insertatTail(tail,d);
        return;
    }

    Node* atposition = new Node(d);
    atposition -> next =temp -> next;
    temp -> next =atposition;


}
void print(Node* &head){
    Node* temp=head;

    while(temp != NULL){
        cout<<temp->data<<" ";
        temp=temp->next;
    }
    cout<<endl;
}

void deleteNode(Node* &head, int position){
    //starting node
    
    if(position == 1){
        Node* temp= head;
        head=head->next;
        temp->next=NULL;
        delete temp;
    }
    else{
        //last or middle node
        Node* curr =head;
        Node* prev =NULL;
        int cnt=1;

        while(cnt< position){
            prev = curr;
            curr = curr ->next;
            cnt++;
        }
        prev ->next = curr -> next;
        curr ->next= NULL;
        delete curr;
    }
}


int main(){

    Node* node1= new Node(5);
    //cout<< node1->data<<endl;
    //cout<< node1->next<<endl;

    Node* head= node1;
    Node *tail= node1;
    //print(head);

    insertatTail(tail,7);
    //print(head);

    insertatTail(tail,12);
    //print(head);

    insertatPosition(tail,head, 2 , 27);
    print(head);

    cout<<"head data is: "<<head->data<<endl;
    cout<<"tail data is: "<<tail->data<<endl;

    deleteNode(head,3);
    print(head);

    deleteNode(head,2);
    print(head);

    deleteNode(head,1);
    print(head);

    deleteNode(head,0);
    print(head);


}