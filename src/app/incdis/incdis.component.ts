import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incdis',
  templateUrl: './incdis.component.html',
  styleUrls: ['./incdis.component.css']
})
export class IncdisComponent {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  submit(msg: any) {
    // console.log(msg);
    this.apipost(msg).subscribe((i) => {
      this.apiget().subscribe((i) => {
        this.IncomeList = i;
      });
    });
  }
  remove(a: any) {
    // console.log(a)
    this.apidelete(a).subscribe((i) => {
      this.apiget().subscribe((i) => {
        this.IncomeList = i;
      });
    });
  }


  apiget() {
    return this.http.get(
      'https://648e973d75a96b6644441a66.mockapi.io/IncomeList'
    );
  }
  apipost(data: any) {
    return this.http.post(
      'https://648e973d75a96b6644441a66.mockapi.io/IncomeList',
      data
    );
  }

  apidelete(id: number) {
    return this.http.delete(
      `https://648e973d75a96b6644441a66.mockapi.io/IncomeList/${id}`
    );
  }
  IncomeList: any = '';
  ngOnInit() {
    this.apiget().subscribe((e) => {
      this.IncomeList = e;
      console.log(this.IncomeList);
    });
  }
}
