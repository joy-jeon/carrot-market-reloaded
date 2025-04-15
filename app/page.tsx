export default function Home() {
  return (
    <main
      className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-yellow-100 
      h-screen flex items-center justify-center p-5"
    >
      <div
        className="bg-white shadow-lg w-full rounded-3xl p-5 max-w-screen-sm flex flex-col gap-2
      md:flex-row"
      >
        <input
          type="text"
          placeholder="Search here.."
          className="w-full rounded-full h-12 bg-gray-200 px-5 outline-none
          ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow
          placeholder:text-gray-400"
        />
        <button
          className="bg-black text-white py-2 rounded-full 
          active:scale-90 
          transition-transform font-medium outline-none
          bg-opacity-50"
        >
          Search
        </button>
      </div>
    </main>
  );
}
