import Menu from '../../components/Menu';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Menu />);
  });
});
