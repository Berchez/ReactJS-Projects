import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

test('renders learn react link', () => {
  // eslint-disable-next-line no-unused-vars
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'red');
});
