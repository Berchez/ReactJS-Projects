import { useEffect, useState } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        'http://localhost:1337/api/pages/?slug=olha-so-a-minha-pagina',
      );
      const json = await data.json();
      const { attributes } = json.data[0];
      const pageData = mapData([attributes]);
      setData(() => pageData[0]);
    };
    load();
  }, []);

  if (data === undefined) {
    return <h1>Page not found</h1>;
  }

  if (data && !data.slug) {
    return <h1>Loading...</h1>;
  }

  return <Base {...mockBase} />;
}

export default Home;
