export default function Home() {
  return (
    <main
      className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-yellow-100 
      h-screen flex items-center justify-center p-5"
    >
      <div
        className="bg-white shadow-lg w-full rounded-3xl p-5 max-w-screen-sm flex flex-col gap-2
      md:flex-row *:outline-none ring ring-transparent transition-shadow
      has-[:invalid]:ring-red-100 has-[:invalid]:ring"
      >
        <input
          type="text"
          required
          placeholder="Search here.."
          className="w-full rounded-full h-12 bg-gray-200 px-5 
          ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow
          placeholder:text-gray-400
          invalid:focus:ring-red-500 peer"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required..
        </span>
        <button
          className="text-white py-2 rounded-full 
          active:scale-90 
          transition-transform font-medium px-10 bg-black
          peer-invalid:bg-red-500 peer-required:bg-green-500
          "
        >
          Log in
        </button>
        <button
          className="text-white py-2 rounded-full 
          active:scale-90 
          transition-transform font-medium px-10
          bg-gradient-to-tr from-cyan-500 via-orange-200 to-purple-400"
        >
          gradient sample
        </button>
      </div>
    </main>
  );
}
