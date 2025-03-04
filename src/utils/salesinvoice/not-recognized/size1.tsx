"use client";
import { PrintPageProps } from "@/types/types";

const Size1Sales: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs h-[755.9px] w-[612.3px] border">
      <div className="flex mt-[158.762px]">
        <p className="pl-[423.3px]">{data[date]?.[7]}</p>
      </div>
      <div className="h-[75.5px] py-1 mt-[18.89px] flex flex-col space-y-2 border">
        <div className="flex">
          <p className="pl-[188.97px]">Test Name</p>
        </div>
        <div className="flex">
          <p className="pl-[188.97px]">Address</p>
        </div>
        <div className="flex">
          <p className="pl-[188.97px]">Business Address</p>
        </div>
      </div>
      <div className="mx-[34px] mt-[30.23px] h-[219.21px] border">
        <table className="border-collapse w-full h-auto">
          <tbody>
            {data.slice(1, 11).map((row, index) => (
              <tr key={index} className="text-[10px] text-center">
                <td
                  className={`w-[264.56px] h-[19px] ${
                    row[9]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[9]}
                </td>
                <td className="w-[75.59px] h-[19px]">{row[10]}</td>
                <td className="w-[83.1496px] h-[19px]">{row[13]}</td>
                <td className="w-[105.8267px] h-[19px]">{row[15]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-[34px] h-[139.84px]">
        <table className="border-collapse h-full w-full border">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[158.74px]"></td>
              <td className="h-[19px] w-[105.82px]">PHP0.00</td>
              <td className="h-[19px] w-[158.7396px]"></td>
              <td className="h-[19px] w-105.8267px]">PHP142,857.14</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[158.74px]"></td>
              <td className="h-[19px] w-[105.82px]">PHP0.00</td>
              <td className="h-[19px] w-[158.7396px]"></td>
              <td className="h-[19px] w-105.8267px]">17,142.86</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[158.74px]"></td>
              <td className="h-[19px] w-[105.82px]">PHP0.00</td>
              <td className="h-[19px] w-[158.7396px]"></td>
              <td className="h-[19px] w-105.8267px]"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[158.74px]"></td>
              <td className="h-[19px] w-[105.82px]">PHP17,142.86</td>
              <td className="h-[19px] w-[158.7396px]"></td>
              <td className="h-[19px] w-105.8267px]"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[158.74px]"></td>
              <td className="h-[19px] w-[105.82px]"></td>
              <td className="h-[19px] w-[158.7396px]"></td>
              <td className="h-[19px] w-105.8267px]">PHP160,000.00</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[158.74px]"></td>
              <td className="h-[19px] w-[105.82px]"></td>
              <td className="h-[19px] w-[158.7396px]"></td>
              <td className="h-[19px] w-105.8267px]"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19px] w-[158.74px]"></td>
              <td className="h-[19px] w-[105.82px]"></td>
              <td className="h-[19px] w-[158.7396px]"></td>
              <td className="h-[19px] w-105.8267px]">PHP160,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-[26.45669px] pl-[181.417px]">
        <span>Cashier Tokboki</span>
      </div>
    </div>
  );
};

export default Size1Sales;
