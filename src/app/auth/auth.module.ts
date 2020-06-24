import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer, initialState } from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule,
        AuthRoutingModule,
        MaterialModule,
        StoreModule.forFeature('auth', authReducer, {
            initialState : initialState
        }),
        EffectsModule.forFeature([AuthEffects])
    ]
})
export class AuthModule { }
