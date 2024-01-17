
interface Props {
  children: React.ReactNode,
  auto?: boolean
}

export default function Box({children}: Props) {
  return (
    <div className="bg-[#1f2937] opacity-80 p-5 m-4 md:m-10 text-[#F9FAFB] rounded-3xl min-w-[30rem] md:min-w-[38rem] border-2 border-opacity-40 border-gray-400">
      {children}
    </div>
  )
}
