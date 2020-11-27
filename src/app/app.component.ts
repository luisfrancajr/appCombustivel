import { Component, OnInit, ViewChild } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuarioService } from 'src/services/UsuarioService';
import { NavigationEnd, Router } from '@angular/router';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person-circle'
    },
    {
      title: 'Carros',
      url: '/lista-carros',
      icon: 'car-sport'
    },
    {
      title: 'Cadastrar Carro',
      url: '/cadastrar-carro',
      icon: 'car'
    },
    {
      title: 'Calcular Litros',
      url: '/calcular-litros',
      icon: 'calculator'
    },
  ];

  public usuario: Usuario = new Usuario();
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _usuarioService: UsuarioService,
    private _menu: MenuController,
    private _router: Router
  ) {
    this.initializeApp();
    this.acompanharRota();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  pegarUsuarioLogado() {
    const usuarioEncontrado: Usuario = this._usuarioService.retornarUsuarioLogado();

    if (usuarioEncontrado) {
      this.usuario = usuarioEncontrado;
    }
  }

  acompanharRota() {
    this._router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        console.log(res);
        this.pegarUsuarioLogado();
      }
    });
  }

  logout() {
    // limpar o localStorage
    this._usuarioService.logout();
    // bloquear arraste do menu
    this._menu.swipeGesture(false);
    // direcionar para pagina login
    this._router.navigate(['/login']);
  }

}
