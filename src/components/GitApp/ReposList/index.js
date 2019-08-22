import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import Repo from './Repo';
import {apiStatus as ApiStatus} from '../../../constants/ApiStatus';
import {observer} from 'mobx-react';
@observer
class ReposList extends Component {
  componentWillMount() {
    const {getRepos} = this.props.user;
    if (this.isReposEmpty()) {
      getRepos();
    }
  }

  isReposEmpty = () => {
    const {repos} = this.props.user;
    if (repos.length === 0) {
      return true;
    }
    return false;
  };

  isLoading = () => {
    const {apiStatus} = this.props.user;
    if (apiStatus === ApiStatus.loading) {
      return true;
    } else {
      return false;
    }
  };

  renderLoading = () => {
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  renderRepos = () => {
    const {repos} = this.props.user;
    return repos.map(repo => {
      return <Repo repo={repo} />;
    });
  };

  render() {
    return (
      <View>
        {this.isLoading() ? this.renderLoading() : this.renderRepos()}
      </View>
    );
  }
}

export default ReposList;
