export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg w-full rounded-2xl p-5">
        {/* row1 */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold -mb-1">
              In transit
            </span>
            <span className="text-4xl font-semibold ">Coolblue</span>
          </div>
          <div className="size-12 bg-orange-400 rounded-full" />
        </div>
        {/* row2 */}
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-600 text-white uppercase px-2 py-1 text-xs font-medium rounded-full">
            Today
          </span>
          <span>9:30-10:30</span>
        </div>
        {/* row3 */}
        <div className="relative">
          <div className="bg-gray-200 rounded-full w-full h-2" />
          <div className="bg-green-500 rounded-full w-2/3 h-2 absolute left-0 bottom-0" />
        </div>
        {/* row4 */}
        <div className="flex justify-between items-center mt-5 text-gray-600">
          <span>Expected</span>
          <span>Sortng center</span>
          <span>In transit</span>
          <span className="text-gray-300">Delivered</span>
        </div>
      </div>
    </main>
  );
}
