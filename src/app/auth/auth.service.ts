import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Observable } from 'rxjs';
import { UserResponse, LoginUser, LoginUserRequest } from './auth.interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private apiService: ApiService) { }

    user(): Observable<UserResponse> {
        return this.apiService.get<UserResponse>('/user');
    }

    login(credentials: LoginUser): Observable<UserResponse> {
        return this.apiService.post<UserResponse, LoginUserRequest>('/users/login', { user: credentials });
    }


}
