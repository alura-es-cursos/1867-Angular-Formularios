import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../auth/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user$ = this.userService.returnUsuario();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.userService.eliminarToken();
    this.router.navigate(['']);
  }
}
