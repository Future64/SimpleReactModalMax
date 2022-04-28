import { render, screen } from '@testing-library/react';
import SimpleReactModalMax from '../SimpleReactModalMax';

test('renders learn react link', () => {
  render(<SimpleReactModalMax />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
