import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app less than 50', () => {
  render(<App count={25} />);
  const linkElement = screen.getByText(/Navbar/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders at 50', () => {
  render(<App count={50} />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders > 50', () => {
  render(<App count={55} />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});