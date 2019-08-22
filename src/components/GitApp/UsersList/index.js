import React, {Component} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import User from './User';
import {Container, Language} from './styledComponents';
import {apiStatus as ApiStatus} from '../../../constants/ApiStatus';
import {observer} from 'mobx-react';

@observer
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
    return (
      <FlatList
        data={this.props.store.users}
        renderItem={({item}) => <User user={item} />}
      />
    );
  };

  renderLoading = () => {
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  render() {
    return (
      <Container>
        <Language
          selectedValue={this.state.language}
          onValueChange={itemValue => this.setState({language: itemValue})}>
          <Language.Item label="English" value="en" />
          <Language.Item label="తెలుగు" value="tel" />
          <Language.Item label="हिंदी" value="hin" />
        </Language>
        {this.isLoading() ? this.renderLoading() : this.renderUsers()}
      </Container>
    );
  }
}

export default UserList;
