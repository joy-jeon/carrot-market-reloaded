export default function FormInput() {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        type="text"
        placeholder="Username"
        required
      />
      <span className="text-red-500 font-medium">Input error</span>
    </div>
  );
}
