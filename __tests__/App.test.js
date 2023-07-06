import React from 'react';
import {
  Link,
  BrowserRouter,
  Route,
  Routes,
  MemoryRouter,
} from 'react-router-dom';
// import Login from './Login.jsx';
// import Signup from './Signup.jsx';
// import Dashboard from './Dashboard.jsx';
import '../client/components/app.scss';
import { render, screen } from '@testing-library/react';
import App from '../client/components/App';
import '@testing-library/jest-dom';

// https://jestjs.io/docs/mock-functions#using-a-mock-function

// init const mockedUsedNavigate as jest mock function (PENDING CALLBACK/FUNCTION TO MOCK)
// const mockedUsedNavigate = jest.fn();

// Mock call to react-router-dom (no functionality passed in)
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockedUsedNavigate,
// }));

xdescribe('React-Router-Dom functionality at App Container', () => {
  //
  it('Renders login page if client url is at root "/"', () => {
    const route = '/';
    render(
      <BrowserRouter>
        <App>
          <Routes>
            <Route path={route} />
          </Routes>
        </App>
        //{' '}
      </BrowserRouter>
    );
    //expect login component to be on page
    expect(screen.getByText(/me want food/i)).toBeInTheDocument();
    // expect our Router to NOT render signup
    // expect our Router to NOT render dashboard
    // getByRole is a method that returns instances of html elements that match instances of the passed-in parameter that render on the screen
  });
  it('Renders signup page if client url is at "/signup"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    //expect homepage to display app name
    expect(screen.getByText(/me want food/i)).toBeInTheDocument();
    // getByRole is a method that returns instances of html elements that match instances of the passed-in parameter that render on the screen
  });
  it('Renders homepage if client url is at "/home"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    //expect homepage to display app name
    expect(screen.getByText(/me want food/i)).toBeInTheDocument();
    // getByRole is a method that returns instances of html elements that match instances of the passed-in parameter that render on the screen
  });
  it('Login, Home, nor Landing pages are rendered if bad route', () => {
  //   render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   );
  //   //expect homepage to display app name
  //   expect(screen.getByText(/me want food/i)).toBeInTheDocument();
  //   // getByRole is a method that returns instances of html elements that match instances of the passed-in parameter that render on the screen
  });
});
