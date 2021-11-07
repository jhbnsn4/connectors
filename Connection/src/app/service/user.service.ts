import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Hard-coded list of users
  // TODO: Set this up to be received from an Observable to better simulate reality
  private users: IUser[] = [
    {
      id: 1,
      email: "test@gmail.com",
      password: "P4ss", 
      firstName: "John",
      lastName: "Doe"
    },
    {
      id: 2,
      email: "a",
      password: "P4ss", 
      firstName: "UserA",
      lastName: "UserA_LastName"
    },

  ];

  constructor(private router: Router) { }

  /**
   * @returns array of users registered in our system
   */
  getUsers(): IUser[] {
    return this.users;
  }

  /**
   * Attempts to log user in by checking their email & password against registered users
   * @returns (login_successful)
   */
  loginUser(email:string, password: string): boolean {
    for (let user of this.users) {
      if (email === user.email && password === user.password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userFirstName", user.firstName);
        return true;
      }

    }
    return false;
  }
  /**
   * Removes localStorage data about current user and navigates to index page
   */
  logoutUser() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userFirstName");
    this.router.navigate(['']);
  }

  /**
   * @returns true if logged in
   */
  checkLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  /**
   * @returns current user's first name or '' if user is logged out
   */
  getUserFirstName(): string {
    let name = localStorage.getItem('userFirstName');
    return (name) ? name : "";
  }



}
