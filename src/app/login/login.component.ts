import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

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

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
  });



  
  constructor(  private fb: FormBuilder,private router: Router,private ds: DataService) {}




  ngOnInit(): void {}

  login() {
    var acnum = this.loginForm.value.acno;
    var psw = this.loginForm.value.psw;
  if(this.loginForm.valid){
    this.ds.login(acnum,psw).subscribe((result: any) => {
      localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
      localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
      localStorage.setItem('token',JSON.stringify(result.token))



      alert(result.message);
this.router.navigateByUrl('dashboard');
    },
    result=>{
      alert(result.error.message)
    }
    );

    
  }
  else{
    alert("invalid form")
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
