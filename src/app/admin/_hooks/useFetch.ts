import api from "@/lib/axiosCall";
import { useEffect, useRef, useState } from "react";
import { filterData, paginationData } from "../_constants/paginationData";
import echo from "@/hooks/echo";

export default function useFetchPrintReceiptRecords() {
  const [data, setData] = useState([]);
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

  const fetchPrintReceiptRecordsData = async () => {
    const payload = {
      page: pageRef.current,
      search: searchRef.current,
      column: columnRef.current,
      direction: directionRef.current,
      per_page: perPageRef.current,
    };

    try {
      const response = await api.get("/receipt-records-table", {
        params: {
          ...payload,
        },
      });

      setData(response?.data?.receipts?.data);

      setPagination((prev: any) => ({
        ...prev,
        current_page: response?.data?.receipts?.current_page,
        last_page: response?.data?.receipts?.last_page,
        total: response?.data?.receipts?.total,
        per_page: response?.data?.receipts?.per_page,
        from: response?.data?.receipts?.from,
        to: response?.data?.receipts?.to,
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
    if (!echo || searchTerm) return;

    echo.channel("print-channel").listen("ReceiptRecords", (e: any) => {
      fetchPrintReceiptRecordsData();
    });

    return () => {
      echo.leave("print-channel");
    };
  }, [searchTerm]);

  useEffect(() => {
    fetchPrintReceiptRecordsData();
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
    fetchPrintReceiptRecordsData,
  };
}
