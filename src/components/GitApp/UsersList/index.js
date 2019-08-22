import React, {Component} from 'react';
import {Text, View} from 'react-native';
import User from './User';
import translate from '../../../utils/language.utils';
class UserList extends Component {
  render() {
    return (
      <View>
        <Text> {translate('user_List')} </Text>
        <User />
      </View>
    );
  }
}

export default UserList;
