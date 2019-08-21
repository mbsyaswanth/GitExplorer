import {usersUrl} from './../../constants';

class UserServices {
  getUsers = () => {
    return fetch(usersUrl);
  };
  getRepos = url => {
    return fetch(url);
  };
}
