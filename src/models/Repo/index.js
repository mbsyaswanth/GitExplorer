class Repo {
  repoName = '';
  stars = 0;
  forks = 0;
  constructor(repoName, stars, forks) {
    this.repoName = repoName;
    this.stars = stars;
    this.forks = forks;
  }
}

export default Repo;
