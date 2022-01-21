import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

  constructor(public services: Services) { }
  displayedColumns: string[] = ['name', 'number', 'expiry', 'price', 'shipping', 'action'];
  dataSource = [];

  data: any = null;
  avatar = `https://identicon-api.herokuapp.com/${this.data?.users.email}/100?format=png`
  async cancelTransaction(data: any) {
    let r = await this.services.cancelTransaction(data);
    return r;
  }
  logOut() {
    localStorage.removeItem('loggedIn')
    window.location.href = "/"
  }
  ngOnInit(): void {
    this.services.getTransactions().then((value: any) => {
      console.log(value);
      this.data = value;
      this.dataSource = value.transactions
    }, reason => { })
  }

}
