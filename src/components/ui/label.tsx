export default function Label({ children, ...props }: any) {
  return (
    <label {...props} className="block text-sm font-bold text-gray-500">
      {children}
    </label>
  );
}
