import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options ={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
 

 

  constructor(private http:HttpClient) {
  }


   register(acno: any, username: any, password: any) {
    const data ={acno,username,password}
   return  this.http.post('http://localhost:3001/register',data)
}
   

  login(acnum: any, psw: any) {
    const data ={acnum,psw}
    return  this.http.post('http://localhost:3001/login',data)
}


getToken(){
  // fetch the token from localstorage
  const token = JSON.parse(localStorage.getItem('token') || ' ')


  // append token inside headers
  let headers = new HttpHeaders()
  // append token to header
  if(token){
   options.headers=headers.append('token1',token)
  }
  return options

}



  deposit(acnum: any, pswrd: any, amnt: any) {
    const data ={acnum,pswrd,amnt}
    return  this.http.post('http://localhost:3001/deposit',data,this.getToken())
  }



  withdraw(acnum: any, pswrd: any, amnt: any) {
    const data ={acnum,pswrd,amnt}
    return  this.http.post('http://localhost:3001/withdraw',data,this.getToken())
  }



  getTransaction(acno: any) {
    const data ={acno}
    return  this.http.post('http://localhost:3001/transaction',data,this.getToken())
  }  

 deleteAcc(acno:any){
  return this.http.delete('http://localhost:3001/deleteacc/'+acno)

 }



}

