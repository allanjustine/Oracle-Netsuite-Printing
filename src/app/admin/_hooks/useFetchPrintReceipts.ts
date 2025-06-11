import api from "@/lib/axiosCall";
import { useEffect, useRef, useState } from "react";
import { printReceiptsData } from "../_constants/printReceiptsData";
import { filterData, paginationData } from "../_constants/paginationData";
import echo from "@/hooks/echo";

export default function useFetchPrintReceipts() {
  const [data, setData] = useState(printReceiptsData);
  const [loading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [pagination, setPagination] = useState(paginationData);
  const [isNextPrevPage, setIsNextPrevPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [filter, setFilter] = useState(filterData);
  const [perPage, setPerPage] = useState(20);
  const debounceRef = useRef<any>(null);

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
      setPagination((pagination: any) => ({
        ...pagination,
        loading: true,
      }));
      try {
        const response = await api.get("/receipt-records", {
          params: {
            page: searchTerm ? 1 : pagination?.current_page,
            search: searchTerm,
            column: filter.column,
            direction: filter.direction,
            per_page: perPage,
          },
        });

        setData({
          data: response?.data?.datas?.receipts?.data,
          latestData: response?.data?.datas?.latest_receipts,
          totalReceipts: response?.data?.datas?.total_receipts,
          todaysCount: response?.data?.datas?.todays_receipts_count,
          weeklyCount: response?.data?.datas?.weekly_receipts_count,
          monthlyCount: response?.data?.datas?.monthly_receipts_count,
          totalBranchPrintRecords:
            response?.data?.datas?.total_branch_print_records,
          todaysPercentage: Number(
            response?.data?.datas?.todays_percentage.replace(/,/g, "")
          ),
          monthlyPercentage: Number(
            response?.data?.datas?.monthly_percentage.replace(/,/g, "")
          ),
          weeklyPercentage: Number(
            response?.data?.datas?.weekly_percentage.replace(/,/g, "")
          ),
          searchingIfExists: response?.data?.datas?.searching_if_exists,
          totalInvoice: response?.data?.datas?.total_invoice,
          totalCustPay: response?.data?.datas?.total_cust_pay,
          yesterdayCount: response?.data?.datas?.yesterdays_receipts_count,
          lastWeekCount: response?.data?.datas?.last_weekly_receipts_count,
          lastMonthCount: response?.data?.datas?.last_monthly_receipts_count,
          overAllTotalAmountDue:
            response?.data?.datas?.over_all_total_amount_due,
          sumInvoice: response?.data?.datas?.sum_invoice,
          sumCustPay: response?.data?.datas?.sum_cust_pay,
          sumToday: response?.data?.datas?.todays_total_amount_due,
          mostPrintCountBranch: response?.data?.datas?.most_print_count_branch,
        });

        setPagination({
          current_page: response?.data?.datas?.receipts?.current_page,
          last_page: response?.data?.datas?.receipts?.last_page,
          total: response?.data?.datas?.receipts?.total,
          per_page: response?.data?.datas?.receipts?.per_page,
          from: response?.data?.datas?.receipts?.from,
          to: response?.data?.datas?.receipts?.to,
          loading: false,
        });
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
        if (pagination?.current_page) setIsNextPrevPage(false);
        setDataLoaded(false);
        setIsSearching(false);
        setPagination((pagination: any) => ({
          ...pagination,
          loading: false,
        }));
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

  const handleFirstPage = () => {
    if (pagination?.current_page === 1 || isNextPrevPage) {
      return;
    }

    setPagination((prev: any) => ({
      ...prev,
      current_page: 1,
    }));
  };

  const handleLastPage = () => {
    if (pagination?.current_page === pagination?.last_page || isNextPrevPage) {
      return;
    }

    setPagination((prev: any) => ({
      ...prev,
      current_page: pagination?.last_page,
    }));
  };

  const handleSearchTerm = (e: any) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const { value } = e.target;

    debounceRef.current = setTimeout(() => {
      setIsSearching(true);
      setSearchTerm(value);
    }, 1000);
  };

  return {
    data,
    loading,
    handlePrevPage,
    handleNextPage,
    pagination,
    setSearchTerm,
    searchTerm,
    isSearching,
    setIsRefresh,
    setFilter,
    setPerPage,
    filter,
    perPage,
    setIsSearching,
    handleFirstPage,
    handleLastPage,
    handleSearchTerm,
    setPagination,
  };
}
