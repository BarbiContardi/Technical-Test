import { cards } from "../lib/data";
import Card from "../ui/dashboard/card/card";
import dynamic from 'next/dynamic';

const Rightbar = dynamic(() => import('../ui/dashboard/rightbar/rightbar'));
const Transactions = dynamic(() => import('../ui/dashboard/transactions/transactions'));
const Chart= dynamic(() => import('../ui/dashboard/chart/Chart'));

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mt-5">
    <div className="flex flex-col gap-5 md:flex-[3]">
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        {cards.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <Transactions />
      <Chart />
    </div>
    <div className="mt-5 md:mt-0 md:flex-[1]">
      <Rightbar />
    </div>
  </div>
  );
};

export default Dashboard;
