"use client";

import Button from "@/components/Button";
import DetailCheckList from "@/components/DetailCheckList";

export default function TodoDetailForm({ data }) {
  return (
    <>
      <DetailCheckList
        isCompleted={data.isCompleted}
        setName={setName}
        name={name}
        handleToggle={handleToggle}
      />
      <div className="flex gap-4 justify-center lg:justify-end">
        <Button>수정완료</Button>
        <Button>삭제하기</Button>
      </div>
    </>
  );
}
