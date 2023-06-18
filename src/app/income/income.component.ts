import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent {
  form = this.fb.group({
    category: ['', Validators.required],
    decription: ['', Validators.required],
    amount: ['', Validators.required],
  });
  get category() {
    return this.form.get('category');
  }
  get decription() {
    return this.form.get('decription');
  }
  get amount() {
    return this.form.get('amount');
  }

  @Output() add = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  submitIncome() {
    this.add.emit({
      category: this.category?.value,
      decription: this.decription?.value,
      amount: this.amount?.value,
    });
  }
}
