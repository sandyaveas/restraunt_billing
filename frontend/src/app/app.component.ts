import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  isloggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.isloggedIn = this.authService.isLoggedIn();
  }


}
