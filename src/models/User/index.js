import {observable, action} from 'mobx';
import Repo from '../Repo/index';

import {apiStatus} from '../../constants';
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
  @action.bound setRepos(repoData) {
    this.repos = repoData.map(repo => {
      new Repo(repo.name, repo.stargazers_count, repo.forks);
    });
  }
  getRepos = async () => {
    this.apiStatus = apiStatus.loading;
    try {
      let response = await this.serviceName.getRepos(this.repoUrl);
      let reposData = await response.json();
      this.setRepos(reposData);
      this.apiStatus = apiStatus.completed;
    } catch (e) {
      this.apiStatus = apiStatus.error;
    }
  };
}

export default User;
