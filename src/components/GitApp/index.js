import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';

import UserList from './UsersList';
import ReposList from './ReposList';
import SplashScreen from './SplashScreen';
import LanguageSelect from './LanguageSelect';

import translate from '../../utils/language.utils';

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
            title={translate('git_Users')}
            key="users"
            component={UserList}
            renderRightButton={<LanguageSelect store={this.props.store} />}
          />
          <Scene key="repos" component={ReposList} />
        </Scene>
      </Router>
    );
  }
}

export default GitApp;
