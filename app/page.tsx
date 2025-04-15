export default function Home() {
  return (
    <main
      className="bg-gray-100 h-screen flex items-center justify-center p-5
      dark:bg-gray-600"
    >
      <div
        className="bg-white shadow-lg w-full rounded-3xl p-5
        max-w-screen-sm dark:bg-gray-500"
      >
        {/* row1 */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span
              className="text-gray-500 font-semibold -mb-1
              dark:text-gray-300"
            >
              In transit
            </span>
            <span className="text-4xl font-semibold dark:text-white">
              Coolblue
            </span>
          </div>
          <div className="size-12 bg-orange-400 rounded-full" />
        </div>
        {/* row2 */}
        <div className="my-2 flex items-center gap-2">
          <span
            className="
            bg-green-600 text-white uppercase px-2 py-1 text-xs font-medium rounded-full transition
            hover:bg-green-500 hover:scale-125
          "
          >
            Today
          </span>
          <span className="dark:text-gray-100">9:30-10:30</span>
        </div>
        {/* row3 */}
        <div className="relative">
          <div className="bg-gray-200 rounded-full w-full h-2" />
          <div className="bg-green-500 rounded-full w-2/3 h-2 absolute left-0 bottom-0" />
        </div>
        {/* row4 */}
        <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-300">
          <span>Expected</span>
          <span>Sortng center</span>
          <span>In transit</span>
          <span className="text-gray-300 dark:text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}
