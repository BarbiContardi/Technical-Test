import React from "react";
import Card from "../ui/dashboard/card/Card";
import Transactions from "../ui/dashboard/transactions/Transactions";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";
import Chart from "../ui/dashboard/chart/Chart";
import {cards} from '../lib/data'

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex flex-[3] flex-col gap-5">
        <div className="flex gap-5 justify-between">
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-[1]">
        <Rightbar />
      </div>
    </div>
  );
};
export default Dashboard;
