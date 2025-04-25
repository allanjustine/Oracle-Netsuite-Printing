"use client";

import GlobalLoader from "@/components/loaders/GlobalLoaders";
import Navbar from "@/components/navbar";
import { useAuth } from "@/context/authcontext";
import useFetchPrintReceipts from "../_hooks/useFetchPrintReceipts";
import { FaList } from "react-icons/fa";
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

export default function AdminDashboard() {
  const { isAdmin, isAuthenticated, loadingData, user } = useAuth();
  const {
    data: receiptRecords,
    loading,
    handleNextPage,
    handlePrevPage,
    setSearchTerm,
    searchTerm,
    pagination,
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
    "ID",
    "External Id",
    "Print Count",
    "Print By",
    "Created At",
    "Action",
  ];

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
            <div className="mb-2 flex w-full justify-end items-end">
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
                        className="p-3 text-xs uppercase text-primarylight text-left font-semibold"
                        key={index}
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="text-center">
                        <>Loading...</>
                      </td>
                    </tr>
                  ) : receiptRecords.data.length > 0 ? (
                    receiptRecords.data.map((record: any, index: number) => (
                      <ReceiptDataList key={index} record={record} />
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center text-gray-400">
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
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-6">
              <i className="fas fa-bell text-accent mr-2" />
              <h3 className="text-xl font-semibold text-primarydark">
                Recent Print Activity
              </h3>
            </div>
            <div className="space-y-4">
              {loading ? (
                <RecentActivityLoader />
              ) : receiptRecords.latestData?.length > 0 ? (
                receiptRecords.latestData?.map((record: any, index: number) => (
                  <ReceiptLatestDataList key={index} record={record} />
                ))
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
  );
}
