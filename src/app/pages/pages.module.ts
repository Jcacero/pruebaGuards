import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* modulo de shared para navbar,footer,etc*/
import { SharedModule } from '../shared/shared.module';

/* componentes paginas */
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdminComponent } from './admin/admin.component';
import { LogInComponent } from './log-in/log-in.component';
/* componentes */
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    AdminComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    ContactoComponent,
    AdminComponent,
    LogInComponent,
    InputTextModule
  ]
})
export class PagesModule { }
