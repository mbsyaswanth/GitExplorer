import {usersUrl} from '../../constants/Url';

class UserServices {
  getUsers = () => {
    return fetch(usersUrl);
  };

  getRepos = url => {
    return fetch(url);
  };
}

export default UserServices;
