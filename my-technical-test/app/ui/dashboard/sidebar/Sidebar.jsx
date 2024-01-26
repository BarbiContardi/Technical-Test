import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from "@/app/auth";
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('next/image'));

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();
  return (
    <div className="sticky top-10">
    <div className="flex items-center space-x-5 mb-5">
      <Image
        className="rounded-[50%] object-cover"
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
};

export default Sidebar;
