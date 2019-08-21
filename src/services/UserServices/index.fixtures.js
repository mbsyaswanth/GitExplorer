import repos from '../../fixtures/repos.json';
class UserServices {
  getRepos = () => {
    return Promise.resolve(repos);
  };
}
export default UserServices;
