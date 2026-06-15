"use client";
import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import Search from "@/components/Search";
import Image from "next/image";
import todoIcon from "@/assets/imgs/todo.svg";
import doneIcon from "@/assets/imgs/done.svg";
import { useEffect, useState } from "react";
import ItemList from "@/components/ItemList";

export default function Home() {
  const [items, setItems] = useState([]);

  const todoItems = items.filter((item) => !item.isCompleted);
  const doneItems = items.filter((item) => item.isCompleted);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(
        `https://assignment-todolist-api.vercel.app/api/${process.env.NEXT_PUBLIC_TENANT_ID}/items`,
      );
      const data = await response.json();
      setItems(data);
    };
    getItems();
  }, []);

  return (
    <div>
      <Search setItems={setItems} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <section className="flex flex-col gap-2">
          <Image src={todoIcon} alt="todo" width={101} height={36} />
          <ItemList items={todoItems} setItems={setItems} />
        </section>
        <section className="flex flex-col gap-2">
          <Image src={doneIcon} alt="done" width={101} height={36} />
          <ItemList items={doneItems} setItems={setItems} />
        </section>
      </div>
    </div>
  );
}
