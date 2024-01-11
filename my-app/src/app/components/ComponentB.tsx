import React from 'react';
import useDataFetching from '../hooks/useDataFetching';

const ComponentB: React.FC = () => {
  const { data, loading, error } = useDataFetching('https://pokeapi.co/api/v2/ability/?limit=5&offset=5');

  return (
    <div>
      <h2>Pokeapi</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error..</p>}
      <h1>{data?.url}</h1>
      {/* arreglar esta data */}
    </div>
  );
};


export default ComponentB;
