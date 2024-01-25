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
    <div className="p-5 rounded-lg bg-[var(--bgSoft)] flex items-center justify-between">
      <div className="text-[var(--textSoft)] font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center space-x-2.5 bg-[#2e374a] p-2.5 rounded-lg w-max">
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
