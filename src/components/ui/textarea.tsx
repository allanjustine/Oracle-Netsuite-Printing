export default function Textarea({ ...props }: any) {
  return (
    <textarea
      {...props}
      className="block w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none focus:outline-none"
    ></textarea>
  );
}
