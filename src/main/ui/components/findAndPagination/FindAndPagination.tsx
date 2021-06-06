import React from "react";
import { FilterPrice } from "./FilterPrice";
import { Pagination } from "./Pagination";
import { Search } from "./Search";

export default function FindAndPagination() {
  return (
    <div>
      <Search />
      <FilterPrice />
      <Pagination />
    </div>
  );
}
