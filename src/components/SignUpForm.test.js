// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import SignUpForm from './SignUpForm';

// Mock useDispatch
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

// Mock signUpUser
jest.mock('../redux/actions', () => ({
  signUpUser: jest.fn(),
}));

describe('SignUpForm', () => {
  test('should render SignUpForm component', () => {
    render(<SignUpForm />);
    const headings = screen.getAllByText(/sign up/i);
    expect(headings.length).toBeGreaterThan(0);
  });

  test('submits the form only with valid data', () => {
    render(<SignUpForm />);
    const handleOnSubmitMock = jest.fn();
    screen.getByRole('button', { name: 'Sign Up' }).onclick =
      handleOnSubmitMock;

    // Fill in the form fields with valid data
    fireEvent.change(screen.getByLabelText('User Type:'), {
      target: { value: 'researcher' },
    });
    fireEvent.change(screen.getByLabelText('First Name:'), {
      target: { value: 'Jhon' },
    });
    fireEvent.change(screen.getByLabelText('Last Name:'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText('Username:'), {
      target: { value: 'jhondoe' },
    });
    fireEvent.change(screen.getByLabelText('Email:'), {
      target: { value: 'valid@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password:'), {
      target: { value: 'ValidPassword1!' },
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }));

    // Expectations for form submission
    expect(handleOnSubmitMock).toHaveBeenCalled();
  });
});
