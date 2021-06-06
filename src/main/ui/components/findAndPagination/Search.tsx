import React, { ChangeEvent } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setSearchValueAC } from "../../../bll/find-and-pagination-reducer";

export function Search() {
  const searchValue = useSelector<RootStateOrAny, string>(
    (state) => state.findAndPagination.searchValue
  );
  const dispatch = useDispatch();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValueAC(e.currentTarget.value));
  };
  return (
    <div>
      <input value={searchValue} onChange={onChangeHandler} type="text" />
      <button>Search</button>
    </div>
  );
}
