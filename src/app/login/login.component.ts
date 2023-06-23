import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect banking partner"
  acnt="Enter your acnt number"
pswrd="Enter your password"
acno=""
psw=""

  userDetails:any={
    1000:{acno:1000,username:"Jofi",password:123,balance:100000},
    1001:{acno:1001,username:"anu",password:123,balance:200000},
    1002:{acno:1002,username:"amal",password:123,balance:300000},
    1003:{acno:1004,username:"Joyal",password:123,balance:400000},
}


  constructor() { }

  ngOnInit(): void {
}
login(){
  var acnum=this.acno
  var psw= this.psw
  let userDetails = this.userDetails
  if(acnum in userDetails){
    if(psw==userDetails[acnum]['password']){
      alert("login successfull")
    }else{

      alert("incorrect password")
    }


  }
  else{
    alert("user not exist or incorrect ac number")
  }
}
acnoChange(event:any){
  // console.log(event.target.value);
  this.acno=event.target.value
  console.log(this.acno);
  
}
passwordChange(event:any){
  this.psw=event.target.value
  console.log(this.psw);
  

}

}
