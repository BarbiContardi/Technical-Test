import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import Image from "next/image";
import React from "react";

interface User {
  id: string;
  img?: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  isAdmin: boolean;
  isActive: boolean;
}

interface SingleUserPageProps {
  params: {
    id: string;
  };
}

const SingleUserPage: React.FC<SingleUserPageProps> = async ({ params }) => {
  const { id } = params;
  const user: User = await fetchUser(id);

  return (
    <div className="flex gap-[50px] mt-5">
      <div className="flex-[1] bg-[var(--bgSoft)] p-5 rounded-large font-extrabold text-[var(--textSoft)] max-h-max">
        <div className="w-full h-[300px] relative rounded-large overflow-hidden mb-5">
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className="flex-[3] bg-[var(--bgSoft)] p-5 rounded-large">
        <form action={updateUser} className="flex flex-col">
          <input
            className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"
            type="hidden"
            name="id"
            value={user.id}
          />
          <label className="text-sm">Username</label>
          <input
            className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"
            type="text"
            name="username"
            placeholder={user.username}
          />
          <label className="text-sm">Email</label>
          <input
            className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"
            type="email"
            name="email"
            placeholder={user.email}
          />
          <label className="text-sm">Password</label>
          <input
            className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"
            type="password"
            name="password"
          />
          <label className="text-sm">Phone</label>
          <input
            className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"
            type="text"
            name="phone"
            placeholder={user.phone}
          />
          <label className="text-sm">Address</label>
          <textarea
            name="address"
            placeholder={user.address}
            className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"
          />
          <label className="text-sm">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"
          >
            <option value="true" selected={user.isAdmin}>
              Yes
            </option>
            <option value="false" selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label className="text-sm">Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"
          >
            <option value="true" selected={user.isActive}>
              Yes
            </option>
            <option value="false" selected={!user.isActive}>
              No
            </option>
          </select>
          <button className="w-full p-5 bg-teal-300 text-[var(--text)] border-0 rounded-[5px] cursor-pointer mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
