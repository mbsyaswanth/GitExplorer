import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {RepoContainer, RepoText, RepoName, RepoInfo} from './styledComponents';
class Repo extends Component {
  render() {
    return (
      <RepoContainer>
        <RepoName>Repo Name</RepoName>
        <RepoInfo>
          <RepoText>stars : 10</RepoText>
          <RepoText>Forks : 5</RepoText>
        </RepoInfo>
      </RepoContainer>
    );
  }
}

export default Repo;
