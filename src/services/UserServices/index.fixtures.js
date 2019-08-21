import repos from '../../fixtures/repos.json';
class UserServices {
  getRepos = () => {
    return repos;
  };
}
export default UserServices;
