import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the calculator app', () => {
  const { getByTestId } = render(<App />);
  const appElement = getByTestId('app');
  expect(appElement).toBeInTheDocument();
});

test('adds two numbers', () => {
  const { getByText, getByTestId } = render(<App />);
  const button1 = getByText('1');
  const button2 = getByText('2');
  const addButton = getByText('+');
  const equalsButton = getByText('=');
  const displayElement = getByTestId('display');

  fireEvent.click(button1);
  fireEvent.click(addButton);
  fireEvent.click(button2);
  fireEvent.click(equalsButton);

  expect(displayElement).toHaveTextContent('3');
});
