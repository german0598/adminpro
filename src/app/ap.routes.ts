import { Routes, RouterModule } from '@angular/router';

/** ROUTAS */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot( routes, { useHash: true } );
