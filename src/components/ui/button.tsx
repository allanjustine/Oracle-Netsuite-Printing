export default function Button({ children, ...props }: any) {
  return (
    <button
      {...props}
      className="w-auto p-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
    >
      {children}
    </button>
  );
}
