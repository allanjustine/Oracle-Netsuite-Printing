import DataTable from "react-data-table-component";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Modal from "./ui/modal";
import { FaCircleNotch, FaTrash } from "react-icons/fa";
import api from "@/lib/axiosCall";
import { Toast } from "./ui/toast";
import TableLoader from "./loaders/table-loader";
import { paginationRowsPerPageOptions } from "../_constants/paginationRowsPerPageOptions";
import { FaCheck, FaMagnifyingGlass, FaX } from "react-icons/fa6";
import { MdRequestQuote } from "react-icons/md";

export default function ReprintRequested() {
  const [data, setData] = useState<any[]>([]);
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenApprove, setIsOpenApprove] = useState(false);
  const [reason, setReason] = useState("");
  const [pagination, setPagination] = useState<any>({
    page: 1,
    perPage: 10,
    total: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const debounceRef = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    fetchData();
  }, [pagination.page, pagination.perPage, searchTerm]);

  const fetchData = async () => {
    try {
      const payload = {
        search: searchTerm,
        page: pagination.page,
        per_page: pagination.perPage,
      };
      const response = await api.get("/request-reprints", {
        params: {
          ...payload,
        },
      });

      if (response.status === 200) {
        setData(response.data.data.data);
        setPagination((prev: any) => ({
          ...prev,
          page: response.data.data.current_page,
          total: response.data.data.total,
          perPage: response.data.data.per_page,
        }));
      }
    } catch (e: any) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = (record: any) => async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.patch(
        `/request-reprints/${record.id}/approve`,
      );

      if (response.status === 200) {
        fetchData();
        Toast(response.data.message, "success");
      }
    } catch (error: any) {
      console.error(error);
      setErrors(error.response.data.errors);
      Toast(error.response.data.message, "error");
    } finally {
      setIsLoading(false);
      setIsOpenApprove(false);
    }
  };

  const handleReject = (record: any) => async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.patch(
        `/request-reprints/${record.id}/reject`,
        {
          reason,
        },
      );
      if (response.status === 200) {
        Toast("Receipt deleted successfully", "success");
        fetchData();
        setIsOpenDelete(false);
        setReason("");
        setErrors({});
      }
    } catch (error: any) {
      console.error(error);
      Toast(error.response.data.message, "error");
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const colorStatus = (status: string) => {
    switch (status) {
      case "rejected":
        return "text-red-500";
      case "approved":
        return "text-green-500";
      case "pending":
        return "text-yellow-500";
      case "completed":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const columns = [
    {
      name: "ID",
      cell: (row: any) => row.id,
      width: "70px",
    },
    {
      name: "REASON",
      cell: (row: any) => row.reason,
    },
    {
      name: "CANCEL REASON",
      cell: (row: any) => row.cancel_reason || "N/A",
    },
    {
      name: "STATUS",
      cell: (row: any) => (
        <span
          className={`${colorStatus(row.status)} font-bold uppercase text-xs`}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: "EXTERNAL ID",
      cell: (row: any) => row?.receipt?.external_id,
    },
    {
      name: "BRANCH REQUESTED",
      cell: (row: any) => row?.receipt?.print_by,
    },
    {
      name: "ACTION",
      cell: (row: any) =>
        row.status === "pending" ? (
          <div className="flex gap-2 items-center">
            <Modal
              row={row}
              buttonText={
                <>
                  <FaCheck /> Yes, Approve
                </>
              }
              buttonLoadingText={
                <>
                  <FaCircleNotch className="animate-spin" /> Approving...
                </>
              }
              handleSubmitButton={handleApprove(row)}
              isLoading={isLoading}
              buttonColorHover="bg-blue-500 hover:bg-blue-600"
              title={
                <>
                  <FaCheck /> <span className="text-xs">Approve</span>
                </>
              }
              isOpen={isOpenApprove}
              setIsOpen={setIsOpenApprove}
            >
              <p className="text-lg mt-5 mb-5">
                Are you sure you want to approve this request reprint with
                external ID of{" "}
                <span className="font-bold">{row.receipt.external_id}</span>{" "}
                that printed by{" "}
                <span className="font-bold">{row.receipt.print_by}?</span>
              </p>
              <p className="text-center text-gray-400">
                This action cannot be undone!
              </p>
            </Modal>
            <Modal
              row={row}
              buttonText={
                <>
                  <FaTrash /> Yes, Reject
                </>
              }
              buttonLoadingText={
                <>
                  <FaCircleNotch className="animate-spin" /> Rejecting...
                </>
              }
              handleSubmitButton={handleReject(row)}
              isLoading={isLoading}
              buttonColorHover="bg-red-500 hover:bg-red-600"
              title={
                <>
                  <FaX /> <span className="text-xs">Reject</span>
                </>
              }
              isOpen={isOpenDelete}
              setIsOpen={setIsOpenDelete}
            >
              <p className="text-lg mt-5 mb-5">
                Are you sure you want to reject this request reprint with
                external ID of{" "}
                <span className="font-bold">{row.receipt.external_id}</span>{" "}
                that printed by{" "}
                <span className="font-bold">{row.receipt.print_by}?</span>
              </p>
              <div className="flex flex-col gap-2">
                <label htmlFor="reason" className="text-gray-600 text-xs">
                  Enter what is the reason of rejecting the ticket
                </label>
                <textarea
                  rows={5}
                  className={`${errors.reason ? "border-red-500" : "border-gray-200"} w-full resize-none px-4 py-3 text-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all focus:outline-none`}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Enter what is the reason of rejecting the ticket..."
                ></textarea>
                {errors.reason && (
                  <p className="text-red-500">{errors.reason[0]}</p>
                )}
              </div>
              <p className="text-center text-gray-400">
                This action cannot be undone!
              </p>
            </Modal>
          </div>
        ) : (
          "-"
        ),
      width: "200px",
    },
  ];

  const handlePage = (page: number) => {
    setLoading(true);
    setPagination((pagination: any) => ({
      ...pagination,
      page,
    }));
  };

  const handlePerPage = (perPage: number) => {
    setLoading(true);
    setPagination((pagination: any) => ({
      ...pagination,
      perPage,
    }));
  };

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      setLoading(true);
      setSearchTerm(value);
    }, 500);
  };

  const NoData = () => {
    return (
      <div className="py-10">
        {searchTerm
          ? `No results for "${searchTerm}"`
          : "No requested reprint yet"}
      </div>
    );
  };

  return (
    <div className="border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center w-full">
          <MdRequestQuote className="text-accent mr-2" />
          <h3 className="text-xl font-semibold text-primarydark">
            Recent Requested Re-Print
          </h3>
        </div>
        <div className="mb-2 flex w-full flex-col md:justify-end items-end md:flex-row space-y-2 gap-2">
          <div className="relative">
            <input
              type="search"
              onChange={handleSearchTerm}
              placeholder="Search..."
              className="pr-2 pl-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <span className="absolute left-2 top-3 text-gray-300">
              <FaMagnifyingGlass className="text-lg" />
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              fetchData();
              setLoading(true);
            }}
            className="py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
          >
            Refresh
          </button>
        </div>
      </div>
      <DataTable
        data={data}
        columns={columns}
        pagination
        paginationServer
        striped
        highlightOnHover
        progressPending={loading}
        progressComponent={<TableLoader colSpan={8} />}
        sortServer
        defaultSortFieldId={1}
        defaultSortAsc={false}
        paginationTotalRows={pagination.total}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        onChangePage={handlePage}
        onChangeRowsPerPage={handlePerPage}
        persistTableHead={true}
        noDataComponent={<NoData />}
        paginationPerPage={pagination.perPage}
      />
    </div>
  );
}
