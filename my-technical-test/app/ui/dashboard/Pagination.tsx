"use client"
import React, { FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  count: number;
}

const Pagination: FC<PaginationProps> = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: "prev" | "next") => {
    type === "prev"
      ? params.set("page", (parseInt(page) - 1).toString())
      : params.set("page", (parseInt(page) + 1).toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className='p-2.5 flex justify-between'>
      <button
        className={`bg-white text-[var(--bg)] font-bold rounded-[5px] px-2.5 py-[5px] ${!hasPrev ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={`bg-white text-[var(--bg)] font-bold rounded-[5px] px-2.5 py-[5px] ${!hasPrev ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
