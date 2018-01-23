import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headertitle;
  constructor(public authService: AuthService) { }

  signOut(){
    this.authService.logOut();
  }

  ngOnInit() {
  }

}
