import { Injectable } from '@angular/core';

 const USER_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODUwMTExMzIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MjkxNTUiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjI5MTU1In0.vFNwMouibfe4VKFKvSkwmG4xfYwZ2t1IfKn7Eep-4xA';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
