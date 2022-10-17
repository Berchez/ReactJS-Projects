import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridImage = ({ title, description, grid, background }) => {
  return (
    <Styled.Container>
      <SectionBackground background={background}>
        <Styled.Container>
          <Heading size="huge" uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{description}</TextComponent>
          <Styled.Grid>
            {grid.map((el) => (
              <Styled.GridElement key={el.srcImg}>
                <Styled.Image src={el.srcImg} alt={el.altText} />
              </Styled.GridElement>
            ))}
          </Styled.Grid>
        </Styled.Container>
      </SectionBackground>
    </Styled.Container>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
};
