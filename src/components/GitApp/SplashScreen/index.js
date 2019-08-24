import React, {Component} from 'react';

import {Container, Logo} from './styledComponents';

import translate from '../../../utils/language.utils';
import {goToUsers} from '../../../utils/navigation';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      goToUsers();
    }, 1000);
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
