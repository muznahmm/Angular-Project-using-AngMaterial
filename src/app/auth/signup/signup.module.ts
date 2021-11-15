import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth.module';
import { SingupRoutingModule } from './signup-routing.module';



@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    SingupRoutingModule,
  ],
})
export class SignupModule { }