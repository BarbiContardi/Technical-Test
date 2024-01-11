"use client"
import React from 'react';
import useDataFetching from '../hooks/useDataFetching';

const ComponentA: React.FC = () => {
  const { data, loading, error } = useDataFetching('http://numbersapi.com/random/year?json');

  return (
    <div>
      <h2>Random Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error..</p>}
      <h1>{data?.text}</h1>
    </div>
  );
};


export default ComponentA;
