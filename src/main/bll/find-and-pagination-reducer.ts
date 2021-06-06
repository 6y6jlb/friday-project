const SEARCH_VALUE = "SEARCH_VALUE";
//reducer
export const findAndPaginationReducer = (
  state = {
    searchValue: "",
  },
  action: findAndPaginationActionsType
): InitialStateType => {
  switch (action.type) {
    case SEARCH_VALUE:
      console.log(action.searchValue);
      return { ...state, searchValue: action.searchValue };
    default:
      return state;
  }
};

//actions
export const setSearchValueAC = (searchValue: string) => {
  return {
    type: SEARCH_VALUE,
    searchValue,
  };
};
//types
export type findAndPaginationActionsType = any;
export type InitialStateType = any;
