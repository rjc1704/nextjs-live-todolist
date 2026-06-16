"use client";
import { useState } from "react";
import Button from "./Button";

export default function Search({ setItems }) {
  return (
    <form className="flex gap-2 mb-4">
      <input
        className="w-full h-[56px] border rounded-4xl text-md px-4"
        placeholder="할 일을 입력해주세요"
      />
      <Button type="submit">+ 추가하기</Button>
    </form>
  );
}
