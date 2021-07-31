#include<iostream>
#include<cstring>
#include<stdlib.h>
using namespace std;
int main()
{
const int val=3000;
int i, j, len,k, flag,x,temp,flagx, tempx,m;
char yourself[val];
cout<<"Write a C Program: "<<endl;
cin.get(yourself,val,'x');
len=strlen(yourself);
cout<<"Given input"<<endl;
cout<<yourself<<endl;
cout<<"****Show all Comments****"<<endl;
for(i=0;i<=len;i++)
{
if(yourself[i]=='/' && yourself[i+1]=='/')
{
for(j=i;j<=len;j++)
{
if(yourself[j]=='.')
{
break; 
}
else
cout<<yourself[j];
}
cout<<" This is a single comment"<<endl;;
}
else if(yourself[i]=='/' && yourself[i+1]=='*')
{
for(j=i;j<=len;j++)
{
if(yourself[j]=='*' && yourself[j+1]=='/')
{
break;
}
else
cout<<yourself[j];
}
cout<<"*/";
cout<<" multiple line comments"<<endl;;
}
}
cout<<"\n\n";
cout<<"----------------------------------"<<endl;
cout<<"\n After Removing comments: "<<endl;
cout<<"\n";
for(x=0;x<=len;x++)
{
if(yourself[x]=='/' && yourself[x+1]=='/')
{ 
flag=x;
}
else if(yourself[x]=='/' && yourself[x+1]=='*')
{
temp=x;
}
else if(yourself[x]=='.')
{
flagx=x;
}
else if(yourself[x]=='*' && yourself[x+1]=='/')
{
tempx=x+1;
}
}
for(j=0;j<flag-1;j++)
{
cout<<yourself[j];
}
cout<<"\n";
for(k=flagx+1;k<temp-1;k++)
{
cout<<yourself[k];
}
cout<<"\n";
for(m=tempx+1;m<=len;m++)
{
cout<<yourself[m];
} 
return 0;
}