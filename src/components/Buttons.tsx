import React from "react";

export function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-[#1f2937] p-3 opacity-80 border-gray-400 border-2 rounded-xl text-[#F9FAFB]"
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
