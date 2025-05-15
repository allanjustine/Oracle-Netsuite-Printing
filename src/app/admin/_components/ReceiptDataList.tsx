import { format, formatDistanceToNowStrict } from "date-fns";
import { FaCircleNotch, FaEdit, FaTrash } from "react-icons/fa";
import Modal from "./ui/modal";
import { useEffect, useState } from "react";
import { receiptRecords } from "../_constants/printReceiptsData";
import Input from "./ui/input";
import api from "@/lib/axiosCall";
import { Bounce, toast } from "react-toastify";
import { Toast } from "./ui/toast";
import FormattedNumber from "@/utils/FormattedNumber";

export default function ReceiptDataList({ record, setIsRefresh }: any) {
  const [formInput, setFormInput] = useState(receiptRecords);
  const [errors, setErrors] = useState(receiptRecords);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  useEffect(() => {
    setFormInput((formInput) => ({
      ...formInput,
      external_id: record.external_id,
      print_by: record.print_by,
      re_print: record.re_print,
    }));
  }, [record]);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setIsRefresh(true);
    try {
      const response = await api.patch(
        `/print-receipt/${record.id}`,
        formInput
      );

      if (response.status === 204) {
        setErrors(receiptRecords);
        Toast("Receipt updated successfully", "success");
      }
    } catch (error: any) {
      console.error(error);
      setErrors(error.response.data.errors);
      Toast(error.response.data.message, "error");
    } finally {
      setIsLoading(false);
      setIsRefresh(false);
      setIsOpen(false);
    }
  };

  const handleChange = (title: any) => (e: any) => {
    const { value } = e.target;
    setFormInput((formInput) => ({
      ...formInput,
      [title]: value === "true" ? true : value === "false" ? false : value,
    }));
  };

  const handleDelete = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setIsRefresh(true);
    try {
      const response = await api.delete(`/print-receipt/${record.id}`);
      if (response.status === 204) {
        Toast("Receipt deleted successfully", "success");
      }
    } catch (error: any) {
      console.error(error);
      Toast(error.response.data.message, "error");
    } finally {
      setIsLoading(false);
      setIsRefresh(false);
      setIsOpenDelete(false);
    }
  };

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
      <td className="p-3 text-sm">{record.re_print ? "Yes" : "No"}</td>
      <td className="p-3 text-sm flex gap-1"><span>PHP</span> <span>{FormattedNumber(record.total_amount_due)}</span></td>
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
          <Modal
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
            handleSubmitButton={handleUpdate}
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
              Updating <span className="font-bold">{record.external_id}</span>{" "}
              that printed by{" "}
              <span className="font-bold">{record.print_by}</span>
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
                  value={formInput.external_id}
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
                  value={formInput.print_by}
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
                    value={formInput.re_print ? "true" : "false"}
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
            handleSubmitButton={handleDelete}
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
              of <span className="font-bold">{record.external_id}</span> that
              printed by <span className="font-bold">{record.print_by}?</span>
            </p>
            <p className="text-center text-gray-400">
              This action cannot be undone!
            </p>
          </Modal>
        </span>
      </td>
    </tr>
  );
}
