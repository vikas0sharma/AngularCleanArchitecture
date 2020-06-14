
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../state/app.state';
import * as fromAuth from './auth.reducer';


export interface State extends fromRoot.State {
    auth: fromAuth.AuthState;
}

// selectors functions

const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export const getIsAuthenticated = createSelector(
    getAuthState,
    auth => auth.isAuthenticated
);
