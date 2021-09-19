import React from "react";
import { CARDS_VALUE } from "../../constants";

function ListCards({ data = CARDS_VALUE, onItemClick }) {
  return (
    <div>
      {data.map((item) => {
        const { key, value } = item;
        function handleClick() {
          onItemClick && onItemClick(item);
        }
        return (
          <button key={key} onClick={handleClick}>
            {value}
          </button>
        );
      })}
    </div>
  );
}

export default ListCards;
