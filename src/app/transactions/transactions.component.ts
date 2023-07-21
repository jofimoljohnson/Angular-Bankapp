import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
acno:any
transactions:any;
  constructor(private ds:DataService) { 

    this.acno= JSON.parse(localStorage.getItem('currentAcno') || '');
   this.ds.getTransaction(this.acno).subscribe((result: any) => {
    this.transactions=result.transaction
  },
  result=>{
    alert(result.error.message)
  }
  );
}


  ngOnInit(): void {
  }

}
