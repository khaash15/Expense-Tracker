import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css'],
})
export class Display2Component {
  @Input() dl: any = '';
  @Output() dele = new EventEmitter<any>();
  // @Output() edi = new EventEmitter<any>();
  del(id: string) {
    console.log(id);
    this.dele.emit(id);
  }

  calculateTotal(): number {
    let total = 0;
    for (const item of this.dl) {
      total += item.amount;
    }
    return total;
  }
}
