"use client"
import React from 'react';
import useDataFetching from '../hooks/useDataFetching';

const ComponentA: React.FC = () => {
  const { data, loading, error } = useDataFetching('http://numbersapi.com/random/year?json');

  return (
    <div>
      <h1 className='text-lg font-bold mb-2'>RANDOM YEAR DATA</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error..</p>}
      <p>{data?.text}</p>
    </div>
  );
};


export default ComponentA;
