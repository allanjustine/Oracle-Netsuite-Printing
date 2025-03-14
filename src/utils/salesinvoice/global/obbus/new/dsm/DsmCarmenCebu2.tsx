"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const DsmCarmenCebu2 = ({ data }: any) => {
  const mainLineName = 0;
  const date = 1;
  const taxNumber = 2;
  const terms = 3;
  const billingAddress = 4;
  const oscaPwdIdNo = 5;
  const businessStyle = 6;
  const cardHolderSignatures = 7;
  const quantity = 8;
  const unitOfMeasurement = 9;
  const articles = 10;
  const rateInclusiveVat = 11;
  const totalAmount = 12;
  const totalSalesVatExclusive = 13;
  const vatAmount = 14;
  const totalSalesVatInclusive = 15;
  const vatAmount2 = 16;
  const totalSalesVatExclusive2 = 17;
  const totalSalesVatExclusive3 = 18;
  const vatAmount3 = 19;
  const totalSalesVatInclusive2 = 20;
  const serialNumber = 21;
  const chassisNumber = 22;
  const conductionSticker = 23;
  const rateInclusiveOfTax = 24;
  const color = 25;
  const cashier = 26;

  return (
    <div className="text-xs h-[714.33070866px] w-[549.92125984px]">
      <div className="flex items-center h-[28.346456693px] mx-[26.456692913px] ml-[301.91338583px] mt-[130.37795276px]">
        <p className="w-[230.5511811px] ml-[83.905511811px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="mt-[15.874015748px] mx-[28.346456693px] h-[68.409448819px] w-[493.22834646px]">
        <p className="w-[359.43307087px] flex items-center h-[22.8031496px] ml-[143.62204724px]">
          {data[1]?.[mainLineName] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
        <p className="w-[359.43307087px] flex items-center h-[22.8031496px] ml-[143.62204724px]">
           <span className="opacity-0">No Data</span>
        </p>
        <p
          className={`${
            data[1]?.[billingAddress].length > 45 ? "text-[9px]" : ""
          } w-[359.43307087px] flex items-center h-[22.8031496px] ml-[143.62204724px]`}
        >
          {data[1]?.[billingAddress] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
      </div>
      <div className="mx-[28.346456693px] w-[491.33858268px] mt-[30.236220472px] h-[211.65354331px]">
        <table className="border-collapse">
          <tbody>
            {data.slice(1, 13).map((row: any, index: number) => (
              <tr key={index} className="text-xs text-center">
                <td
                  className={`w-[249.4488189px] h-[18.141732283px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[71.05511811px]">{row[quantity]}</td>
                <td className="w-[77.480314961px] h-[18.141732283px]">
                  {/* {FormattedNumber(row[unitPrice])} */}
                </td>
                <td className="w-[96.377952756px] h-[18.141732283px]">
                  {FormattedNumber(row[totalAmount])}
                </td>
              </tr>
            ))}
            <tr className="text-xs text-center">
              <td
                className={`w-[249.4488189px] h-[18.141732283px] ${
                  data[1]?.[serialNumber]?.length > 41 ? "text-[10px]" : ""
                }`}
              >
                {data[1]?.[serialNumber] && (
                  <>Engine #: {data[1]?.[serialNumber]}</>
                )}
              </td>
              <td className="w-[71.05511811px]"></td>
              <td className="w-[77.480314961px] h-[18.141732283px]"></td>
              <td className="w-[96.377952756px] h-[18.141732283px]"></td>
            </tr>
            <tr className="text-xs text-center">
              <td
                className={`w-[249.4488189px] h-[18.141732283px] ${
                  data[1]?.[chassisNumber]?.length > 41 ? "text-[10px]" : ""
                }`}
              >
                {data[1]?.[chassisNumber] && (
                  <>Chassis #: {data[1]?.[chassisNumber]}</>
                )}
              </td>
              <td className="w-[71.05511811px]"></td>
              <td className="w-[77.480314961px] h-[18.141732283px]"></td>
              <td className="w-[96.377952756px] h-[18.141732283px]"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[28.346456693px] h-[124.72440945px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 12)}
              </td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 12)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]">
                {FormattedSumTotal(data, vatAmount, 12)}
              </td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 12)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]">
                {FormattedSumTotal(data, rateInclusiveVat, 12)}
              </td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 12)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]">
                {/* {FormattedSumTotal(data, rateInclusiveVat, 12)} VAT EXEMPT SALES */}
                0.00
              </td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 12)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]"></td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {FormattedSumTotal(data, vatAmount2, 12)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]"></td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {/* {FormattedSumTotal(data, rateInclusiveVat, 12)} LESS WITHHOLDING TAX */}
                0.00
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]"></td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 12)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-[548.03149606px]">
        <div className="mt-[15.897637795px] ml-[183.30708661px] w-[142.86614173px]">
          <p className="text-xs text-center">
            {data[1]?.[cashier] || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DsmCarmenCebu2;
