import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import UserList from './UsersList';
import ReposList from './ReposList';
import SplashScreen from './SplashScreen';
import UserStore from '../../stores/UserStore';
import UserServices from '../../services/UserServices/index.api';
import LanguageSelect from './LanguageSelect';

const Store = new UserStore(new UserServices());

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
            store={Store}
            title="Git Users"
            key="users"
            component={UserList}
            renderRightButton={<LanguageSelect store={Store} />}
          />
          <Scene title="Repositories" key="repos" component={ReposList} />
        </Scene>
      </Router>
    );
  }
}

export default GitApp;
