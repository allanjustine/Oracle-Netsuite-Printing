"use client";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const HDTanza = ({ data }: any) => {
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
    <div className="text-xs h-[767.24409449px] w-[608.50393701px]">
      <div className="w-full h-[30.236220472px] mt-[167.62992126px]">
        <p className="w-[158.74015748px] pl-[415.7480315px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="w-full h-[19.409448819px] mt-[11.677165354px]">
        <p className="w-[377.95275591px] pl-[188.97637795px]">
          {data[1]?.[mainLineName]?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ") || ""}
        </p>
      </div>
      <div className="w-full h-[19.409448819px] mt-[2.677165354px]">
        <p className="w-[377.95275591px] pl-[188.97637795px]">
          
          <span className="opacity-0">No Data</span>
        </p>
      </div>
      <div className="w-[608.50393701px] h-[19.409448819px] mt-[2.677165354px]">
        <p className="w-[434.64566929px] ml-[188.97637795px]">
          {data[1]?.[billingAddress] || ""}
        </p>
      </div>
      <div className="mx-[34.015748031px] mt-[30.236220472px] h-[226.77165354px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 13).map((row: any, index: number) => (
              <tr key={index} className="text-xs text-center">
                <td
                  className={`w-[268.34645669px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[75.5905511811px] h-[19.275590551px]">
                  {row[quantity]?.replace(/.0$/, "")}
                </td>
                <td className="w-[83.149606299px] h-[19.275590551px]">
                  {/* {FormattedNumber(row[unitPrice])} */}
                </td>
                <td className="w-[105.82677165px] h-[19.275590551px]">
                  {FormattedNumber(row[totalAmount])}
                </td>
              </tr>
            ))}
            <tr className="text-xs text-center">
              <td
                className={`w-[268.34645669px] ${
                  data[1]?.[serialNumber]?.length > 41 ? "text-[10px]" : ""
                }`}
              >
                {data[1]?.[serialNumber] && data[1]?.[chassisNumber] ? (
                    <>Engine #: {data[1]?.[serialNumber]}</>
                  ) : (
                    <>Serial #: {data[1]?.[serialNumber]}</>
                  )}
              </td>
              <td className="w-[75.5905511811px] h-[19.275590551px]"></td>
              <td className="w-[83.149606299px] h-[19.275590551px]"></td>
              <td className="w-[105.82677165px] h-[19.275590551px]"></td>
            </tr>
            <tr className="text-xs text-center">
              <td
                className={`w-[268.34645669px] ${
                  data[1]?.[chassisNumber]?.length > 41 ? "text-[10px]" : ""
                }`}
              >
                {data[1]?.[chassisNumber] && (
                  <>Chassis #: {data[1]?.[chassisNumber]}</>
                )}
              </td>
              <td className="w-[75.5905511811px] h-[19.275590551px]"></td>
              <td className="w-[83.149606299px] h-[19.275590551px]"></td>
              <td className="w-[105.82677165px] h-[19.275590551px]"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[34.393700787px] h-[126.99212598px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 16)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 16)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]">
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
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]">
                {FormattedSumTotal(data, rateInclusiveVat, 16)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 16)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]">
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
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, vatAmount2, 16)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {/* {FormattedSumTotal(data, vatAmount3, 16)} */}
                0.00
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 16)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[34.393700787px]">
        <div className="mt-[15.456692914px] ml-[7.5px] w-[340.15748031px]">
          <p className="text-xs text-center">{data[1]?.[cashier]?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ") || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default HDTanza;
