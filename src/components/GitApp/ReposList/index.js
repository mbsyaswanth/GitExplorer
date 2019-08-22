import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Repo from './Repo';
import translate from '../../../utils/language.utils';

class ReposList extends Component {
  render() {
    return (
      <View>
        <Text>{translate('repo_List')}</Text>
        <Repo />
      </View>
    );
  }
}

export default ReposList;
