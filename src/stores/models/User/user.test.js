import User from '.';
import UserServices from '../../services/UserServices/index.fixtures';
describe('user model test cases ', () => {
  let userName;
  let avatarUrl;
  let repoUrl;
  beforeEach(() => {
    userName = 'username';
    avatarUrl = 'avatarUrl';
    repoUrl = 'repoUrl';
  });
  it('should check for the user model functionality', () => {
    const user = new User(userName, avatarUrl, repoUrl);
    expect(user.userName).toBe(userName);
    expect(user.avatarUrl).toBe(avatarUrl);
    expect(user.repoUrl).toBe(repoUrl);
  });
  it('should check for the setRepos functionality', () => {
    const user = new User(userName, avatarUrl, repoUrl, new UserServices());
    expect(user.repos).toHaveLength(0);
    user.setRepos(new UserServices().getRepos());
    expect(user.repos).toHaveLength(1);
  });
  it('should check for the getRepos functionality', () => {
    const user = new User(userName, avatarUrl, repoUrl, new UserServices());
    expect(user.apiStatus).toBe(null);
    user.getRepos();
    expect(user.repos).toHaveLength(1);
  });
});
