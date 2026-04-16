import GlobalLoader from "@/components/loaders/GlobalLoaders";
import Navbar from "@/components/navbar";
import { useAuth } from "@/context/authcontext";
import useFetchPrintReceipts from "../_hooks/useFetchPrintReceipts";
import { FaAngleUp, FaHistory, FaList, FaSortNumericUp } from "react-icons/fa";
import NotLogin from "./NotLogin";
import Unauthorized from "./Unauthorized";
import { FaMagnifyingGlass, FaRepeat } from "react-icons/fa6";
import { useEffect, useState } from "react";
import CardsLoader from "./loaders/cards-loader";
import RecentActivityLoader from "./loaders/recent-activity-loader";
import ReceiptLatestDataList from "./ReceiptLatestDataList";
import CardsCountList from "./CardsCountsList";
import MostPrintCountBranch from "./MostPrintCountBranch";
import ReceiptDataTable from "./ReceiptDataTable";
import useFetchPrintReceiptRecords from "../_hooks/useFetch";
import ReprintRequested from "./reprint-requested";

export default function Dashboard() {
  const { isAdmin, isAuthenticated, loadingData } = useAuth();
  const {
    data: receiptRecords,
    loading,
    searchTerm,
    pagination,
    isSearching,
    setFilter,
    filter,
    setPerPage,
    handleSearchTerm,
    setPagination,
    fetchPrintReceiptRecordsData,
  } = useFetchPrintReceiptRecords();
  const { data: receiptDashboards, loading: loadingDashboardData } =
    useFetchPrintReceipts(searchTerm);
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
        className={`p-2 rounded-full fixed bg-blue-400 hover:bg-blue-500 text-white transition-all duration-300 z-50 ease-in-out ${
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
          {loadingDashboardData ? (
            <CardsLoader />
          ) : (
            <CardsCountList receiptRecords={receiptDashboards} />
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-6">
          <div className="lg:col-span-3 bg-white rounded-lg shadow p-6 h-fit">
            <div className="flex flex-col gap-10">
              <ReprintRequested />
              <div className="flex justfy-between items-center">
                <div className="flex items-center w-full">
                  <FaList className="text-accent mr-2" />
                  <h3 className="text-xl font-semibold text-primarydark">
                    Recent Print Jobs
                  </h3>
                </div>
                <div className="mb-2 flex w-full flex-col md:justify-end items-end md:flex-row space-y-2">
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
              </div>
              <div className="overflow-x-auto">
                <ReceiptDataTable
                  receiptRecords={receiptRecords}
                  isSearching={isSearching}
                  pagination={pagination}
                  loading={loading}
                  fetchPrintReceiptsData={fetchPrintReceiptRecordsData}
                  filter={filter}
                  setFilter={setFilter}
                  setPerPage={setPerPage}
                  setPagination={setPagination}
                  searchTerm={searchTerm}
                />
              </div>
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
                  {loadingDashboardData ? (
                    <RecentActivityLoader />
                  ) : receiptDashboards.latestData?.length > 0 ? (
                    receiptDashboards.latestData?.map(
                      (record: any, index: number) => (
                        <ReceiptLatestDataList key={index} record={record} />
                      ),
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
                  {loadingDashboardData ? (
                    <RecentActivityLoader />
                  ) : receiptDashboards.mostPrintCountBranch?.length > 0 ? (
                    receiptDashboards.mostPrintCountBranch?.map(
                      (record: any, index: number) => (
                        <MostPrintCountBranch
                          key={index}
                          record={record}
                          index={index}
                        />
                      ),
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
