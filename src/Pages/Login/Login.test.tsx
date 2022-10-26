/* eslint-disable @typescript-eslint/no-explicit-any */
import { render as rtlrender, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from '../../State /Store/Store';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('login component', () => {
  const render = (component: any) => rtlrender(<Provider store={Store}>{component}</Provider>);
  afterEach(cleanup);
  it('Renders the login form properly', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailplaceholder = screen.getByPlaceholderText('Enter a Password');
    expect(emailplaceholder).toBeInTheDocument();
    const pwplaceholder = screen.getByPlaceholderText('Enter a Password');
    expect(pwplaceholder).toBeInTheDocument();
  });
  it('should contain single  submit button', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const Submitbutton = screen.getAllByRole('button');
    expect(Submitbutton).toHaveLength(1);
  });

  it('Should check the valid email', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailplaceholder = screen.getByPlaceholderText('Enter a Password');
    userEvent.type(emailplaceholder, 'type@gmail.com');
    const emailerrormessage = screen.getByTestId('email-error');
    expect(emailerrormessage).toBeEmptyDOMElement();
  });
  it('Should raise the  error message for invalid email', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailplaceholder = screen.getByPlaceholderText('Enter a Password');
    userEvent.type(emailplaceholder, 'typecom');
    const emailerrormessage = screen.getByTestId('email-error');
    expect(emailerrormessage).toBeInTheDocument();
  });
  it('Should not pass error message for valid password', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const pwplaceholder = screen.getByPlaceholderText('Enter a Password');
    userEvent.type(pwplaceholder, 'Type@134');
    const pwerrormessage = screen.getByTestId('pw-error');
    expect(pwerrormessage).not.toHaveErrorMessage();
  });
  it('Should pass error message for invalid password', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const pwplaceholder = screen.getByPlaceholderText('Enter a Password');
    userEvent.type(pwplaceholder, 'Type@134');
    const pwerrormessage = screen.getByTestId('pw-error');
    expect(pwerrormessage).toBeInTheDocument();
  });
});
