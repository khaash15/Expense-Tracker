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
}
