import React from "react";
import useDataFetching from "../hooks/useDataFetching";

const ComponentB: React.FC = () => {
  const { data, loading, error } = useDataFetching(
    "https://pokeapi.co/api/v2/ability/?limit=5&offset=5"
  );
  const abilityList = data?.results?.map((ability: any) => ability.name) || [];
  return (
    <div className='flex flex-col text-center border-4 border-white w-60'>
      <h1 className="text-lg font-bold mb-2">POKEAPI NAME LIST:</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error..</p>}
      {data && (
        <ul className="text-center">
          {abilityList.map((abilityName: string, index: number) => (
            <li key={index}>{abilityName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComponentB;
