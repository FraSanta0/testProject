import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { ShirtPageComponent } from './components/shirt-page/shirt-page.component';


export const routes: Routes = [
    { path: '', component: MainComponent },
  { path: 'add', component: AddFormComponent },
  { path: 'shirt', component: ShirtPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
