"use client";
import React from "react";
import  DynamicPanel from "./ui/DynamicPanel";
import ComponentA from "./ui/ComponentA";
import ComponentB from "./ui/ComponentB";
import useCoinPrice from "./hooks/useCoinPrice";

const Home: React.FC = () => {
  const priceInEuro = useCoinPrice();
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mt-10 mb-10 text-center">
          Dashboard
        </h1>
        <div className="flex justify-center">
        <DynamicPanel />
        </div>
        <div className="flex flex-col items-center sm:flex-row justify-center gap-10 mt-8">
          <ComponentA />
          <ComponentB />
        </div>
        <div className="flex flex-col items-center mt-8">
        <p>{`CURRENT DOLLAR PRICE €${priceInEuro}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
