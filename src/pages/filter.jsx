import React from "react";
const Filter = props => {
  return (
    <ul className="list list--vr-separator">
      {props.filter.map(type => (
        <li
          key={type._id}
          className={
            type._id === props.currentType
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          <i className="link__icon fas fa-angle-right"></i>
          <a onClick={() => props.onFilter(type._id)}>{type.category_Name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
