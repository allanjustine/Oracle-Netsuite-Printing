export default function Input({ error, ...props }: any) {
  return (
    <input
      {...props}
      className={`block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400 ${
        error && "border-red-500"
      }`}
    />
  );
}
