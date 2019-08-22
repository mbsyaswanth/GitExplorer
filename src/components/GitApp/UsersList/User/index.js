import React, {Component} from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {UserContainer, UserText, Avatar} from './styledComponents';
import {goToRepos} from '../../../../utils/navigation';
import {observer} from 'mobx-react';
@observer
class User extends Component {
  render() {
    const {userName, avatarUrl} = this.props.user;
    return (
      <TouchableNativeFeedback
        data-testid="user"
        onPress={() => goToRepos(this.props.user)}>
        <UserContainer>
          <Avatar
            source={{
              uri: avatarUrl,
            }}
          />
          <UserText> {userName} </UserText>
        </UserContainer>
      </TouchableNativeFeedback>
    );
  }
}

export default User;
