import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    Login = '[Login Page] Login',
    LoginSuccess = '[Auth API] Login Success',
    LoginFailure = '[Auth API] Login Failure',
    Logout = '[Auth] Confirm Logout',
}


export class Login implements Action {
    readonly type = AuthActionTypes.Login;
}


export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess;
}

export class LoginFailure implements Action {
    readonly type = AuthActionTypes.LoginFailure;

    constructor(public payload: any) { }
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;
}

export type AuthActions =
    | Login
    | LoginSuccess
    | LoginFailure
    | Logout;