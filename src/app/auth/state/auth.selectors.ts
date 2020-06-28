import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, Auth } from './auth.reducer';



export const getAuth = createFeatureSelector<Auth>('auth');

export const getIsAuthenticated = createSelector(
    getAuth,
    (auth) => auth.isAuthenticated
);


export const getAuthError = createSelector(
    getAuth,
    (auth) => auth.errorMessage
);


export const authQuery = {
    getAuth,
    getIsAuthenticated,
    getAuthError
};