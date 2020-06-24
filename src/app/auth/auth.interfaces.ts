export interface User {
    email: string;
    token: string;
    username: string;
}


export interface UserResponse {
    user: User;
}

export interface LoginUser {
    email: string;
    password: string;
}

export interface LoginUserRequest {
    email: string;
    password: string;
  }