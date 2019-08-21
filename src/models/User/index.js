import {observable} from 'mobx';

class User {
  userName = '';
  avatarUrl = '';
  repoUrl = '';
  @observable repos = [];
  constructor(username, avatarUrl, repoUrl) {
    this.userName = username;
    this.avatarUrl = avatarUrl;
    this.repoUrl = repoUrl;
  }
}

export default User;
