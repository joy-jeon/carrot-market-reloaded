interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
  name: string;
}
export default function FormInput({
  type,
  placeholder,
  required,
  errors = [],
  name,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        name={name}
        className={`
          bg-transparent rounded-3xl h-12 outline-none border-neutral-300 pl-10
          ring-transparent transition placeholder:text-gray-300
          focus:ring-2  focus:ring-neutral-300 focus:ring-offset-2 focus:border-neutral-300
          ${errors.length > 0 ? "border-red-400" : "border-neutral-300"}
        `}
        type={type}
        placeholder={placeholder}
        required={required}
      />

      {Array.isArray(errors) &&
        errors.map((error, index) => (
          <span key={index} className="text-red-400 font-normal text-sm">
            {error}
          </span>
        ))}
    </div>
  );
}
