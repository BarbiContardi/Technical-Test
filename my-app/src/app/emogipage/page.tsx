"use client";
import Image from "next/image";
import * as React from "react";
import type { NextPage } from "next";
import emojisData from "../data/emojis";
import List from "../ui/List";
import CategoryCard from "../ui/CategoryCard";
import Pagination from "../ui/Pagination";

const Home2: React.FC = () => {
  const [currentSearch, setCurrentSearch] = React.useState("");
  const [filteredEmojis, setFilteredEmojis] = React.useState(
    emojisData.slice(0, 500)
  );

  function handleFilterByCategory(category: string) {
    setFilteredEmojis(
      emojisData.filter((emoji) =>
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    );
  }

  function handleFilterBySearch(search: string) {
    setCurrentSearch(search.trim());
    if (search.trim().length > 0) {
      setFilteredEmojis(
        emojisData.filter((emoji) =>
          emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        )
      );
    } else {
      setFilteredEmojis(emojisData.slice(0, 500));
    }
  }
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 18;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const emojisToDisplay = filteredEmojis.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col mt-8 items-center">
        <h1 className=" text-2xl md:text-5xl font-bold text-text-primary text-center tracking-wide">
          Emoji World
        </h1>
      </div>
      <div className="flex justify-center">
        <input
          className="w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-whiteshadow-md focus:outline-none focus:border-cyan-500 focus:ring-1"
          id="name"
          type="text"
          placeholder="Search for an emoji"
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
      </div>

      {currentSearch.length === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8  text-black ">
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="😀"
            group={"Smileys & Emotion"}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="👨🏻"
            group={"People & Body"}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🐶"
            group={"Animals & Nature"}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🍔"
            group={"Food & Drink"}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="⚽️"
            group="Activities"
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🏨"
            group={"Travel & Places"}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="💡"
            group="Objects"
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="⚛️"
            group="Symbols"
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🚩"
            group="Flags"
          />
        </div>
      )}
      {!filteredEmojis.length && (
        <p className="text-center text-xl text-gray-500">{`Sorry, we could'n find an emoji with: "${currentSearch}"`}</p>
      )}
      <List emojis={emojisToDisplay} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredEmojis.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
};

export default Home2;
