import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  submit(msg: any) {
    // console.log(msg);
    this.apipost(msg).subscribe((i) => {
      this.apiget().subscribe((i) => {
        this.ExpenseList = i;
      });
    });
  }
  remove(a: any) {
    // console.log(a)
    this.apidelete(a).subscribe((i) => {
      this.apiget().subscribe((i) => {
        this.ExpenseList = i;
      });
    });
  }
  constructor(private http: HttpClient) {}
  apiget() {
    return this.http.get('https://648a952717f1536d65e94edc.mockapi.io/ExpenseList');
  }
  apipost(data: any) {
    return this.http.post(
      'https://648a952717f1536d65e94edc.mockapi.io/ExpenseList',
      data
    );
  }
  apidelete(id: number) {
    return this.http.delete(
      `https://648a952717f1536d65e94edc.mockapi.io/ExpenseList/${id}`
    );
  }
  ExpenseList: any = '';
  ngOnInit() {
    this.apiget().subscribe((e) => {
      this.ExpenseList = e;
      console.log(this.ExpenseList);
    });
  }

}
