import React from "react";
const Sort = props => {
  return (
    <select className="form-control" name="sort" onChange={props.onSort} id="">
      <option value="">Default</option>
      <option value="price:asc">Price low to high</option>
      <option value="price:desc">Price high to low</option>
      <option value="name">Name</option>
    </select>
  );
};
export default Sort;
