import { Action, createAction, props } from '@ngrx/store';
import { LoginUser, User } from '../auth.interfaces';

export const login = createAction('[Login Page] Login', props<{ user: LoginUser }>());

export const loginSuccess = createAction('[Auth API] Login Success', props<{ user: User }>());

export const loginFail = createAction('[Auth API] Login Fail', props<{ error: string }>());


