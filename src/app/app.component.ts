import { Component } from '@angular/core';
import { NavbarComponent} from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app-angular';
}
