import FormattedNumber from "@/utils/FormattedNumber";
import { format, formatDistanceToNowStrict } from "date-fns";
import { FaPesoSign } from "react-icons/fa6";

export const tableDatas = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    width: "80px",
    sortable: true,
    sortField: "id",
  },
  {
    name: "CUSTOMER NAME",
    cell: (row: any) => <div>{row.customer ?? "-"}</div>,
    sortable: true,
    sortField: "customer",
  },
  {
    name: "EXTERNAL ID",
    cell: (row: any) => <div>{row.external_id}</div>,
    sortable: true,
    sortField: "external_id",
  },
  {
    name: "PRINT COUNT",
    cell: (row: any) => (
      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
        {row.print_count}
      </span>
    ),
    sortable: true,
    sortField: "print_count",
  },
  {
    name: "PRINT BY",
    cell: (row: any) => <div>{row.print_by}</div>,
    sortable: true,
    sortField: "print_by",
  },
  {
    name: "CAN RE-PRINT",
    cell: (row: any) => <div>{row.re_print ? "Yes" : "No"}</div>,
    sortable: true,
    sortField: "re_print",
  },
  {
    name: "TOTAL AMOUNT",
    cell: (row: any) => (
      <div className="flex gap-1 items-center">
        <FaPesoSign />
        <span>{FormattedNumber(row.total_amount_due)}</span>
      </div>
    ),
    sortable: true,
    sortField: "total_amount_due",
  },
  {
    name: "CREATED AT",
    cell: (row: any) => (
      <div>
        {format(row.created_at, "MMM d, yyyy - h:mm a")}
        <br />
        <span className="text-gray-400 text-xs font-thin">
          (
          {formatDistanceToNowStrict(row.created_at, {
            addSuffix: true,
          })}
          )
        </span>
      </div>
    ),
    sortable: true,
    sortField: "created_at",
  },
];
