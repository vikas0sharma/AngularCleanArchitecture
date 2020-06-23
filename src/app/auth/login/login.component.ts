import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    constructor(private fb: FormBuilder) { }

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
        console.log(this.loginForm.value);
    }

}
