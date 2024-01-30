"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-5 rounded-lg bg-[var(--bgSoft)] flex flex-col md:flex-row items-center justify-between">
      <div className="text-[var(--textSoft)] font-bold capitalize mb-5 md:mb-0 md:mr-5">
        {pathname.split("/").pop()}
      </div>
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-5">
        <div className="flex items-center space-x-2.5 bg-[#2e374a] p-2.5 rounded-lg w-full md:w-max">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-0 text-[var(--text)]"
          />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
