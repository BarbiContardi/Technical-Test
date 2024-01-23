import Image from "next/image";
import MenuLink from "./MenuLink";
import { auth, signOut } from "@/app/auth";
import { MdLogout } from "react-icons/md";
import { menuItems } from "@/app/lib/data";
import React from "react";

export default async function Sidebar() {
  const { user } = await auth();
  return (
    <div className="sticky top-10">
      <div className="flex items-center space-x-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src={user.img || "/noavatar.png"}
          alt={""}
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <span className="font-semibold">{user.username}</span>
          <span className="text-xs text-[var(--textSoft)]">Admin</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-[var(--textSoft)] font-bold text-sm my-2.5">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="p-5 my-1 flex items-center space-x-2.5 cursor-pointer rounded-lg bg-transparent border-none text-white w-full hover:bg-[#2e374a]">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
}

