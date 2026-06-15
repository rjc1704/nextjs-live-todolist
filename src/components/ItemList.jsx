import React from "react";
import CheckList from "./CheckList";
import Image from "next/image";
import todoIcon from "@/assets/imgs/todo.svg";
import doneIcon from "@/assets/imgs/done.svg";

export default function ItemList({ items, setItems, type = "todo" }) {
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
