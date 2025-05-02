"use client";

import GlobalLoader from "@/components/loaders/GlobalLoaders";
import Navbar from "@/components/navbar";
import { useAuth } from "@/context/authcontext";
import useFetchPrintReceipts from "../_hooks/useFetchPrintReceipts";
import { FaArrowDown, FaArrowUp, FaHistory, FaList } from "react-icons/fa";
import NotLogin from "../_components/NotLogin";
import Unauthorized from "../_components/Unauthorized";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRef } from "react";
import Pagination from "../_components/Pagination";
import CardsLoader from "../_components/loaders/cards-loader";
import RecentActivityLoader from "../_components/loaders/recent-activity-loader";
import ReceiptDataList from "../_components/ReceiptDataList";
import ReceiptLatestDataList from "../_components/ReceiptLatestDataList";
import CardsCountList from "../_components/CardsCountsList";
import TableLoader from "../_components/loaders/table-loader";

export default function AdminDashboard() {
  const { isAdmin, isAuthenticated, loadingData } = useAuth();
  const {
    data: receiptRecords,
    loading,
    handleNextPage,
    handlePrevPage,
    setSearchTerm,
    searchTerm,
    pagination,
    onSearchLoading,
    setIsRefresh,
    setFilter,
    perPage,
    filter,
    setPerPage,
  } = useFetchPrintReceipts();
  const debounceRef = useRef<any>(null);

  if (loadingData) return <GlobalLoader />;

  if (!isAuthenticated) return <NotLogin />;

  if (!isAdmin) return <Unauthorized />;

  const handleSearchTerm = (e: any) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const { value } = e.target;
      setSearchTerm(value);
    }, 1000);
  };

  const receiptRecordsTableHead = [
    { col: "ID", key: "id" },
    { col: "External Id", key: "external_id" },
    { col: "Print Count", key: "print_count" },
    { col: "Print By", key: "print_by" },
    { col: "Can Re-Print", key: "re_print" },
    { col: "Created At", key: "created_at" },
    { col: "Action", key: "action" },
  ];

  const handlePerPage = (e: any) => {
    const { value } = e.target;
    setPerPage(value);
  };

  const handleFilter = (key: any) => () => {
    setFilter({
      column: key,
      direction: filter.direction === "asc" ? "desc" : "asc",
    });
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-auto">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {loading ? (
            <CardsLoader />
          ) : (
            <CardsCountList receiptRecords={receiptRecords} />
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-6">
              <FaList className="text-accent mr-2" />
              <h3 className="text-xl font-semibold text-primarydark">
                Recent Print Jobs
              </h3>
            </div>
            <div className="mb-2 flex w-full justify-between items-end">
              <div className="relative border border-gray-300 rounded-lg pl-10">
                <span className="absolute left-2 top-1.5 text-gray-400">
                  Show:
                </span>
                <select
                  onChange={handlePerPage}
                  value={perPage}
                  className="px-3 py-2 rounded-lg focus:outline-none ring-0"
                >
                  <option value="20">20</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                  <option value="70">70</option>
                  <option value="80">80</option>
                  <option value="100">100</option>
                </select>
              </div>
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
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    {receiptRecordsTableHead.map((item, index) => (
                      <th
                        className={`p-3 text-xs uppercase text-primarylight text-left font-semibold ${
                          item.key !== "action" && "cursor-pointer"
                        }`}
                        key={index}
                        onClick={
                          item.key === "action"
                            ? undefined
                            : handleFilter(item.key)
                        }
                      >
                        <span className="flex gap-1 items-center">
                          {filter.column === item.key && (
                            <span>
                              {filter.direction === "asc" ? (
                                <>
                                  <FaArrowUp />
                                </>
                              ) : (
                                <>
                                  <FaArrowDown />
                                </>
                              )}
                            </span>
                          )}
                          <span>{item.col}</span>
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loading || onSearchLoading ? (
                    <TableLoader colSpan={7} />
                  ) : receiptRecords.data.length > 0 ? (
                    receiptRecords.data.map((record: any, index: number) => (
                      <ReceiptDataList
                        key={index}
                        record={record}
                        setIsRefresh={setIsRefresh}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center text-gray-400">
                        {searchTerm
                          ? `No results for "${searchTerm}"`
                          : "No print records yet"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {!searchTerm && receiptRecords.data.length > 0 && (
                <Pagination
                  pagination={pagination}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                />
              )}
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-6">
                <i className="fas fa-bell text-accent mr-2" />
                <h3 className="text-xl font-semibold text-primarydark flex gap-1 items-center">
                 <FaHistory className="mr-1" /> <span>Recent Print Activity</span>
                </h3>
              </div>
              <div className="space-y-4">
                {loading ? (
                  <RecentActivityLoader />
                ) : receiptRecords.latestData?.length > 0 ? (
                  receiptRecords.latestData?.map(
                    (record: any, index: number) => (
                      <ReceiptLatestDataList key={index} record={record} />
                    )
                  )
                ) : (
                  <p className="text-gray-400 text-center">
                    No print activity yet
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
