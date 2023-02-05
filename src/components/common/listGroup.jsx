import React, { Component } from "react";

//Input: Name of the genre
//Output: onClick event
const ListGroup = (props) => {
  const { currentGenre, genreList, onGenreChange } = props;

  const isActive = (name) => {
    let className = "list-group-item ";
    if (name === currentGenre) className += "active";
    return className;
  };

  return (
    <ul className="list-group">
      {genreList.map((genre) => (
        <li
          style={{ cursor: "pointer" }}
          key={genre._id}
          className={isActive(genre.name)}
          onClick={() => onGenreChange(genre.name)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
