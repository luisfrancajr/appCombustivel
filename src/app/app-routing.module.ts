import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar-usuario',
    loadChildren: () => import('./cadastrar-usuario/cadastrar-usuario.module').then( m => m.CadastrarUsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'carro',
    loadChildren: () => import('./carro/carro.module').then( m => m.CarroPageModule)
  },
  {
    path: 'lista-carros',
    loadChildren: () => import('./lista-carros/lista-carros.module').then( m => m.ListaCarrosPageModule)
  },
  {
    path: 'cadastrar-carro',
    loadChildren: () => import('./cadastrar-carro/cadastrar-carro.module').then( m => m.CadastrarCarroPageModule)
  },
  {
    path: 'calcular-litros',
    loadChildren: () => import('./calcular-litros/calcular-litros.module').then( m => m.CalcularLitrosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
