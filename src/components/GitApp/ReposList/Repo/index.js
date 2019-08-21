import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {RepoContainer, RepoText, RepoName, RepoInfo} from './styledComponents';
class Repo extends Component {
  render() {
    return (
      <RepoContainer>
        <RepoName>Repo</RepoName>
        <RepoInfo>
          <RepoText>stars</RepoText>
          <RepoText>Forks</RepoText>
        </RepoInfo>
      </RepoContainer>
    );
  }
}

export default Repo;
