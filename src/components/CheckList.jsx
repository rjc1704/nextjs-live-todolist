"use client";

import Image from "next/image";
import todoCheckTrue from "@/assets/icons/todo-check-true.svg";
import todoCheckFalse from "@/assets/icons/todo-check-false.svg";
import Link from "next/link";

export default function CheckList({ onToggle, item }) {
  return (
    <li
      className={`px-2 h-[50px] flex  items-center gap-2 w-full ${item.isCompleted ? "bg-violet-100 line-through" : "bg-white"} border rounded-4xl`}
    >
      <Image
        src={item.isCompleted ? todoCheckTrue : todoCheckFalse}
        alt="checkList"
        width={32}
        height={32}
        onClick={() => onToggle(item.id, item.isCompleted)}
      />
      <Link href={`/${item.id}`}>
        <p className={`text-sm`}>{item.name}</p>
      </Link>
    </li>
  );
}
