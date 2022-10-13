import P from 'prop-types';
import * as Styled from './styles';

export const LogoLink = ({ text, srcImg = '' }) => {
  return (
    <Styled.Container>
      {srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span>}
    </Styled.Container>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
