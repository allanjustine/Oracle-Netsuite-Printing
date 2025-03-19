import { FaXmark, FaCheckDouble } from "react-icons/fa6";

export const printLabel = (title: any, isLabel: any) => {
  if (isLabel) {
    return (
      <div className="flex gap-1 text-green-600 items-center">
        <FaCheckDouble /> {title}
      </div>
    );
  } else {
    return (
      <div className="flex gap-1 text-red-600 items-center">
        <FaXmark /> {title}
      </div>
    );
  }
};
