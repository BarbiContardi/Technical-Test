import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface BarChartProps {
  data: ChartData<'bar', number[], unknown>;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return <Bar data={data} />;
};

export default BarChart;
