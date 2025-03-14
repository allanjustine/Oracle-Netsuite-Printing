"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const DAP1Size: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-sm h-[506.45669291px] w-[767.24409449px]">
      <div className="flex h-[17.007874016px] mt-[119.34645669px]">
        <p className="w-[528.66141732px] pl-[147.4015748px]">
          {data[1]?.[mainLineName]?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ") || ""}
        </p>
        <p className="w-[284.50393701px] pl-[127.16535433px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[17.007874016px]">
        <p className="w-[528.66141732px] pl-[147.4015748px]"></p>
        <p className="w-[284.50393701px] pl-[117.16535433px]">
          {data[1]?.[terms] || ""}
        </p>
      </div>
      <div className="flex h-[34.015748032]">
        <p className="w-[528.66141732px] pl-[147.4015748px]">
          {data[1]?.[billingAddress] || ""}
        </p>
        <p className="w-[284.50393701px] pl-[117.16535433px]">
          {data[1]?.[oscaPwdIdNo] || ""}
        </p>
      </div>
      <div className="flex h-[17.007874016px]">
        <p className="w-[528.66141732px] pl-[147.4015748px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[284.50393701px] pl-[117.16535433px]">
          {data[1]?.[cardHolderSignatures] || ""}
        </p>
      </div>
      <div className="mx-[37.795275591px] mt-[26.456692913px] h-[64.251968504px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 4).map((row, index) => (
              <tr key={index} className="text-sm text-center">
                <td className="w-[74.24071991px]">{row[quantity]?.replace(/.0$/, "")}</td>
                <td className="w-[53.831271091px] h-[19.275590551px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[309.70528684px] h-[19.275590551px] text-start ${
                    row[articles]?.length > 41 ? "text-xs" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[163.81552306px] h-[19.275590551px]">
                  {/* {FormattedNumber(row[unitPrice])} */}
                </td>
                <td className="w-[114.30371204px] h-[19.275590551px]">
                  {FormattedNumber(row[rateInclusiveOfTax])}
                </td>
              </tr>
            ))}
            {data[1]?.[serialNumber] && (
              <tr className="text-sm text-center">
                <td className="w-[74.24071991px]"></td>
                <td className="w-[53.831271091px] h-[19.275590551px]"></td>
                <td
                  className={`w-[309.70528684px] h-[19.275590551px] text-start ${
                    data[1]?.[serialNumber]?.length > 25 ? "text-xs" : ""
                  }`}
                >
                  {data[1]?.[serialNumber] && data[1]?.[chassisNumber] ? (
                    <>Engine #: {data[1]?.[serialNumber]}</>
                  ) : (
                    <>Serial #: {data[1]?.[serialNumber]}</>
                  )}
                </td>
                <td className="w-[163.81552306px] h-[19.275590551px]"></td>
                <td className="w-[114.30371204px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data[1]?.[chassisNumber] && (
              <tr className="text-sm text-center">
                <td className="w-[74.24071991px]"></td>
                <td className="w-[53.831271091px] h-[19.275590551px]"></td>
                <td
                  className={`w-[309.70528684px] h-[19.275590551px] text-start ${
                    data[1]?.[chassisNumber]?.length > 25 ? "text-xs" : ""
                  }`}
                >
                  {data[1]?.[chassisNumber] && (
                    <>Chassis #: {data[1]?.[chassisNumber]}</>
                  )}
                </td>
                <td className="w-[163.81552306px] h-[19.275590551px]"></td>
                <td className="w-[114.30371204px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data?.[1]?.[conductionSticker] && (
              <tr className="text-sm text-center">
                <td className="w-[74.24071991px]"></td>
                <td className="w-[53.831271091px] h-[19.275590551px]"></td>
                <td
                  className={`w-[309.70528684px] h-[19.275590551px] text-start ${
                    data[1]?.[conductionSticker]?.length > 25
                      ? "text-xs"
                      : ""
                  }`}
                >
                  {data[1]?.[conductionSticker] && (
                    <>Conduction Sticker: {data[1]?.[conductionSticker]}</>
                  )}
                </td>
                <td className="w-[163.81552306px] h-[19.275590551px]"></td>
                <td className="w-[114.30371204px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data?.[1]?.[color] && (
              <tr className="text-sm text-center">
                <td className="w-[74.24071991px]"></td>
                <td className="w-[53.831271091px] h-[19.275590551px]"></td>
                <td
                  className={`w-[309.70528684px] h-[19.275590551px] text-start ${
                    data[1]?.[color]?.length > 25 ? "text-xs" : ""
                  }`}
                >
                  {data[1]?.[color] && <>Color: {data[1]?.[color]}</>}
                </td>
                <td className="w-[163.81552306px] h-[19.275590551px]"></td>
                <td className="w-[114.30371204px] h-[19.275590551px]"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-[37.795275591px] h-[41.952755906px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-sm text-center">
              <td className="w-[74.24071991px]"></td>
              <td className="w-[53.831271091px] h-[19.275590551px]"></td>
              <td className={`w-[309.70528684px] h-[19.275590551px]`}></td>
              <td className="w-[163.81552306px] h-[19.275590551px]"></td>
              <td className="w-[114.30371204px] h-[19.275590551px]">
                {FormattedSumTotal(data, totalSalesVatInclusive, 3)}
              </td>
            </tr>
            <tr className="text-sm text-center">
              <td className="w-[74.24071991px]"></td>
              <td className="w-[53.831271091px] h-[19.275590551px]"></td>
              <td className={`w-[309.70528684px] h-[19.275590551px]`}></td>
              <td className="w-[163.81552306px] h-[19.275590551px]"></td>
              <td className="w-[114.30371204px] h-[19.275590551px]">
                {FormattedSumTotal(data, vatAmount2, 3)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[37.795275591px] h-[97px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-sm">
              <td className="h-[19.275590551px] w-[336.62632171px]"></td>
              <td className="h-[19.275590551px] w-[101.83127109px] pl-5">
                {FormattedSumTotal(data, totalSalesVatExclusive2, 3)}
              </td>
              <td className="h-[19.275590551px] w-[163.81552306px]"></td>
              <td className="h-[19.275590551px] w-[114.30371204px] text-center">
                {FormattedSumTotal(data, totalSalesVatExclusive2, 3)}
              </td>
            </tr>
            <tr className="text-sm">
              <td className="h-[19.275590551px] w-[336.62632171px]"></td>
              <td className="h-[19.275590551px] w-[101.83127109px] pl-5">
                {/* {FormattedSumTotal(data, rateInclusiveVat, 3)} VAT EXEMPT SALES */}
                0.00
              </td>
              <td className="h-[19.275590551px] w-[163.81552306px]"></td>
              <td className="h-[19.275590551px] w-[114.30371204px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 3)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="h-[19.275590551px] w-[336.62632171px]"></td>
              <td className="h-[19.275590551px] w-[101.83127109px] pl-5">
                0.00
              </td>
              <td className="h-[19.275590551px] w-[163.81552306px]"></td>
              <td className="h-[19.275590551px] w-[114.30371204px] text-center">
                {FormattedSumTotal(data, totalSalesVatExclusive, 3)}
              </td>
            </tr>
            <tr className="text-sm">
              <td className="h-[19.275590551px] w-[336.62632171px]"></td>
              <td className="h-[19.275590551px] w-[101.83127109px] pl-5">
                {FormattedSumTotal(data, vatAmount, 3)}
              </td>
              <td className="h-[19.275590551px] w-[163.81552306px]"></td>
              <td className="h-[19.275590551px] w-[114.30371204px] text-center">
                {FormattedSumTotal(data, vatAmount3, 3)}
              </td>
            </tr>
            <tr className="text-sm">
              <td className="h-[19.275590551px] w-[336.62632171px]"></td>
              <td className="h-[19.275590551px] w-[101.83127109px]"></td>
              <td className="h-[19.275590551px] w-[163.81552306px]"></td>
              <td className="h-[19.275590551px] w-[114.30371204px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 3)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[37.795275591px]">
        <div className="mt-[18px] ml-[392.31496063px]">
          <p className="text-sm text-center">{data[1]?.[cashier]?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ") || ""}</p>
        </div>
      </div>
    </div>
  );
};
export default DAP1Size;
