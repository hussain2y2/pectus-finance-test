import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders expenses table', () => {
  render(<App />);
  const expensesTab = screen.getByText(/Expenses List/i);
  expect(expensesTab).toBeInTheDocument();
});

test('Renders reports table', () => {
  render(<App />);
  const reportsTab = screen.getByText(/Reports/i);
  expect(reportsTab).toBeInTheDocument();
});
