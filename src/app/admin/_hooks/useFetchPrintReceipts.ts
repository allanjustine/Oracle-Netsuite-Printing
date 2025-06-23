import api from "@/lib/axiosCall";
import { useEffect, useRef, useState } from "react";
import { printReceiptsData } from "../_constants/printReceiptsData";
import { filterData, paginationData } from "../_constants/paginationData";
import echo from "@/hooks/echo";

export default function useFetchPrintReceipts() {
  const [data, setData] = useState(printReceiptsData);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(paginationData);
  const [isNextPrevPage, setIsNextPrevPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filter, setFilter] = useState(filterData);
  const [perPage, setPerPage] = useState(20);
  const debounceRef = useRef<any>(null);
  const searchRef = useRef<any>(null);
  const pageRef = useRef<any>(null);
  const columnRef = useRef<any>(null);
  const directionRef = useRef<any>(null);
  const perPageRef = useRef<any>(null);

  useEffect(() => {
    pageRef.current = searchTerm ? 1 : pagination?.current_page;
    searchRef.current = searchTerm;
    columnRef.current = filter.column;
    directionRef.current = filter.direction;
    perPageRef.current = perPage;
  }, [
    pagination?.current_page,
    searchTerm,
    filter.column,
    filter.direction,
    perPage,
  ]);

  const fetchPrintReceiptsData = async () => {
    const payload = {
      page: pageRef.current,
      search: searchRef.current,
      column: columnRef.current,
      direction: directionRef.current,
      per_page: perPageRef.current,
    };

    try {
      const response = await api.get("/receipt-records", {
        params: {
          ...payload,
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
        overAllTotalAmountDue: response?.data?.datas?.over_all_total_amount_due,
        sumInvoice: response?.data?.datas?.sum_invoice,
        sumCustPay: response?.data?.datas?.sum_cust_pay,
        sumToday: response?.data?.datas?.todays_total_amount_due,
        mostPrintCountBranch: response?.data?.datas?.most_print_count_branch,
      });

      setPagination((prev: any) => ({
        ...prev,
        current_page: response?.data?.datas?.receipts?.current_page,
        last_page: response?.data?.datas?.receipts?.last_page,
        total: response?.data?.datas?.receipts?.total,
        per_page: response?.data?.datas?.receipts?.per_page,
        from: response?.data?.datas?.receipts?.from,
        to: response?.data?.datas?.receipts?.to,
      }));
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
      setIsNextPrevPage(false);
      setIsSearching(false);
      setPagination((pagination: any) => ({
        ...pagination,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    if (!echo) return;

    echo.channel("print-channel").listen("ReceiptRecords", (e: any) => {
      fetchPrintReceiptsData();
    });

    return () => {
      echo.leave("print-channel");
    };
  }, []);

  useEffect(() => {
    fetchPrintReceiptsData();
  }, [
    pagination?.current_page,
    filter.column,
    filter.direction,
    perPage,
    searchTerm,
  ]);

  const handlePrevPage = () => {
    if (pagination?.current_page === 1 || isNextPrevPage) {
      return;
    }
    setIsNextPrevPage(true);
    setPagination((prev: any) => ({
      ...prev,
      current_page: prev.current_page - 1,
    }));
  };

  const handleNextPage = () => {
    if (pagination?.current_page === pagination?.last_page || isNextPrevPage) {
      return;
    }
    setIsNextPrevPage(true);
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
    setFilter,
    setPerPage,
    filter,
    perPage,
    setIsSearching,
    handleFirstPage,
    handleLastPage,
    handleSearchTerm,
    setPagination,
    fetchPrintReceiptsData,
  };
}
