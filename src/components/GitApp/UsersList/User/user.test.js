import {fireEvent, render} from 'react-native-testing-library';
import User from './index';
import {goToRepos} from '../../../../utils';

describe('User component tests', () => {
  it('should test if handle press is called', () => {
    const {getAllByTestId} = render(<User />);
    fireEvent.press(getAllByTestId(user));
    expect(goToRepos).toBeCalled();
  });
});
