import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { Base } from '../Base';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : 'landing-pages';

    const load = async () => {
      try {
        const data = await fetch(
          `https://landing-pages-berchez.herokuapp.com/api/pages/?filters[slug]=${slug}&populate=deep`,
        );

        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);

        //Atraso proposital com finalidade apenas de mostrar a tela de loading
        await new Promise((r) => {
          return setTimeout(() => {
            setData(() => pageData[0]);
            r();
          }, 1000);
        });
      } catch (e) {
        setData(undefined);
      }
    };
    load();
  }, [location.pathname]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
