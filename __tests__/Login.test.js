import Login from '../client/components/Login';
import {render, screen} from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import user from '@testing-library/user-event'

xdescribe('Login', () => {
    it('Has an input field for username', () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument;
    })

    it('Has an input field for password', () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument;
    })

    it('Has a login button', () => {
        render(<BrowserRouter><Login /></BrowserRouter>);
        expect(screen.getByRole('button', {name: /login/i})).toBeInTheDocument;
    // Add test that checks if redirect to signup
    
// It should bring you to the home page if the user exists
        // On click: 
            // - It checks the db for the user
            // - if exists, brings you to the home page 


// It should bring you to the signup page if the user doesn't exist
    })

    // it('Requires a username and password to log in', async () => {
    //     render(<BrowserRouter><Login /></BrowserRouter>);
    //     await user.type(screen.findByPlaceholderText(/username/i));
    //     await user.type(screen.findByPlaceholderText(/password/i));
    //     username.ref = "hey"
    //     password.ref = "yo"
    //     // expect(await screen.findByRole('button', {name: /login/i})).toBeEnabled;
    //     screen.getByRole('');
    // })

})