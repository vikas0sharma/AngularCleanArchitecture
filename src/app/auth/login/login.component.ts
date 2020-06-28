import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../state/auth.reducer';

import * as fromAuthActions from '../state/auth.actions';
import { authQuery } from '../state/auth.selectors';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    error$ = this.store.select(authQuery.getAuthError);


    constructor(private fb: FormBuilder,
        private store: Store<AuthState>) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: '',
            password: ''
        });
    }

    submit() {
        if (!this.loginForm.valid) {
            return;
        }
        const val = this.loginForm.value;
        const u = {
            email: val.email,
            password: val.password
        }
        this.store.dispatch(fromAuthActions.login({ user: u }));
    }

}
