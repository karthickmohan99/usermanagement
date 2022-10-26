/* eslint-disable @typescript-eslint/no-explicit-any */
import { render as rtlrender, cleanup, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Store } from '../../State /Store/Store';
import userEvent from '@testing-library/user-event';
import Home from './Home';

describe('Home component', () => {
  const render = (component: any) => rtlrender(<Provider store={Store}>{component}</Provider>);
  afterEach(cleanup);
  it('should check the  component renders properly', () => {
    //arrange
    render(
      <Router>
        <Home />
      </Router>
    );

    const titleValue = screen.getByText('welcome Home');
    expect(titleValue).toHaveTextContent('welcome Home');
  });

  it('should renders the table', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const table = screen.getByTestId('table');
    expect(table).toBeInTheDocument();
  });

  it('checks the edit button', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    // eslint-disable-next-line testing-library/no-node-access
    const editbutton = document.querySelector('.classedit');
    expect(editbutton).toBeDefined();
  });
  it('checks the  delete button', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    // eslint-disable-next-line testing-library/no-node-access
    const Deletebutton = document.querySelector('.classdelete');
    expect(Deletebutton).toBeDefined();
  });
  it('checks the  delete button', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    // eslint-disable-next-line testing-library/no-node-access
    const Deletebutton = document.querySelector('.classdelete');
    expect(Deletebutton).toBeDefined();
  });

  // it('checks the  delete button', () => {
  //   render(
  //     <Router>
  //       <Home />
  //     </Router>
  //   );
  //   // eslint-disable-next-line testing-library/no-node-access
  //   const Deletebutton = document.querySelector('.classdelete');
  //   expect(Deletebutton).toBeDefined();
  //   const dbutton = jest.fn();
  //   fireEvent.click(Deletebutton);
  //   expect(dbutton).toHaveBeenCalledTimes(0);
  // });
});
