"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 6;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="p-2.5 flex justify-between">
    <button
      className={clsx(
        "bg-[var(--bgPagination)] text-[var(--bg)]  font-bold rounded-[5px] px-2.5 py-[5px]",
        {
          "cursor-pointer": hasPrev,
          "cursor-not-allowed": !hasPrev,
        }
      )}
      disabled={!hasPrev}
      onClick={() => handleChangePage("prev")}
    >
      Previous
    </button>
    <button
      className={clsx(
        "bg-[var(--bgPagination)] text-[var(--bg)] font-bold rounded-[5px] px-2.5 py-[5px]",
        {
          "cursor-pointer": hasNext,
          "cursor-not-allowed": !hasNext,
        }
      )}
      disabled={!hasNext}
      onClick={() => handleChangePage("next")}
    >
      Next
    </button>
  </div>
  );
};

export default Pagination;
