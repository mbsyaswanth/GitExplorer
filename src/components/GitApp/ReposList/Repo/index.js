import React, {Component} from 'react';
import {observer} from 'mobx-react';

import {
  RepoContainer,
  RepoText,
  RepoName,
  RepoInfoContainer,
  RepoInfoBtn,
  IconImage,
} from './styledComponents';

import translate from '../../../../utils/language.utils';

@observer
class Repo extends Component {
  render() {
    const {repoName, stars, forks} = this.props.repo;
    return (
      <RepoContainer>
        <RepoName>{repoName}</RepoName>
        <RepoInfoContainer>
          <RepoInfoBtn>
            <IconImage source={require('../../../../assets/images/star.png')} />
            <RepoText>
              {translate('stars')} : {stars}
            </RepoText>
          </RepoInfoBtn>
          <RepoInfoBtn>
            <IconImage source={require('../../../../assets/images/fork.png')} />
            <RepoText>
              {translate('forks')} : {forks}
            </RepoText>
          </RepoInfoBtn>
        </RepoInfoContainer>
      </RepoContainer>
    );
  }
}

export default Repo;
