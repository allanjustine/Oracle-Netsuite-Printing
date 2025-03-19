import { FaXmark, FaCheckDouble } from "react-icons/fa6";

export const printLabel = (title: any, isLabel: any) => {
  if (isLabel) {
    return (
      <span className="flex gap-1 text-green-600 items-center">
        <FaCheckDouble /> {title}
      </span>
    );
  } else {
    return (
      <span className="flex gap-1 text-red-600 items-center">
        <FaXmark /> {title}
      </span>
    );
  }
};
