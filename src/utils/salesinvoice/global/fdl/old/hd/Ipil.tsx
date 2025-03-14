"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const Ipil = ({ data }: any) => {
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
    <div className="text-xs h-[745.32283465px] w-[589.60629921px]">
      <div className="flex h-[20.787401575px] mt-[111.1181102406px]">
        <p className="w-[374.17322835px] pl-[98.267716535px]">
          {data[1]?.[mainLineName]?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ") || <span className="opacity-0">No Data</span>}
        </p>
        <p className="w-[215.43307087px] pl-[56.692913386px]">
          {data[1]?.[date] || <span className="opacity-0">No Data</span>}
        </p>
      </div>
      <div className="flex h-[20.787401575px]">
        <p className="w-[374.17322835px] pl-[98.267716535px]">
           <span className="opacity-0">No Data</span>
        </p>
        <p className="w-[215.43307087px] pl-[56.692913386px]">
          {data[1]?.[terms] || <span className="opacity-0">No Data</span>}
        </p>
      </div>
      <div className="flex h-[20.787401575px]">
        <div className="w-[563.1496063px] pl-[98.267716535px]">
          <p className={`h-[20.787401575px] ${data[1]?.[billingAddress].length > 85 ? "text-xs" : ""}`}>{data[1]?.[billingAddress] || ""}</p>
        </div>
      </div>
      <div className="flex h-[20.787401575px]">
        <p className="w-[563.1496063px] pl-[132.28346457px]">
          {data[1]?.[businessStyle] || <span className="opacity-0">No Data</span>}
        </p>
      </div>
      <div className="mx-[30.236220472px] mt-[23.4330708664px] h-[309.16535433px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 17).map((row: any, index: number) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[69.165354331px]">{row[quantity]?.replace(/.0$/, "")}</td>
                <td className="w-[56.692913386px] h-[19.275590551px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[230.5511811px] h-[19.275590551px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[77.102362205px] h-[19.275590551px]">
                  {/* {FormattedNumber(row[unitPrice])} */}
                </td>
                <td className="w-[98.267716535px] h-[19.275590551px]">
                  {FormattedNumber(row[totalAmount])}
                </td>
              </tr>
            ))}
            <tr className="text-xs text-center">
              <td className="w-[74.24071991px]"></td>
              <td className="w-[53.831271091px] h-[19.275590551px]"></td>
              <td
                className={`w-[309.70528684px] h-[19.275590551px] ${
                  data[1]?.[serialNumber]?.length > 41 ? "text-[10px]" : ""
                }`}
              >
                {data[1]?.[serialNumber] && (
                  <>Engine #: {data[1]?.[serialNumber]}</>
                )}
              </td>
              <td className="w-[163.81552306px] h-[19.275590551px]"></td>
              <td className="w-[114.30371204px] h-[19.275590551px]"></td>
            </tr>
            <tr className="text-xs text-center">
              <td className="w-[74.24071991px]"></td>
              <td className="w-[53.831271091px] h-[19.275590551px]"></td>
              <td
                className={`w-[309.70528684px] h-[19.275590551px] ${
                  data[1]?.[chassisNumber]?.length > 41 ? "text-[10px]" : ""
                }`}
              >
                {data[1]?.[chassisNumber] && (
                  <>Chassis #: {data[1]?.[chassisNumber]}</>
                )}
              </td>
              <td className="w-[163.81552306px] h-[19.275590551px]"></td>
              <td className="w-[114.30371204px] h-[19.275590551px]"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[30.236220472px] h-[134.17322835px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[126.61417323px]"></td>
              <td className="h-[19.275590551px] w-[179.1496063px] pl-[11.338582677px]">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 16)}
              </td>
              <td className="h-[19.275590551px] w-[128.88188976px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 16)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[126.61417323px]"></td>
              <td className="h-[19.275590551px] w-[179.1496063px] pl-[11.338582677px]">
                {/* {FormattedSumTotal(data, rateInclusiveVat, 16)} VAT EXEMPT SALES */}
                0.00
              </td>
              <td className="h-[19.275590551px] w-[128.88188976px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 16)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[126.61417323px]"></td>
              <td className="h-[19.275590551px] w-[179.1496063px] pl-[11.338582677px]">
                {FormattedSumTotal(data, rateInclusiveVat, 16)}
              </td>
              <td className="h-[19.275590551px] w-[128.88188976px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 16)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[126.61417323px]"></td>
              <td className="h-[19.275590551px] w-[179.1496063px] pl-[11.338582677px]">
                {FormattedSumTotal(data, vatAmount, 16)}
              </td>
              <td className="h-[19.275590551px] w-[128.88188976px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 16)} LESS: SC/PWD DISCOUNT */}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[126.61417323px]"></td>
              <td className="h-[19.275590551px] w-[179.1496063px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[128.88188976px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {FormattedSumTotal(data, vatAmount2, 16)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[126.61417323px]"></td>
              <td className="h-[19.275590551px] w-[179.1496063px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[128.88188976px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {FormattedSumTotal(data, vatAmount3, 16)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[126.61417323px]"></td>
              <td className="h-[19.275590551px] w-[179.1496063px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[128.88188976px]"></td>
              <td className="h-[19.275590551px] w-[98.645669291px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 16)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[30.236220472px]">
        <div className="mt-[24.456692914px] ml-[332.976377952px]">
          <p className="text-xs text-center">
            {data[1]?.[cashier]?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ") || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ipil;
