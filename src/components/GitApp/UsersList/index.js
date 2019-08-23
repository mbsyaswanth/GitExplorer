import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';
import {observer} from 'mobx-react';
import {Actions} from 'react-native-router-flux';

import User from './User';
import {Container, Center} from './styledComponents';

import {apiStatus as ApiStatus} from '../../../constants/ApiStatus';
import translate from '../../../utils/language.utils';

@observer
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {language: 'en'};
  }

  componentWillMount() {
    const {getUsers} = this.props.store;
    getUsers();
    Actions.refresh({key: 'users', title: translate('git_Users')});
  }

  renderUsers = () => {
    const {users} = this.props.store;
    return (
      <FlatList
        keyExtractor={item => item.userName}
        data={users}
        renderItem={({item}) => <User user={item} />}
      />
    );
  };

  renderLoading = () => {
    return (
      <Center>
        <ActivityIndicator size="large" color="#0000ff" />
      </Center>
    );
  };

  renderError = () => {
    const {errorMessage} = this.props.store;

    return (
      <Center>
        <Text>{errorMessage}</Text>
      </Center>
    );
  };

  render() {
    const {apiStatus} = this.props.store;
    switch (apiStatus) {
      case ApiStatus.loading:
        return this.renderLoading();

      case ApiStatus.error:
        return this.renderError();

      case ApiStatus.completed:
        return this.renderUsers();

      default:
        return null;
    }
  }
}

export default UserList;
