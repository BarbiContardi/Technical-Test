"use client";

import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="flex items-center space-x-2.5 bg-[var(--hoverBg)] p-2.5 rounded-lg w-full md:w-max">
    <MdSearch />
    <input
      type="text"
      placeholder={placeholder}
      className="bg-transparent border-0 text-[var(--text)] outline-none w-full"
      onChange={handleSearch}
    />
  </div>
  );
};

export default Search;
