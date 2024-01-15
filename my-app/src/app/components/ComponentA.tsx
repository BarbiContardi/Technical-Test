import React, { memo } from 'react';
import useDataFetching from '../hooks/useDataFetching';

const API_URL = "https://api.chucknorris.io/jokes/random";

const ComponentA: React.FC = () => {
  const { data, loading, error } = useDataFetching(API_URL);

  return (
    <div className='flex flex-col text-center border-4 border-white w-60'>
      <h1 className='text-lg font-bold mb-2'>CHUCK NORRIS FACTS</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error..</p>}
      <p className='pl-4 pr-4'>{data?.value}</p>
    </div>
  );
};

export default memo(ComponentA);
