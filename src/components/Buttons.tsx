import React from "react";

interface Props{
  children: React.ReactNode
  onClick: () => void
  class?: string
}
export function Button({ children, onClick, class : className} : Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#1f2937] p-3 opacity-80 border-gray-400 border-2 rounded-xl text-[#F9FAFB] ${className}`}

    >
      {children}
    </button>
  );
}

export default function Buttons({text} : { text: string }) {
  return (
    <div className="flex gap-x-4">
      <Button onClick={() => {
        alert(text);
      }}>
        <img src="/sound_max_fill.svg" alt="sound" />
      </Button>
      <Button
        onClick={() => {
          navigator.clipboard
            .writeText(text)
            .then(() => console.log("copied"))
            .catch((e) => console.log(e));
        }}
      >
        <img src="/Copy.svg" alt="copy" />
      </Button>
    </div>
  );
}
