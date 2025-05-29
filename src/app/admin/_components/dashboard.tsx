import GlobalLoader from "@/components/loaders/GlobalLoaders";
import Navbar from "@/components/navbar";
import { useAuth } from "@/context/authcontext";
import useFetchPrintReceipts from "../_hooks/useFetchPrintReceipts";
import {
  FaAngleUp,
  FaArrowDown,
  FaArrowUp,
  FaHistory,
  FaList,
  FaSortNumericUp,
} from "react-icons/fa";
import NotLogin from "./NotLogin";
import Unauthorized from "./Unauthorized";
import { FaMagnifyingGlass, FaRepeat } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Pagination from "./Pagination";
import CardsLoader from "./loaders/cards-loader";
import RecentActivityLoader from "./loaders/recent-activity-loader";
import ReceiptDataList from "./ReceiptDataList";
import ReceiptLatestDataList from "./ReceiptLatestDataList";
import CardsCountList from "./CardsCountsList";
import TableLoader from "./loaders/table-loader";
import MostPrintCountBranch from "./MostPrintCountBranch";

export default function Dashboard() {
  const { isAdmin, isAuthenticated, loadingData } = useAuth();
  const {
    data: receiptRecords,
    loading,
    handleNextPage,
    handlePrevPage,
    handleFirstPage,
    handleLastPage,
    setSearchTerm,
    searchTerm,
    pagination,
    isSearching,
    setIsRefresh,
    setFilter,
    perPage,
    filter,
    setPerPage,
    setIsSearching,
  } = useFetchPrintReceipts();
  const debounceRef = useRef<any>(null);
  const [isBackToTop, setIsBackToTop] = useState(false);
  const [isReverse, setIsReverse] = useState(false);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setTimeout(() => {
        setIsClick(false);
      }, 100);
    };

    window.addEventListener("mouseup", handleClick);

    return () => {
      window.removeEventListener("mouseup", handleClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsBackToTop(true);
      } else {
        setIsBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loadingData) return <GlobalLoader />;

  if (!isAuthenticated) return <NotLogin />;

  if (!isAdmin) return <Unauthorized />;

  const handleSearchTerm = (e: any) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const { value } = e.target;
      setSearchTerm(value);
      if (value) {
        setIsSearching(true);
      }
    }, 1000);
  };

  const receiptRecordsTableHead = [
    { col: "ID", key: "id" },
    { col: "External Id", key: "external_id" },
    { col: "Print Count", key: "print_count" },
    { col: "Print By", key: "print_by" },
    { col: "Can Re-Print", key: "re_print" },
    { col: "Total Amount", key: "total_amount_due" },
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

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReverseCard = () => {
    setIsReverse(!isReverse);
  };

  const handleClick = () => {
    setIsClick(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleBackToTop}
        className={`p-2 rounded-full fixed bg-blue-400 hover:bg-blue-500 text-white transition-all duration-300 ease-in-out ${
          isBackToTop
            ? "bottom-4 right-6 opacity-1"
            : "-bottom-10 opacity-0 right-1"
        }`}
      >
        <FaAngleUp className="text-md" />
      </button>
      <div className="flex-1">
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
            <div className="mb-2 flex w-full flex-col md:justify-between items-end md:flex-row space-y-2">
              <div className="relative border border-gray-300 rounded-lg pl-10">
                <span className="absolute left-2 top-1.5 text-gray-400">
                  Show:
                </span>
                <select
                  onChange={handlePerPage}
                  value={perPage}
                  className="px-3 py-2 rounded-lg focus:outline-none ring-0"
                >
                  <option value="20">20 per page</option>
                  <option value="40">40 per page</option>
                  <option value="50">50 per page</option>
                  <option value="70">70 per page</option>
                  <option value="80">80 per page</option>
                  <option value="100">100 per page</option>
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
                  {loading || isSearching ? (
                    <TableLoader colSpan={8} />
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
                  handleFirstPage={handleFirstPage}
                  handleLastPage={handleLastPage}
                />
              )}
            </div>
          </div>
          <div className="rounded-lg">
            <button
              type="button"
              onMouseDown={handleClick}
              onClick={handleReverseCard}
              className="bg-gray-200 hover:bg-gray-300 w-full p-2 rounded-md flex justify-center mb-2"
            >
              <FaRepeat
                className={`transition-all duration-300 ease-in-out ${
                  isClick ? "-rotate-45" : "rotate-90"
                }`}
              />
            </button>
            <div
              className={`flex transition-all duration-300 ease-in-out ${
                isReverse ? "flex-col-reverse" : "flex-col"
              }
              ${isClick ? "scale-0" : "scale-100"}`}
            >
              <div className="bg-white rounded-lg shadow p-6 mb-5">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-semibold text-primarydark flex gap-1 items-center">
                    <FaHistory className="mr-1" />{" "}
                    <span>Recent Print Activity</span>
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
              <div className="bg-white rounded-lg shadow p-6 mb-5">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-semibold text-primarydark flex gap-1 items-center">
                    <FaSortNumericUp className="mr-1" />{" "}
                    <span>Most Print Count</span>
                  </h3>
                </div>
                <div className="space-y-4">
                  {loading ? (
                    <RecentActivityLoader />
                  ) : receiptRecords.mostPrintCountBranch?.length > 0 ? (
                    receiptRecords.mostPrintCountBranch?.map(
                      (record: any, index: number) => (
                        <MostPrintCountBranch
                          key={index}
                          record={record}
                          index={index}
                        />
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
    </>
  );
}
