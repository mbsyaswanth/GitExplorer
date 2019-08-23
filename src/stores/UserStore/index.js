import {observable, action} from 'mobx';

import User from '../models/User';

import {apiStatus} from '../../constants/ApiStatus';
import {setLocale} from '../../utils/language.utils';
import {ErrorMessage} from '../../constants/Errors';

class UserStore {
  @observable users = [];
  @observable apiStatus = '';
  @observable errorMessage = '';
  @observable selectedLanguageName = 'en';

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

  isUsersEmpty = () => {
    if (this.users.length === 0) {
      return true;
    }
    return false;
  };

  @action.bound async getUsers() {
    try {
      if (this.isUsersEmpty()) {
        this.setApiStatus(apiStatus.loading);
        const response = await this.services.getUsers();
        const usersData = await response.json();
        this.setUsers(usersData);
      }
    } catch (e) {
      this.setApiStatus(apiStatus.error);
      this.setErrorMessage(ErrorMessage);
    }
  }

  @action.bound setApiStatus(status) {
    this.apiStatus = status;
  }

  @action.bound setErrorMessage(message) {
    this.errorMessage = message;
  }

  @action.bound setLanguageName(languageName) {
    this.selectedLanguageName = languageName;
    setLocale(this.selectedLanguageName);
  }
}

export default UserStore;
