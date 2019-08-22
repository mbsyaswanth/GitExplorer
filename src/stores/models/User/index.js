import {observable, action} from 'mobx';
import Repo from '../Repo/index';

import {apiStatus} from '../../../constants/ApiStatus';
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
    this.errorMessage = '';
  }
  @action.bound setRepos(repoData) {
    this.repos = repoData.map(repo => {
      new Repo(repo.name, repo.stargazers_count, repo.forks);
    });
  }
  @action.bound async getRepos() {
    this.setApiStatus(apiStatus.loading);
    try {
      let response = await this.serviceName.getRepos(this.repoUrl);
      let reposData = await response.json();
      this.setRepos(reposData);
      this.setApiStatus(apiStatus.completed);
    } catch (e) {
      this.setApiStatus(apiStatus.error);
      this.setErrorMessage('something went wrong..');
    }
  }
  @action.bound setApiStatus(status) {
    this.apiStatus = status;
  }

  @action.bound setErrorMessage(message) {
    this.errorMessage = message;
  }
}

export default User;
