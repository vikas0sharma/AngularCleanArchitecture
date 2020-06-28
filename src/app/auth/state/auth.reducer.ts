import { User } from '../auth.interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from './auth.actions'



export interface Auth {
    isAuthenticated: boolean;
    user: User;
    errorMessage: string;
}
export interface AuthState {
    readonly auth: Auth
}

export const initialState: Auth = {
    isAuthenticated: false,
    user: null,
    errorMessage: ''
}

const reducer = createReducer(initialState,
    on(AuthActions.login, (state, action) => {
        return {
            ...state
        }
    }),
    on(AuthActions.loginSuccess, (state, action) => {
        return {
            ...state,
            isAuthenticated: true,
            user: action.user,
            errorMessage: ''
        }
    }),
    on(AuthActions.loginFail, (state, action) => {
        return {
            ...state,
            isAuthenticated: false,
            user: null,
            errorMessage: action.error
        }
    })
);

export function authReducer(state: Auth | undefined, action: Action): Auth {
    return reducer(state, action);
}