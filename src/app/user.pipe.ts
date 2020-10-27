import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/User';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: User[], ...args: string[]): any {
    // let oneUser: string;
    let oneUser = '';
    value.forEach(user => {
      oneUser += 
        `<div>
          <ul>
            <li> ${user.id} --- ${user.name} --- ${user.username} </li>
          </ul>
        </div>`             
    })
    return oneUser;
  }

}
