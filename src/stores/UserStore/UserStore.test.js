import UserStore from './index';
import UserServices from '../../services/UserServices/index.fixtures';
describe('User store test cases', () => {
  let store, services;
  beforeEach(() => {
    services = new UserServices();
    store = new UserStore(services);
  });

  it('should check for the setUsers functionality', () => {
    expect(store.users).toHaveLength(0);
    store.setUsers(services.getUsers());
    expect(store.users).toHaveLength(2);
  });
  it('should check for the getUsers functionality', () => {
    expect(store.users).toHaveLength(0);
    store.getUsers();
    expect(store.users).toHaveLength(2);
  });
});
