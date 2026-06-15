"use client";
import { useState } from "react";
import Button from "./Button";

export default function Search({ setItems }) {
  const [title, setTitle] = useState("");

  const addItem = async (e) => {
    e.preventDefault();
    // const newItem = { id: Date.now(), title, isCompleted: false };
    const response = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${process.env.NEXT_PUBLIC_TENANT_ID}/items`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: title }),
      },
    );
    const newItem = await response.json();
    setItems((prevItems) => [...prevItems, newItem]);
    setTitle("");
  };
  return (
    <form className="flex gap-2 mb-4" onSubmit={addItem}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full h-[56px] border rounded-4xl text-md px-4"
        placeholder="할 일을 입력해주세요"
      />
      <Button disabled={!title.trim()} type="submit">
        + 추가하기
      </Button>
    </form>
  );
}
