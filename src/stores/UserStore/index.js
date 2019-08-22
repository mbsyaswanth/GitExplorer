import {observable, action} from 'mobx';
import User from '../models/User';
import {apiStatus} from '../../constants/ApiStatus';

class UserStore {
  @observable users = [];
  @observable apiStatus = '';
  @observable errorMessage = '';

  constructor(services) {
    this.services = services;
  }

  @action.bound setUsers(userData) {
    this.users = userData.map(user => {
      return new User(
        user.login,
        user.avatar_url,
        user.repos_url,
        this.services,
      );
    });
    this.setApiStatus(apiStatus.completed);
  }

  @action.bound async getUsers() {
    try {
      this.setApiStatus(apiStatus.loading);
      const response = await this.services.getUsers();
      const usersData = await response.json();
      this.setUsers(usersData);
    } catch (e) {
      this.setApiStatus(apiStatus.error);
      this.setErrorMessage('something went wrong');
    }
  }

  @action.bound setApiStatus(status) {
    this.apiStatus = status;
  }

  @action.bound setErrorMessage(message) {
    this.errorMessage = message;
  }
}

export default UserStore;
