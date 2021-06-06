import React from "react";

export function Pagination() {
  return (
    <div>
      <label>Pagination</label>
      <select>
        <option>4</option>
        <option>7</option>
        <option>10</option>
        <option>20</option>
      </select>
      <span>
        <button>1</button>
      </span>
      <span>
        <button>2</button>
      </span>
      <span>
        <button>3</button>
      </span>
    </div>
  );
}
