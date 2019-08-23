import React, {Component} from 'react';
import {RepoContainer, RepoText, RepoName, RepoInfo} from './styledComponents';
import translate from '../../../../utils/language.utils';
import {observer} from 'mobx-react';
import {Button} from 'react-native-paper';
@observer
class Repo extends Component {
  render() {
    const {repoName, stars, forks} = this.props.repo;
    return (
      <RepoContainer>
        <RepoName>{repoName}</RepoName>
        <RepoInfo>
          <Button icon="star" />
          <RepoText>
            {translate('stars')} : {stars}
          </RepoText>
          <Button icon="source-fork" />
          <RepoText>
            {translate('forks')} : {forks}
          </RepoText>
        </RepoInfo>
      </RepoContainer>
    );
  }
}

export default Repo;
