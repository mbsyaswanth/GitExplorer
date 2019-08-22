import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';
import User from './User';
import {Container, Language} from './styledComponents';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {language: 'en'};
  }

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
        <Text> User List </Text>
        <User />
      </Container>
    );
  }
}

export default UserList;
