import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>The page you are looking for was not found. <br><a href="/">click here to go back</a></p>'
    />
  );
};
