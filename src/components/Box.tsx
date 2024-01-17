interface Props {
  children: React.ReactNode;
  auto?: boolean;
}

export default function Box({ children }: Props) {
  return (
    <div className="bg-[#121826cc] p-5 m-4 md:m-10 text-[#F9FAFB] rounded-3xl min-w-[30rem] md:min-w-[38rem] border-2 border-opacity-20 border-gray-400 flex flex-col gap-y-2">
      {children}
    </div>
  );
}
