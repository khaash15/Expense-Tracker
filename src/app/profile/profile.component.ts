import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  @Input() name: string = 'User';
  @Input() url: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEdqBpBAeoUmUGvZ6OX32GI8xVxCTn7Ra1_UdPD03EsUzCcUwuX9ae0gYSdOK473ezts&usqp=CAU';
  @Input() id: string = 'ABC123';

  constructor(private http: HttpClient) {}
  income: any = '';
  expense: any = '';
  savingGoal: number = 0;
  remainingBalance: number = 0;
 
  ngOnInit() {
    this.http
      .get('https://648e973d75a96b6644441a66.mockapi.io/IncomeList')
      .subscribe((e: any) => {
        let total = 0;
        e.map((a: any) => {
          total = total + a.amount;
        });
        this.income = total;
        this.savingGoal = this.income * 0.5; // Set saving goal as 50% of the income
        this.calculateRemainingBalance();
      });
    // console.log(this.income);

    this.http
      .get('https://648a952717f1536d65e94edc.mockapi.io/ExpenseList')
      .subscribe((e: any) => {
     
        let total = 0;
        e.map((a: any) => {
          total = total + a.price;
        });
        this.expense = total;
        this.calculateRemainingBalance();
      });
  }
  calculateRemainingBalance() {
    this.remainingBalance = this.income - this.expense;
  }
 
}
