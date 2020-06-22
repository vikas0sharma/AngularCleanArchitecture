import { User } from '../auth.interfaces';
import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from './auth.actions'

export interface AuthState {
    isAuthenticated: boolean;
    user: User;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null
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
            user: action.user
        }
    })
);

export function authReducer(state: AuthState | undefined, action: Action) {
    reducer(state, action);
}