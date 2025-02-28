"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const DsmCarmenCebu: React.FC<PrintPageProps> = ({ data }) => {
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
  const tinNumber = 24;
  const cashier = 25;
  const unitPrice = 26;
  const businessAddress = 28;

  return (
    <div className="text-xs h-[714.33070866] w-[548.03149606px]">
      <div className="flex h-[29.782677165px] mt-[126.61417323px]">
        <p className="w-[147.4015748px] ml-[375.68503937px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[29.782677165px] mt-[15.118110236px]">
        <p className="w-[491.33858268px] ml-[375.68503937px]">
          {data[1]?.[mainLineName] || <span className="opacity-0">No data</span>}
        </p>
        <p className="w-[147.4015748px] ml-[375.68503937px]">
          {data[1]?.[tinNumber] || <span className="opacity-0">No data</span>}
        </p>
        <p className="w-[147.4015748px] ml-[375.68503937px]">
          {data[1]?.[businessAddress] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="mx-[30.236220472px] mt-[7.1811023622px] h-[236.22047244px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 6).map((row, index) => (
              <tr key={index} className="text-[10px] text-center">
                 <td
                  className={`w-[249.4488189] h-[211.65354331px] ${
                    row[articles]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[71.05511811px]">{row[quantity]}</td>
                <td className="w-[77.480314961px] h-[211.65354331px]">
                  {FormattedNumber(row[unitPrice])}
                </td>
                <td className="w-[96.377952756px] h-[211.65354331px]">
                  {FormattedNumber(row[totalAmount])}
                </td>
              </tr>
            ))}
            {/* <tr className="text-[10px] text-center">
              <td className="w-[74.24071991px]"></td>
              <td className="w-[53.831271091px] h-[19.275590551px]"></td>
              <td
                className={`w-[309.70528684px] h-[19.275590551px] ${
                  data[1]?.[serialNumber]?.length > 41 ? "text-[7px]" : ""
                }`}
              >
                {data[1]?.[serialNumber]}
              </td>
              <td className="w-[163.81552306px] h-[19.275590551px]"></td>
              <td className="w-[114.30371204px] h-[19.275590551px]"></td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[74.24071991px]"></td>
              <td className="w-[53.831271091px] h-[19.275590551px]"></td>
              <td
                className={`w-[309.70528684px] h-[19.275590551px] ${
                  data[1]?.[chassisNumber]?.length > 41 ? "text-[7px]" : ""
                }`}
              >
                {data[1]?.[chassisNumber]}
              </td>
              <td className="w-[163.81552306px] h-[19.275590551px]"></td>
              <td className="w-[114.30371204px] h-[19.275590551px]"></td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <div className="mx-[37.795275591px] h-[37.795275591px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px] text-center">
              <td className="w-[75.590551181px]"></td>
              <td className="w-[75.590551181px] h-[18.141732283px]"></td>
              <td className={`w-[230.5511811px] h-[18.141732283px]`}></td>
              <td className="w-[164.40944882px] h-[18.141732283px]"></td>
              <td className="w-[137.95275591px] h-[18.141732283px]">
                {FormattedSumTotal(data, totalSalesVatInclusive, 5)}
              </td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[75.590551181px]"></td>
              <td className="w-[75.590551181px] h-[18.141732283px]"></td>
              <td className={`w-[230.5511811px] h-[18.141732283px]`}></td>
              <td className="w-[164.40944882px] h-[18.141732283px]"></td>
              <td className="w-[137.95275591px] h-[18.141732283px]">
                {FormattedSumTotal(data, vatAmount2, 5)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[37.795275591px] h-[89.196850394px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[18.141732283px] w-[289.13385827px]"></td>
              <td className="h-[18.141732283px] w-[117.16535433px]">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 5)}
              </td>
              <td className="h-[18.141732283px] w-[162.51968504px]"></td>
              <td className="h-[18.141732283px] w-[137.95275591px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 5)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[18.141732283px] w-[289.13385827px]"></td>
              <td className="h-[18.141732283px] w-[117.16535433px]">
                {/* {FormattedSumTotal(data, rateInclusiveVat, 5)} VAT EXEMPT SALES */}
                0.00
              </td>
              <td className="h-[18.141732283px] w-[162.51968504px]"></td>
              <td className="h-[18.141732283px] w-[137.95275591px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 5)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[18.141732283px] w-[289.13385827px]"></td>
              <td className="h-[18.141732283px] w-[117.16535433px]">
                {FormattedSumTotal(data, rateInclusiveVat, 5)}
              </td>
              <td className="h-[18.141732283px] w-[162.51968504px]"></td>
              <td className="h-[18.141732283px] w-[137.95275591px] text-center">
                {FormattedSumTotal(data, vatAmount2, 5)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[18.141732283px] w-[289.13385827px]"></td>
              <td className="h-[18.141732283px] w-[117.16535433px]">
                {FormattedSumTotal(data, vatAmount, 5)}
              </td>
              <td className="h-[18.141732283px] w-[162.51968504px]"></td>
              <td className="h-[18.141732283px] w-[137.95275591px] text-center">
                {FormattedSumTotal(data, vatAmount3, 5)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[18.141732283px] w-[289.13385827px]"></td>
              <td className="h-[18.141732283px] w-[117.16535433px]"></td>
              <td className="h-[18.141732283px] w-[162.51968504px]"></td>
              <td className="h-[18.141732283px] w-[137.95275591px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 5)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[32.125984252px]">
        <div className="mt-[30.236220472px] ml-[480px]">
          <p className="text-[10px] text-center">
            {data[1]?.[cashier] || ""}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DsmCarmenCebu;
