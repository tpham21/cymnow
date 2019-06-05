import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes ,{useHash: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
