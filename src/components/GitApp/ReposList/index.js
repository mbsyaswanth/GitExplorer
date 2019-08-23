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

  renderLoading = () => {
    return (
      <Center>
        <ActivityIndicator size="large" color="#0000ff" />
      </Center>
    );
  };

  renderEmpty = () => {
    return (
      <Center>
        <Text> {translate('no_repos_msg')} </Text>
      </Center>
    );
  };

  renderRepos = () => {
    const {repos} = this.props.user;

    if (this.isReposEmpty()) {
      return this.renderEmpty();
    }
    return (
      <FlatList
        keyExtractor={item => item.repoName}
        data={repos}
        renderItem={({item}) => <Repo repo={item} />}
      />
    );
  };

  renderError = () => {
    const {errorMessage} = this.props.user;

    return (
      <Center>
        <Text>{errorMessage}</Text>
      </Center>
    );
  };

  render() {
    const {apiStatus} = this.props.user;
    switch (apiStatus) {
      case ApiStatus.loading:
        return this.renderLoading();

      case ApiStatus.error:
        return this.renderError();

      case ApiStatus.completed:
        return this.renderRepos();

      default:
        return null;
    }
  }
}

export default ReposList;
