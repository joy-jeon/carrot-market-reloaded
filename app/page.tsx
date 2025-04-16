export default function Home() {
  return (
    <main
      className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-yellow-100 
      h-screen flex items-center justify-center p-5"
    >
      <div
        className="bg-white shadow-lg w-full rounded-3xl p-5 max-w-screen-sm flex flex-col
      md:flex-row gap-3"
      >
        {["Nico", "Me", "You", "Yourself", ""].map((person, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="size-10 bg-blue-400 rounded-full" />
            <span
              className="text-lg font-medium animate-pulse
            empty:w-40 empty:h-3 empty:rounded-full empty:bg-gray-400"
            >
              {person}
            </span>
            <div
              className="flex items-center justify-center size-6 bg-red-500 rounded-full text-white
            animate-bounce relative"
            >
              <span className="z-10">{index}</span>
              <span className="size-6 bg-red-500 rounded-full absolute animate-ping"></span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
