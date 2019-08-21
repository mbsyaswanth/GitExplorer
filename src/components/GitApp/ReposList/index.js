import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Repo from './Repo';

class ReposList extends Component {
  render() {
    return (
      <View>
        <Text> Repo list </Text>
        <Repo />
      </View>
    );
  }
}

export default ReposList;
