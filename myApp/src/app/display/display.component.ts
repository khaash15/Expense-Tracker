import { Component ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() dl: any = '';
  @Output() dele = new EventEmitter<any>();
  del(id: string) {
    console.log(id);
    this.dele.emit(id);
  }
  
}
