/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import GitApp from './src/components/GitApp';
import UserStore from './src/stores/UserStore';
import UserServices from './src/services/UserServices/index.api';
const Store = new UserStore(new UserServices());

const App = () => {
  return (
    <>
      <GitApp store={Store} />
    </>
  );
};

export default App;
