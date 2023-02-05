import React, { Component } from "react";

//Input: isLiked : boolean
//Output: onClick event

const Like = (props) => {
  let classess = "fa fa-heart";
  if (props.liked !== true) classess += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onLike}
      className={classess}
      aria-hidden="true"
    />
  );
};

export default Like;
