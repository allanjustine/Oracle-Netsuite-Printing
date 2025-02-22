"use client";
import { PrintPageProps } from "@/types/types";

const Size2SalesOld: React.FC<PrintPageProps> = ({ data }) => {
  const internalIdColumnIndex = 0;
  const mainLineName = 1;
  const billingAddress = 2;
  const billingAddress1 = 3;
  const billingAddress2 = 4;
  const billingAddress3 = 5;
  const taxNumber = 6;
  const date = 7;
  const terms = 8;
  const item = 9;
  const quantity = 10;
  const units = 11;
  const units1 = 12;
  const itemRate = 13;
  const itemRate1 = 14;
  const amount = 15;
  const totalSales = 16;
  const amountTax = 17;
  const netTax = 18;
  const transactionTotal = 19;

  return (
    <div className="text-xs h-[510.2px] w-[767.3px] border">
      <div className="flex mt-[113px]">
        <p className="w-[514px] pl-[151.1px]">Sold to No data</p>
        <p className="w-[260.8px] pl-[109.6px]">{data[date]?.[7]}</p>
      </div>
      <div className="flex">
        <p className="w-[514px] pl-[151.1px]">Tin No data</p>
        <p className="w-[260.8px] pl-[109.6px]">Terms</p>
      </div>
      <div className="flex h-[29px]">
        <p className="w-[514px] pl-[151.1px]">Address</p>
        <p className="w-[260.8px] pl-[109.6px]">104</p>
      </div>
      <div className="flex">
        <p className="w-[514px] pl-[151.1px]">Business style</p>
        <p className="w-[260.8px] pl-[109.6px]"></p>
      </div>
      <div className="mx-[37.8px] mt-[26px] h-[64.3px] border">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 4).map((row, index) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[68px] h-[22.7px]">{row[10]}</td>
                <td className="w-[49.1px] h-[22.7px]">{row[11]}</td>
                <td
                  className={`w-[313.7px] h-[22.7px] ${
                    row[9]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[9]}
                </td>
                <td className="w-[158.7px] h-[22.7px]">{row[13]}</td>
                <td className="w-[109.6.2px] h-[22.7px]">{row[15]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-[37.8px] border h-[41.6px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px] text-center">
              <td className="w-[68px] h-[22.7px]"></td>
              <td className="w-[49.1px] h-[22.7px]"></td>
              <td className={`w-[313.7px] h-[22.7px]`}></td>
              <td className="w-[158.7px] h-[22.7px]"></td>
              <td className="w-[109.6px] h-[22.7px]">PHP100.00</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[68px] h-[22.7px]"></td>
              <td className="w-[49.1px] h-[22.7px]"></td>
              <td className={`w-[313.7px] h-[22.7px]`}></td>
              <td className="w-[158.7px] h-[22.7px]"></td>
              <td className="w-[109.6px] h-[22.7px]">PHP10,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[37.8px] h-[109.9px] border">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[22.7px] w-[196.5px]"></td>
              <td className="h-[22.7px] w-[124.7px]"></td>
              <td className="h-[22.7px] w-[90.7px]">PHP0.00</td>
              <td className="h-[22.7px] w-[170px]"></td>
              <td className="h-[22.7px] w-[109.6px] text-center">
                PHP142,857.14
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[22.7px] w-[196.5px]"></td>
              <td className="h-[22.7px] w-[124.7px]"></td>
              <td className="h-[22.7px] w-[90.7px]">PHP0.00</td>
              <td className="h-[22.7px] w-[170px]"></td>
              <td className="h-[22.7px] w-[109.6px] text-center">
                PHP142,857.14
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[22.7px] w-[196.5px]"></td>
              <td className="h-[22.7px] w-[124.7px]"></td>
              <td className="h-[22.7px] w-[90.7px]">PHP0.00</td>
              <td className="h-[22.7px] w-[170px]"></td>
              <td className="h-[22.7px] w-[109.6px] text-center">
                PHP142,857.14
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[22.7px] w-[196.5px]"></td>
              <td className="h-[22.7px] w-[124.7px]"></td>
              <td className="h-[22.7px] w-[90.7px]">PHP0.00</td>
              <td className="h-[22.7px] w-[170px]"></td>
              <td className="h-[22.7px] w-[109.6px] text-center">
                PHP142,857.14
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[22.7px]" colSpan={4}></td>
              <td className="h-[22.7px] w-[109.6px] text-center">
                PHP426,857.14
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Size2SalesOld;
