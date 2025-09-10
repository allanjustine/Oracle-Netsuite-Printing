"use client";
import { PrintPageProps } from "@/types/types";
import enyeFormat from "@/utils/enyeFormat";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";

const CashSalesPropertyVenturesCorporation = ({ data }: any) => {
  const CR_Date = 0;
  const CR_Name = 1;
  const CR_TIN = 2;
  const CR_Address = 3;
  const CR_BusinessStyle = 4;
  const CR_AmountInFigures = 5;
  const CR_AmountInWords = 6;
  const CR_Memo = 7;
  const CR_FormOfPayment = 8;
  const CR_PartnerName = 9;
  const CR_Reference = 10;

  return (
    <div className="text-xs h-[767.24409449px] w-[610.39370079px]">
      <div className="flex items-center h-[29.480314961px] mx-[37.795275591px] ml-[412.34645669px] mt-[144.999999996px]">
        <p className="w-[161.00787402px] ml-[7.5590551181px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="mt-[17.007874016px] mx-[37.795275591px] h-[73.700787402px] w-[534.80314961px]">
        <p className="w-[389.29133858px] flex items-center h-[24.566929134px] ml-[154.96062992px]">
          {enyeFormat(data[1]?.[CR_Name]) || (
            <span className="opacity-0">No data</span>
          )}
        </p>
        <p className="w-[389.29133858px] flex items-center h-[24.566929134px] ml-[154.96062992px]">
          {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
        </p>
        <p
          className={`${
            data[1]?.[CR_Address].length > 65 ? "text-[9px]" : ""
          } w-[389.29133858px] flex items-center h-[24.566929134px] ml-[154.96062992px]`}
        >
          {data[1]?.[CR_Address] || <span className="opacity-0">No Data</span>}
        </p>
      </div>
      <div className="mx-[37.795275591px] w-[533.29133858px] mt-[29.858267717px] h-[226.77165354px]">
        <table className="border-collapse">
          <tbody>
            {/* {data.slice(1, 13).map((row: any, index: number) => ( */}
            <tr className="text-xs text-center">
              <td
                className={`w-[268.72440945px] h-[18.897637795px] text-start ${
                  data[1]?.[CR_Memo]?.length > 41 ? "text-[10px]" : ""
                }`}
              >
                {data[1]?.[CR_Memo]}
              </td>
              <td className="w-[75.968503937px]">
                {/* {row[quantity]?.replace(/.0$/, "")} */}
              </td>
              <td className="w-[83.48976378px] h-[18.897637795px]">
                {/* {FormattedNumber(row[rateInclusiveVat]) || "0.00"} */}
              </td>
              <td className="w-[105.4488189px] h-[18.897637795px]">
                {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
                  <span className="opacity-0">No data</span>
                )}
              </td>
            </tr>
            {/* ))} */}
            {/* {data[1]?.[serialNumber] && (
              <tr className="text-xs text-center">
                <td
                  className={`w-[268.72440945px] h-[18.897637795px] text-start ${
                    data[1]?.[serialNumber]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[serialNumber] && data[1]?.[chassisNumber] ? (
                    <>Engine #: {data[1]?.[serialNumber]}</>
                  ) : (
                    <>Serial #: {data[1]?.[serialNumber]}</>
                  )}
                </td>
                <td className="w-[75.968503937px]"></td>
                <td className="w-[83.48976378px] h-[18.897637795px]"></td>
                <td className="w-[105.4488189px] h-[18.897637795px]"></td>
              </tr>
            )}
            {data[1]?.[chassisNumber] && (
              <tr className="text-xs text-center">
                <td
                  className={`w-[268.72440945px] h-[18.897637795px] text-start ${
                    data[1]?.[chassisNumber]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[chassisNumber] && (
                    <>Chassis #: {data[1]?.[chassisNumber]}</>
                  )}
                </td>
                <td className="w-[75.968503937px]"></td>
                <td className="w-[83.48976378px] h-[18.897637795px]"></td>
                <td className="w-[105.4488189px] h-[18.897637795px]"></td>
              </tr>
            )}
            {data[1]?.[conductionSticker] && (
              <tr className="text-xs text-center">
                <td
                  className={`w-[268.72440945px] h-[18.897637795px] text-start ${
                    data[1]?.[conductionSticker]?.length > 41
                      ? "text-[10px]"
                      : ""
                  }`}
                >
                  {data[1]?.[conductionSticker] && (
                    <>Conduction Sticker: {data[1]?.[conductionSticker]}</>
                  )}
                </td>
                <td className="w-[75.968503937px]"></td>
                <td className="w-[83.48976378px] h-[18.897637795px]"></td>
                <td className="w-[105.4488189px] h-[18.897637795px]"></td>
              </tr>
            )}
            {data[1]?.[color] && (
              <tr className="text-xs text-center">
                <td
                  className={`w-[268.72440945px] h-[18.897637795px] text-start ${
                    data[1]?.[color]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[color] && <>Color: {data[1]?.[color]}</>}
                </td>
                <td className="w-[75.968503937px]"></td>
                <td className="w-[83.48976378px] h-[18.897637795px]"></td>
                <td className="w-[105.4488189px] h-[18.897637795px]"></td>
              </tr>
            )} */}
          </tbody>
        </table>
      </div>
      <div className="mx-[37.795275591px] h-[132.28346457px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]">
                {/* {vatableSalesFn} */}
              </td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {/* {totalSalesVatInclusiveFn} */}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]">
                {/* {vatAmountFn} */}
              </td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {/* {lessVatFn} */}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]">
                0.00
              </td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {/* {amountNetOfVatFn} */}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]">
                0.00
              </td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center"></td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]"></td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {/* {addVatFn} */}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]"></td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {/* {lessWithHoldingTaxFn} */}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]"></td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {/* {totalAmountDueFn} */}
                {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
                  <span className="opacity-0">No data</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-[610.39370079px]">
        <div className="mt-[15.897637795px] ml-[192.75590551px] w-[154.96062992px]">
          <p className="text-xs text-center">
            {data[1]?.[CR_PartnerName] ||
              ""?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ") ||
              ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CashSalesPropertyVenturesCorporation;
