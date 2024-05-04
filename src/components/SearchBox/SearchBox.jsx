import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

function SearchBox({ filterValue }) {
  const findFieldId = useId();
  const dispatch = useDispatch();
  return (
    <div className={css.search}>
      <label htmlFor={findFieldId} className={css.label}>
        Find Contact
      </label>
      <input
        id={findFieldId}
        value={filterValue}
        name="filter"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={css.input}
      />
    </div>
  );
}

export default SearchBox;
