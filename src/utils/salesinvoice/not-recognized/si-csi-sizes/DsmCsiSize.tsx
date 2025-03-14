"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const DsmCsiSize = ({ data }: any) => {
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
    <div className="text-xs h-[741.54330709px] w-[581.66929134px]">
      <div className="flex items-center h-[20.677165354px] mt-[97.5511522px]">
        <p className="w-[362.83464567px] pl-[86.929133858px]">
          {data[1]?.[mainLineName] || ""}
        </p>
        <p className="w-[214.67716535px] pl-[56.692913386px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex items-center h-[20.677165354px]">
        <p className="w-[362.83464567px] pl-[86.929133858px]">
        </p>
        <p className="w-[214.67716535px] pl-[56.692913386px]">
          {data[1]?.[terms] || ""}
        </p>
      </div>
      <div className="flex items-center h-[20.677165354px]">
          <p className={`pl-[86.929133858px] h-[20.677165354px] ${data[1]?.[billingAddress]?.length > 90 ? 'text-[9px]' : ''}`}>{data[1]?.[billingAddress] || ""}</p>
      </div>
      <div className="flex items-center h-[20.677165354px]">
        <p className="w-[362.83464567px] pl-[137.95275591px]">
          {data[1]?.[businessStyle] || ""}
        </p>
      </div>
      <div className="mx-[26.078740157px] mt-[23.763779528px] h-[315.59055118px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 17).map((row: any, index: number) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[71.811023622px]">{row[quantity]}</td>
                <td className="w-[62.362204724px] h-[19.275590551px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[230.92913386px] h-[19.275590551px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[79.748031496px] h-[19.275590551px]">
                  {/* {FormattedNumber(row[unitPrice])} */}
                </td>
                <td className="w-[102.38740157px] h-[19.275590551px]">
                  {FormattedNumber(row[rateInclusiveOfTax])}
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
      <div className="mx-[26.078740157px] h-[136.81889764px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]">
                {FormattedSumTotal(data, totalSalesVatExclusive2, 16)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatExclusive, 16)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]">
                {/* {FormattedSumTotal(data, rateInclusiveVat, 16)} VAT EXEMPT SALES */}
                0.00
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 16)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]">
                0.00
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 16)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]">
                {FormattedSumTotal(data, vatAmount, 16)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 16)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, vatAmount2, 16)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, vatAmount3, 16)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[175.37007874px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 16)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[26.078740157px]">
        <div className="mt-[18.897637795px] ml-[332.976377952px]">
          <p className="text-xs text-center">
            {data[1]?.[cashier] || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DsmCsiSize;
