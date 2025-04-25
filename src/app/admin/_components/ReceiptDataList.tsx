import { format, formatDistanceToNowStrict } from "date-fns";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ReceiptDataList({ record }: any) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="p-3 text-sm">{record.id}</td>
      <td className="p-3 text-sm">{record.external_id}</td>
      <td className="p-3">
        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
          {record.print_count}
        </span>
      </td>
      <td className="p-3 text-sm">{record.print_by}</td>
      <td className="p-3 text-sm">
        {format(record.created_at, "MMM d, yyyy - h:mm a")}
        <br />
        <span className="text-gray-400 text-xs font-thin">
          (
          {formatDistanceToNowStrict(record.created_at, {
            addSuffix: true,
          })}
          )
        </span>
      </td>
      <td>
        <span className="flex gap-2">
          <button
            type="button"
            className="px-2 py-1.5 flex gap-2 items-center bg-blue-500 hover:bg-blue-600 hover:-translate-x-1 text-white transition-all ease-in-out duration-300 rounded-md"
          >
            <FaEdit /> <span className="text-xs">Edit</span>
          </button>
          <button
            type="button"
            className="px-2 py-1.5 flex gap-2 items-center bg-red-500 hover:bg-red-600 hover:-translate-x-1 text-white transition-all ease-in-out duration-300 rounded-md"
          >
            <FaTrash /> <span className="text-xs">Delete</span>
          </button>
        </span>
      </td>
    </tr>
  );
}
