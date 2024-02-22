import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setFilterValue } from "../redux/filtersSlice";

export const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    dispatch(setFilterValue(inputValue));
  };

  return (
    <div className={css.searchForm}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input id={searchId} type="text" onChange={handleSearchChange} />
    </div>
  );
};
