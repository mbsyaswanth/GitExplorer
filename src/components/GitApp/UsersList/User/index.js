import React, {Component} from 'react';
import {Text, View, Image, TouchableNativeFeedback} from 'react-native';
import {UserContainer, UserText, Avatar} from './styledComponents';
import {Actions, ActionConst} from 'react-native-router-flux';
import {goToRepos} from '../../../../utils';
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
          <UserText> User </UserText>
        </UserContainer>
      </TouchableNativeFeedback>
    );
  }
}

export default User;
