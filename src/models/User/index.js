import {observable} from 'mobx';
import Repo from '../Repo/index';
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
    let repoData = this.serviceName.getRepos();
    this.repos = repoData.map(repo => {
      new Repo(repo.name, repo.stargazers_count, repo.forks);
    });
  };
}

export default User;
