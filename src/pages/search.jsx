import React from "react";

const Search = props => {
  const { onSearch } = props;
  return (
    <React.Fragment>
      <div className="search-box">
        <input
          className="search-box__input"
          onChange={onSearch}
          type="text"
          placeholder="Search.."
          name="search"
        />
        <button type="submit" className="search-box__btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
      {/* <button type="submit">Search</button> */}
    </React.Fragment>
  );
};

export default Search;
