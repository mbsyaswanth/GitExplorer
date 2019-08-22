import {Actions, ActionConst} from 'react-native-router-flux';

export const goToRepos = () => {
  Actions.repos();
};

export const goToUsers = () => {
  Actions.users({type: ActionConst.REPLACE});
};
