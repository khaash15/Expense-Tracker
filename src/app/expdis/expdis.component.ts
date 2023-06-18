import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expdis',
  templateUrl: './expdis.component.html',
  styleUrls: ['./expdis.component.css']
})
export class ExpdisComponent {

  constructor(private fb: FormBuilder, private http: HttpClient) {}
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

  apiget() {
    return this.http.get(
      'https://648a952717f1536d65e94edc.mockapi.io/ExpenseList'
    );
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
