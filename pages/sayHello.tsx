import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const SayHello: NextPage = () => {
  const [data, setData] = useState({ name: '' });

  useEffect(() => {
    (async () => {
      const res = await fetch('api/hello');
      const profile = await res.json();
      console.log(profile);
      setData(profile);
    })();
  }, []);

  return <div>hello {data.name}</div>;
};

export default SayHello;
