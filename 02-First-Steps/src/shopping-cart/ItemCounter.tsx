import { useState } from "react";
import "./ItemCounter.css";

interface Props {
  itemName: string;
  itemQuantity?: number;
}

export const ItemCounter = ({ itemName, itemQuantity = 1 }: Props) => {
  const [count, setCount] = useState(itemQuantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section
      className="item-row"
      //style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20 }}
    >
      <span
        className="item-text"
        style={{ color: count > 1 ? "black" : "red" }}
      >
        {itemName}
      </span>
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        +1
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          handleRemove();
        }}
      >
        -1
      </button>
    </section>
  );
};
