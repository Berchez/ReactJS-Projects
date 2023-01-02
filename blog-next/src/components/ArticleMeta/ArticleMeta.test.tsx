import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links ', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(
      screen.getByRole('link', { name: 'Walter Berchez' }),
    ).toHaveAttribute('href', { name: 'Walter Berchez' });

    expect(screen.getByRole('link', { name: 'JS' })).toHaveAttribute(
      'href',
      '/category/javascript',
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);
    expect(screen.getByText('29 de dez. de 2022')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);
    expect(container).toMatchSnapshot();
  });
});
