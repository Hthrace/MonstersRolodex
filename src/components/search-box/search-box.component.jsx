/* eslint-disable react/prop-types */
import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeHolder, className }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeHolder}
      name="searchField"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
