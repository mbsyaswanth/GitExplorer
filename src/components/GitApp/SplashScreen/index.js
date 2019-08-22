import React, {Component} from 'react';

import {Actions, ActionConst} from 'react-native-router-flux';
import {Container, Logo} from './styledComponents';
import translate from '../../../utils/language.utils';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.users({type: ActionConst.REPLACE});
    }, 1500);
  }

  render() {
    return (
      <Container>
        <Logo> {translate('git_Explorer')} </Logo>
      </Container>
    );
  }
}

export default SplashScreen;
