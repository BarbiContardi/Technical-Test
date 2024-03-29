import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-large mt-5">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="mt-5 md:mt-0 p-2.5 bg-[#5d57c9] text-[var(--text)] rounded-[5px] border-0 cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="hidden md:table-row">
              <td className="p-2.5">Name</td>
              <td className="p-2.5 hidden md:table-cell">Email</td>
              <td className="p-2.5 hidden md:table-cell">Created At</td>
              <td className="p-2.5 hidden md:table-cell">Role</td>
              <td className="p-2.5 hidden md:table-cell">Status</td>
              <td className="p-2.5">Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="p-2.5">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={user.img || "/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className="object-cover rounded-full"
                      style={{ width: "40px", height: "40px" }}
                    />
                    {user.username}
                  </div>
                </td>
                <td className="p-2.5 hidden md:table-cell">{user.email}</td>
                <td className="p-2.5 hidden md:table-cell">
                  {user.createdAt?.toString().slice(4, 16)}
                </td>
                <td className="p-2.5 hidden md:table-cell">{user.isAdmin ? "Admin" : "Client"}</td>
                <td className="p-2.5 hidden md:table-cell">
                  {user.isActive ? "active" : "passive"}
                </td>
                <td className="p-2.5">
                  <div className="flex gap-2.5">
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className="px-2.5 py-[5px] text-[var(--text)] rounded-[5px] cursor-pointer bg-teal-300">
                        View
                      </button>
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={user.id} />
                      <button className="px-2.5 py-[5px] text-[var(--text)] rounded-[5px] cursor-pointer bg-[#D0114F]">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
