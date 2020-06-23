import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule,
        AuthRoutingModule,
        MaterialModule,
    ]
})
export class AuthModule { }
