"use client"
import React from 'react';
import {DynamicPanel} from './components/DynamicPanel';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';



const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-12 mb-12 text-center">Dashboard</h1>
        <DynamicPanel />
        <ComponentA/>
        <ComponentB/>
      </div>
    </div>
  );
};

export default Home;
