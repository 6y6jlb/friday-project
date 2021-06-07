import React from "react";
import style from './FilterPrice.module.css'

export function FilterPrice() {
  return (
    <div className={style.filterContainer}>
      <span>Sort by price:</span>
        <div>
          <button>/\</button>
        </div>
        <div>
          <button>\/</button>
        </div>
    </div>
  );
}
