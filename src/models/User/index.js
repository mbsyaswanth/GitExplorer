import {observable} from 'mobx';
import Repo from '../Repo/index';
import UserServices from '../../services/UserServices/index.api';
import {apiStatus} from '../../constants';
class User {
  userName = '';
  avatarUrl = '';
  repoUrl = '';
  serviceName = null;
  @observable repos = [];
  @observable apiState = null;
  constructor(username, avatarUrl, repoUrl, serviceName = new UserServices()) {
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
  getRepos = async () => {
    this.apiState = apiStatus.loading;
    try {
      let response = await this.serviceName.getRepos(this.repoUrl);
      let reposData = await response.json();
      this.setRepos(reposData);
      this.apiState = apiStatus.completed;
    } catch (e) {
      this.apiState = apiStatus.error;
    }
  };
}

export default User;
