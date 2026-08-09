import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the core portfolio messaging', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /i build the systems between the machine and the business/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /bring me the problems that sit between roles/i,
      })
    ).toBeInTheDocument();
  });
});
