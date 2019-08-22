import {Actions, ActionConst} from 'react-native-router-flux';

export const goToRepos = user => {
  if (Actions.currentScene !== 'repos') {
    Actions.repos({user: user, title: user.userName + ' Repositories'});
  }
};

export const goToUsers = () => {
  Actions.users({type: ActionConst.REPLACE});
};
