import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders loading element', () => {
  const { getByText } = render(<App />);
  const loadingElement = getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});
