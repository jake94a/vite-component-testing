import React from "react";
import Space from "./Space";
import "./List.css";
import data from "./some-data.json";

const List = () => {
  return (
    <div className="List">
      {data.map(({ name, address, image }, i) => (
        <Space
          key={`${name}-${i}`}
          name={name}
          address={address}
          image={`images/${image}`}
        />
      ))}
    </div>
  );
};

export default List;
