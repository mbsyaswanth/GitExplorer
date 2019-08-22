import {Actions, ActionConst} from 'react-native-router-flux';

export const goToRepos = user => {
  Actions.repos({user: user});
};

export const goToUsers = () => {
  Actions.users({type: ActionConst.REPLACE});
};
