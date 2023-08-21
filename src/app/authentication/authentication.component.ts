import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss', './login-form.scss']
})
export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Получите значения логина и пароля из формы
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    // Здесь вы можете добавить логику для отправки логина и пароля на сервер
    // и выполнения проверки аутентификации. Например:
    if (username === 'ваш_логин' && password === 'ваш_пароль') {
      // В случае успешной аутентификации перенаправьте пользователя на другую страницу
      this.router.navigate(['/posts']); // Здесь '/posts' - это путь к странице постов
    } else {
      // В случае неверных учетных данных можно вывести сообщение об ошибке
      console.log('Неверные учетные данные');
    }
  }
}
