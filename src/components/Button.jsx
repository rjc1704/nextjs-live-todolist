"use client";

export default function Button({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-[165px] rounded-4xl ${disabled ? "bg-slate-200" : "bg-violet-600 cursor-pointer text-white"} text-slate-900 text-md whitespace-nowrap`}
    >
      {children}
    </button>
  );
}
