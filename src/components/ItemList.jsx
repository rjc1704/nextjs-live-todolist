import React from "react";
import CheckList from "./CheckList";
import Image from "next/image";
import todoIcon from "@/assets/imgs/todo.svg";
import doneIcon from "@/assets/imgs/done.svg";

export default function ItemList({ items, setItems, type = "todo" }) {
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
    <section className="flex flex-col gap-2">
      <Image
        src={type === "todo" ? todoIcon : doneIcon}
        alt="todo"
        width={101}
        height={36}
      />
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <CheckList onToggle={handleToggle} key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
