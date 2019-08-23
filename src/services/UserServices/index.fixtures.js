import repos from '../../fixtures/repos.json';
import users from '../../fixtures/users.json';

class UserServices {
  getRepos = () => {
    return repos;
  };

  getUsers = () => {
    return users;
  };
}
export default UserServices;
