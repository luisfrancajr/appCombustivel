import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Login } from 'src/models/Login';
import { LoginService } from 'src/services/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login: Login = new Login();
  constructor(private _menu: MenuController, 
    private _route: Router, private _loginService: LoginService) {}

  ngOnInit() {
    console.log('O menu foi bloqueado.');
    // bloqueando o menu lateral ao construir a view
    this._menu.swipeGesture(false);
  }

  ionViewDidEnter() {
    console.log('O menu foi bloqueado.');
    // bloqueando o menu lateral ao construir a view
    this._menu.swipeGesture(false);
  }

  ionViewWillLeave() {
    // habilitando o arraste do menu ao sair da view
    this._menu.swipeGesture(true);
  }

  fazerLogin() {
    console.log(this.login);
    this._loginService.login(this.login);
  }

  fazerCadastro() {
    this._route.navigate(['/cadastrar-usuario']);
  }

}
