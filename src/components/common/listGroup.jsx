import React, { Component } from "react";

//Input: Name of the genre
//Output: onClick event

//textProperty and valueProperty are only needed to make this component reusable
const ListGroup = (props) => {
  const { selectedItem, itemList, onItemSelect, textProperty, valueProperty } =
    props;

  const isActive = (name) => {
    let className = "list-group-item ";
    if (name === selectedItem) className += "active";
    return className;
  };

  return (
    <ul className="list-group">
      {itemList.map((item) => (
        <li
          style={{ cursor: "pointer" }}
          key={item[valueProperty]}
          className={isActive(item)}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
