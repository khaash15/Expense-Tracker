import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from '../display/display.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  form = this.fb.group({
    category: ['', Validators.required],
    price: ['', Validators.required],
    date: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  @Output() add = new EventEmitter<any>();

  get category() {
    return this.form.get('category');
  }
  get price() {
    return this.form.get('price');
  }
  get date() {
    return this.form.get('date');
  }
  entryId: string = '';
  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      this.entryId = route.get('id') as string;
      this.getEntryById(this.entryId as string).subscribe((data) => {
        this.form.patchValue(data as any);
      });
    });
  }
  getEntryById(id: string) {
    return this.http.get<Entry>(
      `https://648a952717f1536d65e94edc.mockapi.io/ExpenseList/${id}`
    );
  }

  updateEntry(id: string, entry: Entry) {
    return this.http.put<any>(
      `https://648a952717f1536d65e94edc.mockapi.io/ExpenseList/${id}`,
      entry
    );
  }
  onsubmit() {
    if (this.form.valid) {
      const updateEntry = this.form.value;
      console.log(updateEntry);
      this.updateEntry(this.entryId, updateEntry as any).subscribe(() =>
        this.router.navigate([`/expdis`])
      );
    }
  }
}
