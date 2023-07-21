import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user = ' ';

  acnum: any;
  sDetails: any;

  depositForm = this.fb.group({
    acnum: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pswrd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]],
  });

  withdrawForm = this.fb.group({
    acnum1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pswrd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
  });

  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private router: Router
  ) {
    if(localStorage.getItem('currentUser')){
      this.user = JSON.parse(localStorage.getItem('currentUser') || '');

    }
    this.sDetails = new Date();
  }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      alert("plase login first")
      this.router.navigateByUrl('')
    }
  }

  deposit() {
    var acnum = this.depositForm.value.acnum;
    var pswrd = this.depositForm.value.pswrd;
    var amnt = this.depositForm.value.amnt;
    if (this.depositForm.valid) {
      this.ds.deposit(acnum, pswrd, amnt).subscribe(
        (result: any) => {
          alert(result.message);
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('invalid form');
    }
  }



  withdraw() {
    var acnum = this.withdrawForm.value.acnum1;
    var pswrd = this.withdrawForm.value.pswrd1;
    var amnt = this.withdrawForm.value.amnt1;
    if (this.withdrawForm.valid) {
       this.ds.withdraw(acnum, pswrd, amnt).subscribe(
        (result: any) => {
          alert(result.message);
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('invalid form');
    }

    
  }



  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentAcno');
    localStorage.removeItem('token');

    this.router.navigateByUrl('');
  }

  deleteConfirm() {
    this.acnum = JSON.parse(localStorage.getItem('currentAcno') || '');
  }
  oncancel() {
    this.acnum = '';
  }
   
  onDelete(event:any){
    // alert(event)
    this.ds.deleteAcc(event).subscribe((result:any)=>{
      alert(result.message)
    this.logout()
    },
    result=>{
      alert(result.error.message);
    })
    }
    
  
}
