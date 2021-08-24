import React from "react";

const Space = (props) => {
  const { name, image, address } = props;
  return (
    <div>
      <img src={image} width="300" height="300" alt={name} />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  );
};

export default Space;
