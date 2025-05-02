import api from "@/lib/axiosCall";
import { useEffect, useState } from "react";
import { printReceiptsData } from "../_constants/printReceiptsData";
import { filterData, paginationData } from "../_constants/paginationData";
import echo from "@/hooks/echo";

export default function useFetchPrintReceipts() {
  const [data, setData] = useState(printReceiptsData);
  const [loading, setLoading] = useState(true);
  const [onSearchLoading, setOnSearchLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [pagination, setPagination] = useState(paginationData);
  const [isNextPrevPage, setIsNextPrevPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);
  const [filter, setFilter] = useState(filterData);
  const [perPage, setPerPage] = useState(20);

  useEffect(() => {
    if (!echo) return;

    echo.channel("print-channel").listen("ReceiptRecords", (e: any) => {
      setDataLoaded(e.data);
    });

    return () => {
      echo.leave("print-channel");
    };
  }, []);

  useEffect(() => {
    const fetchPrintReceiptsData = async () => {
      if (pagination?.current_page) setIsNextPrevPage(true);
      if (searchTerm) setOnSearchLoading(true);
      try {
        const response = await api.get(
          `/receipt-records?page=${
            searchTerm ? 1 : pagination?.current_page
          }&search=${searchTerm}${
            filter.column &&
            filter.direction &&
            `&column=${filter.column}&direction=${filter.direction}`
          }${perPage && `&per_page=${perPage}`}`
        );

        if (response.status === 200) {
          setData({
            data: response?.data?.receipts?.data,
            latestData: response?.data?.latest_receipts,
            totalReceipts: response?.data?.total_receipts,
            todaysCount: response?.data?.todays_receipts_count,
            weeklyCount: response?.data?.weekly_receipts_count,
            monthlyCount: response?.data?.monthly_receipts_count,
            totalBranchPrintRecords: response?.data?.total_branch_print_records,
            todaysPercentage: Number(response?.data?.todays_percentage),
            monthlyPercentage: Number(response?.data?.monthly_percentage),
            weeklyPercentage: Number(response?.data?.weekly_percentage),
            searchingIfExists: response?.data?.searching_if_exists,
            totalInvoice: response?.data?.total_invoice,
            totalCustPay: response?.data?.total_cust_pay,
          });

          setPagination({
            current_page: response?.data?.receipts?.current_page,
            last_page: response?.data?.receipts?.last_page,
            total: response?.data?.receipts?.total,
            per_page: response?.data?.receipts?.per_page,
            from: response?.data?.receipts?.from,
            to: response?.data?.receipts?.to,
          });
        }
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
        setOnSearchLoading(false);
        if (pagination?.current_page) setIsNextPrevPage(false);
        setDataLoaded(false);
      }
    };

    fetchPrintReceiptsData();
  }, [
    dataLoaded,
    pagination?.current_page,
    searchTerm,
    isRefresh,
    filter.column,
    filter.direction,
    perPage,
  ]);

  const handlePrevPage = () => {
    if (pagination?.current_page === 1 || isNextPrevPage) {
      return;
    }

    setPagination((prev: any) => ({
      ...prev,
      current_page: prev.current_page - 1,
    }));
  };

  const handleNextPage = () => {
    if (pagination?.current_page === pagination?.last_page || isNextPrevPage) {
      return;
    }

    setPagination((prev: any) => ({
      ...prev,
      current_page: prev.current_page + 1,
    }));
  };

  return {
    data,
    loading,
    handlePrevPage,
    handleNextPage,
    pagination,
    setSearchTerm,
    searchTerm,
    onSearchLoading,
    setIsRefresh,
    setFilter,
    setPerPage,
    filter,
    perPage,
  };
}
