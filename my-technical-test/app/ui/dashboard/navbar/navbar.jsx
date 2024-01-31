"use client";
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";
import Search from "../search/search";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-5 rounded-lg bg-[var(--bgSoft)] flex flex-col md:flex-row items-center justify-between">
      <div className="text-[var(--textSoft)] font-bold capitalize mb-5 md:mb-0 md:mr-5">
        {pathname.split("/").pop()}
      </div>
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-5">
        <Search placeholder="Search..." />
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
