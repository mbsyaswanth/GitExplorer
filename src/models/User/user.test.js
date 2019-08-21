import User from '.';
import UserServices from '../../services/UserServices/index.fixtures';
describe('user model test cases ', () => {
  it('should check for the user model functionality', () => {
    const userName = 'username';
    const avatarUrl = 'avatarUrl';
    const repoUrl = 'repoUrl';
    const user = new User(userName, avatarUrl, repoUrl);
    expect(user.userName).toBe(userName);
    expect(user.avatarUrl).toBe(avatarUrl);
    expect(user.repoUrl).toBe(repoUrl);
  });
  it('should check for the setRepos functionality', () => {
    const userName = 'username';
    const avatarUrl = 'avatarUrl';
    const repoUrl = 'repoUrl';
    const user = new User(userName, avatarUrl, repoUrl, new UserServices());
    expect(user.repos).toHaveLength(0);
    user.setRepos();
    expect(user.repos).toHaveLength(1);
  });
});
