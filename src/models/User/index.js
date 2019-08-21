import {observable} from 'mobx';

class User {
  userName = '';
  avatarUrl = '';
  repoUrl = '';
  serviceName = null;
  @observable repos = [];
  constructor(username, avatarUrl, repoUrl, serviceName) {
    this.userName = username;
    this.avatarUrl = avatarUrl;
    this.repoUrl = repoUrl;
    this.serviceName = serviceName;
  }
  setRepos = () => {
    this.repos = [...this.repos, this.serviceName.getRepos()];
  };
}

export default User;
