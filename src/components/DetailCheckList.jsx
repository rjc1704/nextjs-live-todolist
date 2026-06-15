"use client";

import Image from "next/image";
import todoCheckTrue from "@/assets/icons/todo-check-true.svg";
import todoCheckFalse from "@/assets/icons/todo-check-false.svg";

export default function DetailCheckList({
  isCompleted,
  name,
  handleToggle,
  setName,
}) {
  return (
    <li
      className={`px-2 h-[50px] justify-center underline flex  items-center gap-2 w-full ${isCompleted ? "bg-violet-100 line-through" : "bg-white"} border rounded-4xl`}
    >
      <Image
        src={isCompleted ? todoCheckTrue : todoCheckFalse}
        alt="checkList"
        width={32}
        height={32}
        onClick={handleToggle}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="outline-none"
      />
    </li>
  );
}
