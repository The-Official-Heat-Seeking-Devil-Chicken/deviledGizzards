import React from 'react';
import {
  Link,
  BrowserRouter,
  Route,
  Routes,
  MemoryRouter,
  useNavigate,
} from 'react-router-dom';
import Login from '../client/components/Login.jsx';
import Signup from '../client/components/Signup.jsx';
import Dashboard from '../client/components/Dashboard.jsx';
import '../client/components/app.scss';
import { render, screen } from '@testing-library/react';
import App from '../client/components/App';
import '@testing-library/jest-dom';

/**
 * @jest-environment jsdom
 */

// https://jestjs.io/docs/mock-functions#using-a-mock-function

// Mock call to react-router-dom (no functionality passed in)
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockedUsedNavigate,
// }));

describe('React-Router-Dom functionality at App Container', () => {
  //
  it('Renders login page if client url is at "/"', () => {
    // init const navigate to test React-Router routing functionality
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // const navigate = useNavigate();
    // navigate('/');
    //expect login component to be on page
    expect(screen.getByText(/me want food/i)).toBeInTheDocument();
    // expect(screen.getByComponentName(Login).toBeInTheDocument());
    // expect our Router to NOT render signup
    // expect our Router to NOT render dashboard
    // getByRole is a method that returns instances of html elements that match instances of the passed-in parameter that render on the screen
  });
  xit('Renders signup page if client url is at "/signup"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    //expect homepage to display app name
    expect(screen.getByText(/me want food/i)).toBeInTheDocument();
    // getByRole is a method that returns instances of html elements that match instances of the passed-in parameter that render on the screen
  });
  xit('Renders homepage if client url is at "/home"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    //expect homepage to display app name
    expect(screen.getByText(/me want food/i)).toBeInTheDocument();
    // getByRole is a method that returns instances of html elements that match instances of the passed-in parameter that render on the screen
  });
  xit('Login, Home, nor Landing pages are rendered if bad route', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    //   //expect homepage to display app name
    //   expect(screen.getByText(/me want food/i)).toBeInTheDocument();
    //   // getByRole is a method that returns instances of html elements that match instances of the passed-in parameter that render on the screen
  });
});
