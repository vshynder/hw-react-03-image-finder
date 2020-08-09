import React from "react";

const Button = ({ isActive, loadMore, input }) => {
  return isActive ? (
    <button onClick={() => loadMore(null, input)}>Load more</button>
  ) : null;
};

export default Button;
