import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Login } from 'src/models/Login';
import { LoginService } from 'src/services/LoginService';
import { UsuarioService } from 'src/services/UsuarioService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login: Login = new Login();
  constructor(private _menu: MenuController, 
    private _route: Router, private _loginService: LoginService, 
    private _usuarioService: UsuarioService) {}

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
    this._loginService.login(this.login).subscribe((res) => {
      this._usuarioService.logar(res);
      this._route.navigate(['/lista-carros']);
      console.log(res);
    });

  }

  fazerCadastro() {
    this._route.navigate(['/cadastrar-usuario']);
  }

}
