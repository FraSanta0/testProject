import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { ShirtPageComponent } from './components/shirt-page/shirt-page.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { UpdateComponent } from './components/update/update.component';


export const routes: Routes = [
    { path: '', component: MainComponent },
  { path: 'add', component: AddFormComponent },
  { path: 'shirt', component: ShirtPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'update', component: UpdateComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
