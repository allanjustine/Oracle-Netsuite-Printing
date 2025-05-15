import {
  FaArrowUp,
  FaCalendarDay,
  FaCalendarWeek,
  FaDollarSign,
  FaFile,
  FaFileInvoiceDollar,
  FaPrint,
  FaQuestionCircle,
  FaUsers,
} from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

export default function CardsCountList({ receiptRecords }: any) {
  return (
    <>
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-200 relative">
        <h3 className="text-sm uppercase text-primarylight font-semibold">
          Total Receipt Prints
        </h3>
        <p className="text-3xl font-bold text-primarydark mt-2">
          {receiptRecords.totalReceipts}
        </p>
        <div className={"flex items-center mt-2 text-green-500"}>
          <FaArrowUp className="mr-1" />
          <span className="text-sm">100% all time</span>
        </div>
        <div className="absolute top-8 right-3">
          <FaFile className="text-gray-100 text-7xl" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-200 relative">
        <h3 className="text-sm uppercase text-primarylight font-semibold">
          Today's Prints
        </h3>
        <p className="text-3xl font-bold text-primarydark mt-2">
          {receiptRecords.todaysCount}{" "}
          <span className="text-xs text-gray-400">
            ({receiptRecords.yesterdayCount})
          </span>
        </p>
        <div
          className={`flex items-center mt-2 ${
            receiptRecords.todaysPercentage < 10
              ? "text-red-500"
              : receiptRecords.todaysPercentage < 50
              ? "text-yellow-500"
              : receiptRecords.todaysPercentage < 80
              ? "text-violet-500"
              : "text-green-500"
          }`}
        >
          <FaArrowUp className="mr-1" />
          <span className="text-sm">
            {receiptRecords.todaysPercentage}% from yesterday
          </span>
        </div>
        <div className="absolute top-8 right-3">
          <FaCalendarDay className="text-gray-100 text-7xl" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-200 relative">
        <h3 className="text-sm uppercase text-primarylight font-semibold">
          Weekly Prints
        </h3>
        <p className="text-3xl font-bold text-primarydark mt-2">
          {receiptRecords.weeklyCount}{" "}
          <span className="text-xs text-gray-400">
            ({receiptRecords.lastWeekCount})
          </span>
        </p>
        <div
          className={`flex items-center mt-2 ${
            receiptRecords.weeklyPercentage < 10
              ? "text-red-500"
              : receiptRecords.weeklyPercentage < 50
              ? "text-yellow-500"
              : receiptRecords.weeklyPercentage < 80
              ? "text-violet-500"
              : "text-green-500"
          }`}
        >
          <FaArrowUp className="mr-1" />
          <span className="text-sm">
            {receiptRecords.weeklyPercentage}% from last week
          </span>
        </div>
        <div className="absolute top-8 right-3">
          <FaCalendarWeek className="text-gray-100 text-7xl" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-200 relative">
        <h3 className="text-sm uppercase text-primarylight font-semibold">
          Monthly Prints
        </h3>
        <p className="text-3xl font-bold text-primarydark mt-2">
          {receiptRecords.monthlyCount}{" "}
          <span className="text-xs text-gray-400">
            ({receiptRecords.lastMonthCount})
          </span>
        </p>
        <div
          className={`flex items-center mt-2 ${
            receiptRecords.monthlyPercentage < 10
              ? "text-red-500"
              : receiptRecords.monthlyPercentage < 50
              ? "text-yellow-500"
              : receiptRecords.monthlyPercentage < 80
              ? "text-violet-500"
              : "text-green-500"
          }`}
        >
          <FaArrowUp className="mr-1" />
          <span className="text-sm">
            {receiptRecords.monthlyPercentage}% from last month
          </span>
        </div>
        <div className="absolute top-8 right-3">
          <FaCalendarDays className="text-gray-100 text-7xl" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-200 relative overflow-hidden">
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <FaPrint className="text-gray-100 text-7xl" />
        </div>
        <div className="relative z-10">
          <h3 className="text-sm uppercase text-primarylight font-semibold">
            Total Branch Printed Records
          </h3>
          <p className="text-3xl font-bold text-primarydark mt-2">
            {receiptRecords.totalBranchPrintRecords}
          </p>
          <div className="flex items-center text-blue-500 mt-2">
            <FaUsers className="mr-1" />
            <span className="text-sm">100% total records</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-200 relative overflow-hidden">
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <FaFileInvoiceDollar className="text-gray-100 text-7xl" />
        </div>
        <div className="relative z-10">
          <h3 className="text-sm uppercase text-primarylight font-semibold">
            Total Cash Sales/Sales Invoice
          </h3>
          <p className="text-3xl font-bold text-primarydark mt-2">
            {receiptRecords.totalInvoice}
          </p>
          <div className="flex items-center text-blue-500 mt-2">
            <FaFileInvoiceDollar className="mr-1" />
            <span className="text-sm">100% total cash sales/sales invoice</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-200 relative overflow-hidden">
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <FaFileInvoiceDollar className="text-gray-100 text-7xl" />
        </div>
        <div className="relative z-10">
          <h3 className="text-sm uppercase text-primarylight font-semibold">
            Total Customer Payment
          </h3>
          <p className="text-3xl font-bold text-primarydark mt-2">
            {receiptRecords.totalCustPay}
          </p>
          <div className="flex items-center text-blue-500 mt-2">
            <FaFileInvoiceDollar className="mr-1" />
            <span className="text-sm">100% total customer payment</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-200 relative overflow-hidden">
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <FaDollarSign className="text-gray-100 text-7xl" />
        </div>
        <div className="relative z-10">
          <h3 className="text-sm uppercase text-primarylight font-semibold">
            Over All Total Amount Due
          </h3>
          <p className="text-3xl font-bold text-primarydark mt-2 flex gap-1 items-center">
            <span>{receiptRecords.overAllTotalAmountDue}</span>{" "}
            <span className="text-sm cursor-pointer" title={`CustPay: PHP ${receiptRecords.sumCustPay} - Invoice: PHP ${receiptRecords.sumInvoice}`}>
              <FaQuestionCircle />
            </span>
          </p>
          <div className="flex items-center text-yellow-400 mt-2">
            <FaDollarSign className="mr-1" />
            <span className="text-sm">100% over all total amount due</span>
          </div>
        </div>
      </div>
    </>
  );
}
