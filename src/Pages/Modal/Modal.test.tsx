/* eslint-disable @typescript-eslint/no-explicit-any */
import { render as rtlrender, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from '../../State /Store/Store';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from './Modals';
describe('Modal Component', () => {
  const render = (component: any) => rtlrender(<Provider store={Store}>{component}</Provider>);
  afterEach(cleanup);
  it('renders the modal page', () => {
    //arrange
    render(
      <Router>
        <Modal />
      </Router>
    );

    const Heading = screen.getByRole('heading');
    expect(Heading).toHaveTextContent('Edit User');
    const username = screen.getByPlaceholderText('usertName');
    expect(username).toBeInTheDocument();
    const Email = screen.getByPlaceholderText('Enter your mail');
    expect(Email).toBeInTheDocument();
  });
  it('should renders the button properly', () => {
    render(
      <Router>
        <Modal />
      </Router>
    );
    const button = screen.getByRole('button', { name: 'Save Changes' });
    expect(button).toBeEnabled();
  });
});
