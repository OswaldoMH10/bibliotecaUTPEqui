import { store } from '../store';

export class HomeViewModel {
  static getUserInfo() {
    const { user } = store.getState().auth;
    return user;
  }

  static isAuthenticated() {
    const { isAuthenticated } = store.getState().auth;
    return isAuthenticated;
  }
}