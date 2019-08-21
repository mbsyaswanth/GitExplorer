import User from '.';

describe('user model test cases ', () => {
  it('should check for the user model functionality', () => {
    const user = new User('username', 'avatarUrl', 'repoUrl');
    expect(user.userName).toBe('username');
    expect(user.avatarUrl).toBe('avatarUrl');
    expect(user.repoUrl).toBe('repoUrl');
  });
});
