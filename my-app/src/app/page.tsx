"use client";
import React from "react";
import { DynamicPanel } from "./components/DynamicPanel";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mt-10 mb-10 text-center">
          Dashboard
        </h1>
        <DynamicPanel />
        <div className="flex flex-row justify-center gap-10">
          <div className="flex flex-col text-center w-40">
            <ComponentA />
          </div>
          <div>
            <ComponentB />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
