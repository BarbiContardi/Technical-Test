import { MdSupervisedUserCircle } from 'react-icons/md';

interface CardProps {
  item: {
    title: string;
    number: number;
    change: number;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
    if (!item) {
        return <div>Error: No se proporcionó un elemento.</div>;
      }
  return (
    <div className="bg-[var(--bg)] p-5 rounded-lg flex space-x-5 cursor-pointer w-full hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col space-y-5">
        <span>{item.title}</span>
        <span className="text-6xl font-semibold">{item.number}</span>
        <span className="text-base font-light">
          <span className={item.change > 0 ? 'text-lime-500' : 'text-red-500'}>
            {item.change}%
          </span>{' '}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
