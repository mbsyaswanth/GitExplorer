import {observable, action} from 'mobx';
import User from '../../models/User';

class UserStore {
  constructor() {}
  @observable users = [];
  @action.bound setUsers(userData) {
    this.users = userData.map(user => {
      new User(user.login, user.avatar_url, user.repos_url);
    });
  }
}

export default UserStore;
