"use client";

import Button from "@/components/Button";
import DetailCheckList from "@/components/DetailCheckList";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TodoDetailForm({ data }) {
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);
  const [name, setName] = useState(data.name);
  const router = useRouter();
  const handleToggle = () => {
    setIsCompleted(!isCompleted);
  };
  const handleUpdate = async () => {
    const response = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${process.env.NEXT_PUBLIC_TENANT_ID}/items/${data.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          isCompleted: isCompleted,
        }),
      },
    );
    router.push("/");
  };
  const handleDelete = async () => {
    await fetch(
      `https://assignment-todolist-api.vercel.app/api/${process.env.NEXT_PUBLIC_TENANT_ID}/items/${data.id}`,
      {
        method: "DELETE",
      },
    );
    router.push("/");
  };
  return (
    <>
      <DetailCheckList
        isCompleted={data.isCompleted}
        setName={setName}
        name={name}
        handleToggle={handleToggle}
      />
      <div className="flex gap-4 justify-center lg:justify-end">
        <Button onClick={handleUpdate}>수정완료</Button>
        <Button onClick={handleDelete}>삭제하기</Button>
      </div>
    </>
  );
}
