import React, {Component} from 'react';
import {RepoContainer, RepoText, RepoName, RepoInfo} from './styledComponents';
import translate from '../../../../utils/language.utils';
class Repo extends Component {
  render() {
    return (
      <RepoContainer>
        <RepoName>{translate('repo_Name')}</RepoName>
        <RepoInfo>
          <RepoText>{translate('stars')} : 10</RepoText>
          <RepoText>{translate('forks')} : 5</RepoText>
        </RepoInfo>
      </RepoContainer>
    );
  }
}

export default Repo;
