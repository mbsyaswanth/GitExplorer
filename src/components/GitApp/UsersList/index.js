import React, {Component} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import User from './User';
import translate from '../../../utils/language.utils';
import {Container, Language} from './styledComponents';
import {apiStatus as ApiStatus} from '../../../constants/ApiStatus';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {language: 'en'};
  }

  componentWillMount() {
    const {getUsers} = this.props.store;
    getUsers();
  }

  isLoading = () => {
    const {apiStatus} = this.props.store;
    if (apiStatus === ApiStatus.loading) {
      return true;
    } else {
      return false;
    }
  };

  renderUsers = () => {
    const {users} = this.props.store;
    return users.map(user => {
      return <User user={user} />;
    });
  };

  renderLoading = () => {
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  render() {
    return (
      <Container>
        <Language
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Language.Item label="English" value="en" />
          <Language.Item label="తెలుగు" value="tel" />
          <Language.Item label="हिंदी" value="hin" />
        </Language>
        {this.isLoading ? this.renderLoading() : this.renderUsers()}
      </Container>
    );
  }
}

export default UserList;
