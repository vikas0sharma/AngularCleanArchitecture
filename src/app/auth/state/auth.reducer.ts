import { AuthActions, AuthActionTypes } from './auth.actions';

export interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
}


export function reducer(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {
      case AuthActionTypes.LoginSuccess:
        return { ...state, isAuthenticated: true };
  
      default:
        return state;
    }
  }