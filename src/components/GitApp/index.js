import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import UserList from './UsersList';
import ReposList from './ReposList';
import SplashScreen from './SplashScreen';
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
          <Scene title="Git Users" key="users" component={UserList} />
          <Scene key="Repos" component={ReposList} />
        </Scene>
      </Router>
    );
  }
}

export default GitApp;
