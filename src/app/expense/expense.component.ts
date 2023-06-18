import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent {
  // bal: number = 0;

  form = this.fb.group({
    category: ['', Validators.required],
    price: ['', Validators.required],
    date: ['', Validators.required],
  });
  get category() {
    return this.form.get('category');
  }
  get price() {
    return this.form.get('price');
  }
  get date() {
    return this.form.get('date');
  }
  @Output() add = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  onsubmit() {
    this.add.emit({
      category: this.category?.value,
      price: this.price?.value,
      date: this.date?.value,
    });
  }
}
