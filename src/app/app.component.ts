import { Component } from '@angular/core';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-hw7-pipe';

  userList: User[] = [];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => {
      this.userList = value;
      console.log(this.userList);
    })
  }
}
