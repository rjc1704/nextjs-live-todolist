import React from "react";
import CheckList from "./CheckList";

export default function ItemList({ items, setItems }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <CheckList key={item.id} />
      ))}
    </ul>
  );
}
