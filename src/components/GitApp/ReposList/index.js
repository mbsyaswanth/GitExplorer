import React, {Component} from 'react';
import {Text, ActivityIndicator, FlatList} from 'react-native';
import Repo from './Repo';
import {apiStatus as ApiStatus} from '../../../constants/ApiStatus';
import {observer} from 'mobx-react';
@observer
class ReposList extends Component {
  componentWillMount() {
    const {getRepos, repoUrl} = this.props.user;
    console.log(this.props.user);
    if (this.isReposEmpty()) {
      console.log('inside repo');
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
    return (
      <FlatList
        data={repos}
        keyExtractor={() => Date.now()}
        renderItem={({item}) => <Repo repo={item} />}
      />
    );
  };

  renderError = () => {
    const {apiStatus, errorMessage} = this.props.user;
    if (apiStatus === ApiStatus.error) return <Text>{errorMessage}</Text>;
  };

  render() {
    return (
      <>
        {this.renderError()}
        {this.isLoading() ? this.renderLoading() : this.renderRepos()}
      </>
    );
  }
}

export default ReposList;
