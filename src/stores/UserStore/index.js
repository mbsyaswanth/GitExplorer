import {observable, action} from 'mobx';
import User from '../../models/User';
import {apiStatus} from '../../constants';
import UserServices from '../../services/UserServices/index.api';

class UserStore {
  @observable users = [];
  @observable apiStatus = '';
  @action.bound setUsers(userData) {
    this.users = userData.map(user => {
      new User(user.login, user.avatar_url, user.repos_url);
    });
  }
  @action.bound async getUsers() {
    this.apiStatus = apiStatus.loading;
    try {
      const services = new UserServices();
      const response = await services.getUsers();
      const usersData = await response.json();
      this.setUsers(usersData);
      this.apiStatus = apiStatus.completed;
    } catch (e) {
      this.apiStatus = apiStatus.error;
    }
  }
}

export default UserStore;
