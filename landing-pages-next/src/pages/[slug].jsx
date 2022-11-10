import P from 'prop-types';
import {loadPages} from '../api/load-pages';
import Home from '../templates/Home';

export default function Page({data}) {
  return <Home data={data} />
}

Page.propType = {
  data: P.array,
}

export const getStaticPaths = async () => {
  const paths = (await loadPages()).map((page) => {
    return {
      params: {
        slug: page.slug,
      }
    }
  });

  return {
    paths,
    fallback: false,
  }

}
