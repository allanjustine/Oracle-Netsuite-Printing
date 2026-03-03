import api from "@/lib/axiosCall";
import { useEffect, useState } from "react";
import { printReceiptsData } from "../_constants/printReceiptsData";
import echo from "@/hooks/echo";

export default function useFetchPrintReceipts(isSearching?: boolean | string) {
  const [data, setData] = useState(printReceiptsData);
  const [loading, setLoading] = useState(true);

  const fetchPrintReceiptsData = async () => {
    try {
      const response = await api.get("/receipt-records");

      setData({
        latestData: response?.data?.datas?.latest_receipts,
        totalReceipts: response?.data?.datas?.total_receipts,
        todaysCount: response?.data?.datas?.todays_receipts_count,
        weeklyCount: response?.data?.datas?.weekly_receipts_count,
        monthlyCount: response?.data?.datas?.monthly_receipts_count,
        totalBranchPrintRecords:
          response?.data?.datas?.total_branch_print_records,
        todaysPercentage: Number(
          response?.data?.datas?.todays_percentage.replace(/,/g, ""),
        ),
        monthlyPercentage: Number(
          response?.data?.datas?.monthly_percentage.replace(/,/g, ""),
        ),
        weeklyPercentage: Number(
          response?.data?.datas?.weekly_percentage.replace(/,/g, ""),
        ),
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
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!echo || isSearching) return;

    echo.channel("print-channel").listen("ReceiptRecords", (e: any) => {
      fetchPrintReceiptsData();
    });

    return () => {
      echo.leave("print-channel");
    };
  }, [isSearching]);

  useEffect(() => {
    fetchPrintReceiptsData();
  }, []);

  return {
    data,
    loading,
    fetchPrintReceiptsData,
  };
}
