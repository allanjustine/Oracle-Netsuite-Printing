import { formatDistanceToNowStrict } from "date-fns";
import { FaCheck } from "react-icons/fa";

export default function ReceiptLatestDataList({ record }: any) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
          <FaCheck />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium text-primarydark">
          {record.external_id}
        </h4>
        <p className="text-xs text-primarylight">{record.print_by}</p>
        <p className="text-xs text-gray-400 mt-1">
          {formatDistanceToNowStrict(record.created_at, {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
}
