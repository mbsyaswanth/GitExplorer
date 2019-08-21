import {observable} from 'mobx';
import Repo from '../Repo/index';
class User {
  userName = '';
  avatarUrl = '';
  repoUrl = '';
  serviceName = null;
  @observable repos = [];
  @observable apiStatus = null;
  constructor(username, avatarUrl, repoUrl, serviceName) {
    this.userName = username;
    this.avatarUrl = avatarUrl;
    this.repoUrl = repoUrl;
    this.serviceName = serviceName;
  }
  setRepos = repoData => {
    this.repos = repoData.map(repo => {
      new Repo(repo.name, repo.stargazers_count, repo.forks);
    });
  };
  getRepos = () => {
    let repoData = this.serviceName.getRepos();
    this.setRepos(repoData);
  };
}

export default User;
