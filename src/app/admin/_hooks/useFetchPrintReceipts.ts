import api from "@/lib/axiosCall";
import { useEffect, useState } from "react";
import { printReceiptsData } from "../_constants/printReceiptsData";
import echo from "@/hooks/echo";

export default function useFetchPrintReceipts(isSearching?: boolean | string) {
  const [data, setData] = useState<any>(printReceiptsData);
  const [loading, setLoading] = useState(true);

  const formattedNumber = (number: number) => {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const stringToNumber = (string: string) => {
    return Number(string.replace(/,/g, ""));
  };

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
      const newReceipt = e?.receipt_item;
      const isInvoice = e?.receipt?.external_id?.startsWith("INV");

      setData((prev: any) => ({
        ...prev,
        latestData: [newReceipt.receipt, ...prev.latestData].slice(0, 10),
        totalReceipts: prev.totalReceipts + 1,
        todaysCount: prev.todaysCount + 1,
        weeklyCount: prev.weeklyCount + 1,
        monthlyCount: prev.monthlyCount + 1,
        totalBranchPrintRecords: newReceipt.is_exists_branch
          ? prev.totalBranchPrintRecords
          : prev.totalBranchPrintRecords + 1,
        totalInvoice: isInvoice ? prev.totalInvoice + 1 : prev.totalInvoice,
        totalCustPay: isInvoice ? prev.totalCustPay : prev.totalCustPay + 1,
        overAllTotalAmountDue: formattedNumber(
          stringToNumber(prev.overAllTotalAmountDue) +
            newReceipt.receipt.total_amount_due,
        ),
        sumInvoice: isInvoice
          ? formattedNumber(
              stringToNumber(prev.sumInvoice) +
                newReceipt.receipt.total_amount_due,
            )
          : prev.sumInvoice,
        sumCustPay: isInvoice
          ? prev.sumCustPay
          : formattedNumber(
              stringToNumber(prev.sumCustPay) +
                newReceipt.receipt.total_amount_due,
            ),
        sumToday: prev.sumToday + newReceipt.receipt.total_amount_due,
        todaysPercentage: formattedNumber(
          prev.yesterdayCount === 0
            ? 100
            : ((prev.todaysCount + 1 - prev.yesterdayCount) /
                prev.yesterdayCount) *
                100,
        ),
        weeklyPercentage: formattedNumber(
          prev.lastWeekCount === 0
            ? 100
            : ((prev.weeklyCount + 1 - prev.lastWeekCount) /
                prev.lastWeekCount) *
                100,
        ),
        monthlyPercentage: formattedNumber(
          prev.lastMonthCount === 0
            ? 100
            : ((prev.monthlyCount + 1 - prev.lastMonthCount) /
                prev.lastMonthCount) *
                100,
        ),
      }));
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
