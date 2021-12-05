import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log('enviar datos');
    console.log(this.userName, this.password);
    this.authService.autorizar(this.userName, this.password).subscribe({
      complete: () => this.router.navigate(['mascotas']),
      error: (err) => alert('Verifica tus datos'),
    });
  }
}
