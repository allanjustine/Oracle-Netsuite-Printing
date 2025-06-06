import { formatDistanceToNowStrict } from "date-fns";
import { use, useEffect, useState } from "react";
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
} from "react-icons/fa6";

export default function MostPrintCountBranch({ record, index }: any) {
  const [item, setItem] = useState(0);
  const [pulse, setPulse] = useState(true);
  const randomColor = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-violet-500",
    "bg-green-500",
    "bg-cyan-500",
    "bg-gray-500",
    "bg-black",
    "bg-indigo-500",
    "bg-yellow-700",
  ];

  useEffect(() => {
    setInterval(() => {
      setItem(Math.floor(Math.random() * 9));
      setPulse(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPulse(false);
    }, 500);
  }, [pulse]);

  const icon = [
    <Fa1 key="1" />,
    <Fa2 key="2" />,
    <Fa3 key="3" />,
    <Fa4 key="4" />,
    <Fa5 key="5" />,
    <Fa6 key="6" />,
    <Fa7 key="7" />,
    <Fa8 key="8" />,
    <Fa9 key="9" />,
    <span key="10" className="flex">
      <Fa1 />
      <Fa0 />
    </span>,
  ];

  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 ease-in-out ${
            randomColor[item]
          } ${pulse && "animate-bounce"}`}
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
