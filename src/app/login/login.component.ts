import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  aim = 'Your perfect banking partner';
  acnt = 'Enter your acnt number';
  pswrd = 'Enter your password';
  acno = '';
  psw = '';

  
  constructor(private router: Router,private ds: DataService) {}

  ngOnInit(): void {}

  login() {
    var acnum = this.acno;
    var psw = this.psw;
  const result=  this.ds.login(acnum,psw)
  if(result){
    alert("login success")
    this.router.navigateByUrl('dashboard')
  }

  }

  // login(a: any, b: any) {
  //   // console.log(a.value);
  //   // console.log(b.value);

  //   var acnum = a.value;
  //   var psw = b.value;
  //   let userDetails = this.userDetails;
  //   if (acnum in userDetails) {
  //     if (psw == userDetails[acnum]['password']) {
  //       alert('login successfull');
  //     } else {
  //       alert('incorrect password');
  //     }
  //   } else {
  //     alert('user not exist or incorrect ac number');
  //   }
  // }
}
