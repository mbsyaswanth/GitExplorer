import React, {Component} from 'react';

import {Actions, ActionConst} from 'react-native-router-flux';
import {Container, Logo} from './styledComponents';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.users({type: ActionConst.REPLACE});
    }, 1500);
  }

  render() {
    return (
      <Container>
        <Logo> Git Explorer </Logo>
      </Container>
    );
  }
}

export default SplashScreen;
