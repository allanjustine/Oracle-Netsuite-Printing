import FormattedNumber from "@/utils/FormattedNumber";
import { formatDistanceToNowStrict } from "date-fns";
import { FaCheck } from "react-icons/fa";
import {
  Fa0,
  Fa1,
  Fa2,
  Fa3,
  Fa4,
  Fa5,
  Fa6,
  Fa7,
  Fa8,
  Fa9,
  FaPesoSign,
  FaX,
} from "react-icons/fa6";

export default function MostPrintCountBranch({ record, index }: any) {
  const randomColor = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-violet-500",
    "bg-green-500",
  ];

  const icon = [
    <Fa1 />,
    <Fa2 />,
    <Fa3 />,
    <Fa4 />,
    <Fa5 />,
    <Fa6 />,
    <Fa7 />,
    <Fa8 />,
    <Fa9 />,
    <>
      <Fa1 />
      <Fa0 />
    </>,
  ];

  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
            randomColor[index % 5]
          }`}
        >
          {icon[index]}
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium text-primarydark">
          {record.external_id}
        </h4>
        <p className="text-xs text-gray-500">{record.print_by}</p>
        <p className="text-xs text-gray-500 font-bold flex gap-1 items-center">
          Print Count:
          <span>x{record.print_count}</span>
        </p>
        <p className="text-xs text-gray-400">
          Last Print:{" "}
          {formatDistanceToNowStrict(record.updated_at, {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
}
