import Button from "@/components/Button";
import CheckList from "@/components/CheckList";
import DetailCheckList from "@/components/DetailCheckList";
import Image from "next/image";
import React from "react";
import TodoDetailForm from "./_components/TodoDetailForm";

export default async function TodoDetailPage({ params }) {
  const { id } = await params;
  const response = await fetch(
    `https://assignment-todolist-api.vercel.app/api/${process.env.NEXT_PUBLIC_TENANT_ID}/items/${id}`,
  );
  const data = await response.json();

  return (
    <div className="flex flex-col gap-2">
      <TodoDetailForm data={data} />
    </div>
  );
}
