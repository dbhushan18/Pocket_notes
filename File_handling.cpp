#include<iostream>
#include<fstream>
using namespace std;

int main(){
    string temp;
    ifstream MyReadFile("new.txt");

    while(getline(MyReadFile,temp)){
        cout<<temp;
    }

    MyReadFile.close();

}