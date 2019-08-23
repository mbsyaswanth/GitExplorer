import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import UserList from './UsersList';
import ReposList from './ReposList';
import SplashScreen from './SplashScreen';
import UserStore from '../../stores/UserStore';
import UserServices from '../../services/UserServices/index.api';
import LanguageSelect from './LanguageSelect';
import translate from '../../utils/language.utils';
import {observer} from 'mobx-react';

class GitApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="splashScreen"
            hideNavBar
            initial
            component={SplashScreen}
          />
          <Scene
            store={this.props.store}
            language={this.props.store.selectedLanguageName}
            title={translate('git_Users')}
            key="users"
            component={UserList}
            renderRightButton={<LanguageSelect store={this.props.store} />}
          />
          <Scene
            title={translate('repositories')}
            key="repos"
            component={ReposList}
          />
        </Scene>
      </Router>
    );
  }
}

export default GitApp;
