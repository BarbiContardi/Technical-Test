import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-lg flex space-x-5 cursor-pointer w-full hover:bg-[var(--hoverBg)]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col space-y-5">
        <span>{item.title}</span>
        <span className="text-4xl font-semibold">{item.number}</span>
        <span className="text-base font-light">
          <span className={item.change > 0 ? "text-lime-500" : "text-red-500"}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
