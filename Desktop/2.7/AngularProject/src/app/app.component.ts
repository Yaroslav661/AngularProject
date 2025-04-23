import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRole: 'user' | 'admin' = 'user';

  constructor(private authService: AuthService) {    
    this.authService.currentRole$.subscribe(role => {
      this.currentRole = role;
      console.log('Role updated in component:', role); 
    });
  }

  toggleRole() {
    this.authService.toggleRole();
  }
}