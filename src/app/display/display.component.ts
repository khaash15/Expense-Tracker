import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';

export interface Entry {
  id: string;
  category: string;
  price: number;
  date: string;
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  @Input() dl: any = '';
  @Output() dele = new EventEmitter<any>();
  @Output() total = new EventEmitter<any>();
  // @Output() edi = new EventEmitter<any>();
  constructor(private router: Router) {}
  del(id: string) {
    console.log(id);
    this.dele.emit(id);
  }

  edit(id: string) {
    this.router.navigate([`edit/${id}`]);
  }

  calculateTotal(): number {
    let total = 0;
    for (const item of this.dl) {
      total += item.price;
    }
    return total;
  }
}
