describe('Repo model test cases', () => {
  it('should check for the repo model functionality', () => {
    const repo = new Repo('repoName', 2, 3);
    expect(repo.repoName).toBe('repoName');
    expect(repo.stars).toBe(2);
    expect(repo.forks).toBe(3);
  });
});
