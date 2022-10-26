/* eslint-disable @typescript-eslint/no-explicit-any */
import { render as rtlrender, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from '../../State /Store/Store';
import Signup from './Signup';

describe('Signup Test', () => {
  const render = (component: any) => rtlrender(<Provider store={Store}>{component}</Provider>);
  afterEach(cleanup);
  it('Renders the signup form properly', () => {
    //arrange
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    //assert
    const usernameplaceholder = screen.getByPlaceholderText('UserName');
    const emailplaceholder = screen.getByPlaceholderText('Email');
    const Pwplaceholder = screen.getByPlaceholderText('password');

    expect(usernameplaceholder).toBeInTheDocument();
    expect(emailplaceholder).toBeInTheDocument();
    expect(Pwplaceholder).toBeInTheDocument();
  });
  it('should contain single  submit button', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    const Submitbutton = screen.getAllByRole('button');
    expect(Submitbutton).toHaveLength(1);
  });

  it('should not pass error msg for valid email', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const emailplaceholder = screen.getByPlaceholderText('Email');
    expect(emailplaceholder).toHaveAttribute('type', 'text');
    //act
    userEvent.type(emailplaceholder, 'test@mail.com');
    const errormsg = screen.queryByTestId('emailerror-msg');
    expect(errormsg).not.toBeNull();
  });
  it('should pass error msg for invalid email', () => {
    //Arrange
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const emailplaceholder = screen.getByPlaceholderText('Email');
    const errormsg = screen.getByTestId('emailerror-msg');
    //act
    userEvent.type(emailplaceholder, 'test.com');

    //Assert
    expect(emailplaceholder).toHaveAttribute('type', 'text');
    expect(errormsg).toBeInTheDocument();
  });

  it('Should pass valid password', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const passwordfield = screen.getByPlaceholderText('password');
    expect(passwordfield).toHaveAttribute('type', 'password');
    userEvent.type(passwordfield, 'Pass@123');
    const errmsg = screen.queryByTestId('Pw-msg');
    expect(errmsg).not.toHaveErrorMessage();
  });

  it('Should pass error msg for invalid password', () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const passwordfield = screen.getByPlaceholderText('password');
    expect(passwordfield).toHaveAttribute('type', 'password');
    userEvent.type(passwordfield, 'Paassword');
    const errmsg = screen.queryByTestId('Pw-msg');
    expect(errmsg).toBeInTheDocument();
  });
});
