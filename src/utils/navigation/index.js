import {Actions, ActionConst} from 'react-native-router-flux';
import translate from '../language.utils';

export const goToRepos = user => {
  if (Actions.currentScene !== 'repos') {
    Actions.repos({
      user: user,
      title: user.userName + translate('repositories'),
    });
  }
};

export const goToUsers = () => {
  Actions.users({type: ActionConst.REPLACE});
};
