import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators'

import * as AuthActions from './auth.actions'
import { AuthService } from '../auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
        private authService: AuthService) {
    }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            exhaustMap(data =>
                this.authService.login(data.user).pipe(
                    map((userResponse) => AuthActions.loginSuccess({ user: userResponse.user })),
                    catchError(result => of(AuthActions.loginFail(result.error)))
                )
            )
        )
    );

    loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(data => console.log(data.user)),
    ),
        { dispatch: false },
    );

}