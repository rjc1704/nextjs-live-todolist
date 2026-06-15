import React from "react";
import CheckList from "./CheckList";

export default function ItemList({ items, setItems }) {
  const handleToggle = async (id, isCompleted) => {
    const response = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${process.env.NEXT_PUBLIC_TENANT_ID}/items/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isCompleted: !isCompleted,
        }),
      },
    );
    const updatedData = await response.json();

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item,
      ),
    );
  };
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <CheckList onToggle={handleToggle} key={item.id} item={item} />
      ))}
    </ul>
  );
}
