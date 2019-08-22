import React, {Component} from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {UserContainer, UserText, Avatar} from './styledComponents';
import {goToRepos} from '../../../../utils/navigation';
import translate from '../../../../utils/language.utils';
class User extends Component {
  render() {
    return (
      <TouchableNativeFeedback data-testid="user" onPress={() => goToRepos()}>
        <UserContainer>
          <Avatar
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
          <UserText> {translate('user')} </UserText>
        </UserContainer>
      </TouchableNativeFeedback>
    );
  }
}

export default User;
