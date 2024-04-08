// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import SignUpForm from './SignUpForm';

// Mock useDispatch
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
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
});
