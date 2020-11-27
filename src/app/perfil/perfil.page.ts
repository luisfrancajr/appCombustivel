import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/models/Usuario';
import { UsuarioService } from 'src/services/UsuarioService';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public usuario: Usuario = new Usuario();
  constructor(private _usuarioService: UsuarioService, private _alert: AlertController) {}

  ionViewDidEnter() {
    this.usuario = this._usuarioService.retornarUsuarioLogado();
  }

  ngOnInit() {
  }

  atualizarUsuario() {
    this._usuarioService.atualizar(this.usuario).subscribe(res => {
      if (res) {
        this._usuarioService.logar(res);
        this.mostrarMensagemSucesso();
      }
    });
  }

  async mostrarMensagemSucesso() {
    const alert = await this._alert.create({
      cssClass: 'modal-sucesso',
      header: 'Atualização de cadastro',
      message: 'Seus dados foram atualizados com sucesso!',
      buttons: ['Fechar']
    });

    await alert.present();
  }

}
