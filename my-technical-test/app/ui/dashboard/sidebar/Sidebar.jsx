import dynamic from "next/dynamic";
import { signOut } from "@/app/auth";
import { MdLogout } from "react-icons/md";
import Menu from "./menuLink/Menu";

const Image = dynamic(() => import("next/image"));

const Sidebar = ({ user }) => {
  return (
    <div className="top-10 sticky">
      <div className="flex items-center space-x-5 mb-5 mt-5">
        <Image
          className="rounded-[50%] object-cover"
          src={user.img || "/noavatar.png"}
          alt={""}
          width={50}
          height={50}
          style={{ width: "50px", height: "50px" }}
        />
        <div className="flex flex-col">
          <span className="font-semibold">{user.username}</span>
          <span className="text-xs text-[var(--textSoft)]">Admin</span>
        </div>
      </div>
      <Menu />
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="p-5 my-1 flex items-center space-x-2.5 cursor-pointer rounded-lg bg-transparent border-none text-[var(--text)] w-full hover:bg-[var(--hoverBg)]">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
