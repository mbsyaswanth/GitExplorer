import React, {Component} from 'react';
import {Text, ActivityIndicator, FlatList} from 'react-native';
import {observer} from 'mobx-react';

import {Center} from './styledComponents';
import Repo from './Repo';

import {apiStatus as ApiStatus} from '../../../constants/ApiStatus';
import translate from '../../../utils/language.utils';

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
    return (
      <Center>
        <ActivityIndicator size="large" color="#0000ff" />
      </Center>
    );
  };

  renderEmpty = () => {
    const {apiStatus} = this.props.user;
    if (apiStatus === ApiStatus.completed) {
      return (
        <Center>
          <Text> {translate('no_repos_msg')} </Text>
        </Center>
      );
    }
  };

  renderRepos = () => {
    const {repos} = this.props.user;
    return (
      <FlatList
        keyExtractor={item => item.repoName}
        data={repos}
        renderItem={({item}) => <Repo repo={item} />}
      />
    );
  };

  renderError = () => {
    const {apiStatus, errorMessage} = this.props.user;
    if (apiStatus === ApiStatus.error) {
      return (
        <Center>
          <Text>{errorMessage}</Text>
        </Center>
      );
    }
  };

  render() {
    return (
      <>
        {this.renderEmpty()}
        {this.renderError()}
        {this.isLoading() ? this.renderLoading() : this.renderRepos()}
      </>
    );
  }
}

export default ReposList;
