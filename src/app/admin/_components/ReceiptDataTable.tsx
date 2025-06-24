import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { InputTypes } from "../_types/inputTypes";
import { tableDatas } from "../_constants/tableData";
import Modal from "./ui/modal";
import { FaCircleNotch, FaEdit, FaTrash } from "react-icons/fa";
import Input from "./ui/input";
import api from "@/lib/axiosCall";
import { Toast } from "./ui/toast";
import { receiptRecordsData } from "../_constants/printReceiptsData";
import TableLoader from "./loaders/table-loader";
import { paginationRowsPerPageOptions } from "../_constants/paginationRowsPerPageOptions";

export default function ReceiptDataTable({
  receiptRecords,
  isSearching,
  pagination,
  loading,
  filter,
  setFilter,
  setPerPage,
  setPagination,
  searchTerm,
  fetchPrintReceiptsData,
}: any) {
  const [formInput, setFormInput] = useState<InputTypes>(receiptRecordsData);
  const [errors, setErrors] = useState<InputTypes>(receiptRecordsData);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({
    [0]: false,
  });
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [record, setRecord] = useState(receiptRecordsData);

  useEffect(() => {
    setFormInput((formInput: InputTypes) => ({
      ...formInput,
      external_id: record.external_id,
      print_by: record.print_by,
      re_print: record.re_print,
    }));
  }, [record]);

  const handleUpdate = (record: any) => async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.patch(
        `/print-receipt/${record.id}/update-reciept`,
        formInput
      );

      if (response.status === 204) {
        setErrors(receiptRecordsData);
        fetchPrintReceiptsData();
        Toast("Receipt updated successfully", "success");
      }
    } catch (error: any) {
      console.error(error);
      setErrors(error.response.data.errors);
      Toast(error.response.data.message, "error");
    } finally {
      setIsLoading(false);
      setIsOpen((isOpen) => ({
        ...isOpen,
        [record.id]: !isOpen[record.id],
      }));
    }
  };

  const handleChange = (title: any) => (e: any) => {
    const { value } = e.target;
    setFormInput((formInput) => ({
      ...formInput,
      [title]: value === "true" ? true : value === "false" ? false : value,
    }));
  };

  const handleDelete = (record: any) => async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.delete(`/print-receipt/${record.id}/delete-reciept`);
      if (response.status === 204) {
        Toast("Receipt deleted successfully", "success");
        fetchPrintReceiptsData();
      }
    } catch (error: any) {
      console.error(error);
      Toast(error.response.data.message, "error");
    } finally {
      setIsLoading(false);
      setIsOpenDelete(false);
    }
  };

  const action = [
    {
      name: "ACTION",
      cell: (row: any) => (
        <div className="flex gap-2">
          <Modal
            row={row}
            setRecord={setRecord}
            buttonText={
              <>
                <FaEdit /> Update
              </>
            }
            buttonLoadingText={
              <>
                <FaCircleNotch className="animate-spin" /> Updating...
              </>
            }
            handleSubmitButton={handleUpdate(row)}
            isLoading={isLoading}
            buttonColorHover="bg-blue-500 hover:bg-blue-600"
            title={
              <>
                <FaEdit /> <span className="text-xs">Edit</span>
              </>
            }
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <p className="text-lg mt-2 mb-5">
              Updating <span className="font-bold">{row.external_id}</span> that
              printed by <span className="font-bold">{row.print_by}</span>
            </p>
            <div className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="external_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  External ID
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <Input
                  type="text"
                  defaultValue={row.external_id}
                  onChange={handleChange("external_id")}
                  placeholder="Enter unique external ID"
                  error={errors?.external_id}
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="print_by"
                  className="block text-sm font-medium text-gray-700"
                >
                  Print By
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <Input
                  type="text"
                  defaultValue={row.print_by}
                  onChange={handleChange("print_by")}
                  placeholder="Enter printer name"
                  error={errors?.print_by}
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="re_print"
                  className="block text-sm font-medium text-gray-700"
                >
                  Can Re-print
                </label>
                <div className="relative">
                  <select
                    id="re_print"
                    defaultValue={String(row.re_print)}
                    onChange={handleChange("re_print")}
                    className={`block w-full px-4 py-2.5 pr-8 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white ${
                      errors?.re_print && "border-red-500"
                    }`}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

          <Modal
            row={row}
            setRecord={setRecord}
            buttonText={
              <>
                <FaTrash /> Yes, Delete
              </>
            }
            buttonLoadingText={
              <>
                <FaCircleNotch className="animate-spin" /> Deleting...
              </>
            }
            handleSubmitButton={handleDelete(row)}
            isLoading={isLoading}
            buttonColorHover="bg-red-500 hover:bg-red-600"
            title={
              <>
                <FaTrash /> <span className="text-xs">Delete</span>
              </>
            }
            isOpen={isOpenDelete}
            setIsOpen={setIsOpenDelete}
          >
            <p className="text-lg mt-5 mb-5">
              Are you sure you want to delete this receipt data with external ID
              of <span className="font-bold">{row.external_id}</span> that
              printed by <span className="font-bold">{row.print_by}?</span>
            </p>
            <p className="text-center text-gray-400">
              This action cannot be undone!
            </p>
          </Modal>
        </div>
      ),
      width: "170px",
    },
  ];

  const columns = [...tableDatas, ...action];

  const handleShort = (column: any, direction: any) => {
    setFilter({
      column: column.sortField,
      direction: direction,
    });
  };

  const handlePage = (page: number) => {
    if (pagination.loading) return;
    setPagination((pagination: any) => ({
      ...pagination,
      loading: true,
    }));
    setPagination((pagination: any) => ({
      ...pagination,
      current_page: page,
    }));
  };

  const handlePerPage = (perPage: number) => {
    if (pagination.loading) return;
    setPerPage(perPage);
  };

  const NoData = () => {
    return (
      <div className="py-10">
        {searchTerm ? `No results for "${searchTerm}"` : "No print records yet"}
      </div>
    );
  };

  return (
    <DataTable
      data={receiptRecords.data}
      columns={columns}
      pagination
      paginationServer
      striped
      highlightOnHover
      progressPending={loading || isSearching}
      progressComponent={<TableLoader colSpan={8} />}
      sortServer
      onSort={handleShort}
      paginationTotalRows={pagination.total}
      defaultSortAsc={filter.direction}
      defaultSortFieldId={filter.column}
      paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      onChangePage={handlePage}
      onChangeRowsPerPage={handlePerPage}
      persistTableHead={true}
      noDataComponent={<NoData />}
      paginationPerPage={pagination.per_page}
    />
  );
}
