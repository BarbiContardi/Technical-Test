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
        <div className="flex flex-row justify-center gap-10 mt-8">
          <ComponentA />
          <ComponentB />
        </div>
        <div className="flex flex-col items-center mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 transition duration-300 ease-out">
            <a href="/emogipage">Emoji World</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
