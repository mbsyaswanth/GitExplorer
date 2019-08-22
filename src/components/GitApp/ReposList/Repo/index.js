import React, {Component} from 'react';
import {RepoContainer, RepoText, RepoName, RepoInfo} from './styledComponents';
import translate from '../../../../utils/language.utils';
class Repo extends Component {
  render() {
    const {repoName, stars, forks} = this.props.repo;
    return (
      <RepoContainer>
        <RepoName>{repoName}</RepoName>
        <RepoInfo>
          <RepoText>
            {translate('stars')} : {stars}
          </RepoText>
          <RepoText>
            {translate('forks')} : {forks}
          </RepoText>
        </RepoInfo>
      </RepoContainer>
    );
  }
}

export default Repo;
