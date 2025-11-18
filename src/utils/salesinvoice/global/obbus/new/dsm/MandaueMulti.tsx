"use client";
import { PrintPageProps } from "@/types/types";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";

const MandaueMulti = ({ data }: any) => {
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
  const refNumber = 27;
  const lessWithHoldingTax = 28;

  // Vatable Sales
  const vatableSalesFn = FormattedSumTotalMinusLessVat(
    FormattedSumTotal(data, rateInclusiveVat, 16, quantity),
    FormattedSumTotalLessVat(data, rateInclusiveVat, 16, quantity)
  );

  // Total Sales Vat Inclusive
  const totalSalesVatInclusiveFn = FormattedSumTotal(
    data,
    rateInclusiveVat,
    16,
    quantity
  );

  // Less Vat
  const lessVatFn = FormattedSumTotalLessVat(
    data,
    rateInclusiveVat,
    16,
    quantity
  );

  // Amount Net Of Vat
  const amountNetOfVatFn = FormattedSumTotalMinusLessVat(
    FormattedSumTotal(data, rateInclusiveVat, 16, quantity),
    FormattedSumTotalLessVat(data, rateInclusiveVat, 16, quantity)
  );

  // Vat Amount
  const vatAmountFn = FormattedSumTotalLessVat(
    data,
    rateInclusiveVat,
    16,
    quantity
  );

  // Less With Holding Tax
  const lessWithHoldingTaxFn = FormattedLessWithHoldingTax(
    data,
    lessWithHoldingTax,
    16
  );

  // Amount Due
  const amountDueFn = FormattedAmountDue(
    FormattedSumTotalMinusLessVat(
      FormattedSumTotal(data, rateInclusiveVat, 16, quantity),
      FormattedSumTotalLessVat(data, rateInclusiveVat, 16, quantity)
    ),
    FormattedLessWithHoldingTax(data, lessWithHoldingTax, 16)
  );

  // Add Vat
  const addVatFn = FormattedSumTotalLessVat(
    data,
    rateInclusiveVat,
    16,
    quantity
  );

  // Total Amount Due
  const totalAmountDueFn = FormattedTotalAmountDue(
    FormattedAmountDue(
      FormattedSumTotalMinusLessVat(
        FormattedSumTotal(data, rateInclusiveVat, 16, quantity),
        FormattedSumTotalLessVat(data, rateInclusiveVat, 16, quantity)
      ),
      FormattedLessWithHoldingTax(data, lessWithHoldingTax, 16)
    ),
    FormattedSumTotalLessVat(data, rateInclusiveVat, 16, quantity)
  );

  return (
    <div className="text-xs h-[714.33070866px] w-[549.92125984px]">
      <div className="flex items-center h-[28.346456693px] mx-[26.456692913px] ml-[301.91338583px] mt-[130.37795276px]">
        <p className="w-[230.5511811px] ml-[83.905511811px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="mt-[15.874015748px] mx-[28.346456693px] h-[68.409448819px] w-[493.22834646px]">
        <p className="w-[359.43307087px] flex items-center h-[22.8031496px] ml-[143.62204724px]">
          {data[1]?.[mainLineName]
            ?.replace(/Ã/g, "Ñ")
            .replace(/Ã‘/g, "Ñ")
            .replace(/Ã±/g, "ñ") || <span className="opacity-0">No Data</span>}
        </p>
        <p className="w-[359.43307087px] flex items-center h-[22.8031496px] ml-[143.62204724px]">
          {data[1]?.[taxNumber] || <span className="opacity-0">No Data</span>}
        </p>
        <p
          className={`${
            data[1]?.[billingAddress]?.length > 45 ? "text-[9px]" : ""
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
                <td className="w-[71.05511811px]">
                  {row[quantity]?.replace(/.0$/, "")}
                </td>
                <td className="w-[77.480314961px] h-[18.141732283px]">
                  {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                </td>
                <td className="w-[96.377952756px] h-[18.141732283px]">
                  {FormattedNumber(row[quantity] * row[rateInclusiveVat]) ||
                    "0.00"}
                </td>
              </tr>
            ))}
            {data[1]?.[serialNumber] && (
              <tr className="text-xs text-center">
                <td
                  className={`w-[249.4488189px] h-[18.141732283px] text-start ${
                    data[1]?.[serialNumber]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[serialNumber] && data[1]?.[chassisNumber] ? (
                    <>Engine #: {data[1]?.[serialNumber]}</>
                  ) : (
                    <>Serial #: {data[1]?.[serialNumber]}</>
                  )}
                </td>
                <td className="w-[71.05511811px]"></td>
                <td className="w-[77.480314961px] h-[18.141732283px]"></td>
                <td className="w-[96.377952756px] h-[18.141732283px]"></td>
              </tr>
            )}
            {data[1]?.[chassisNumber] && (
              <tr className="text-xs text-center">
                <td
                  className={`w-[249.4488189px] h-[18.141732283px] text-start ${
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
            )}
            {data[1]?.[conductionSticker] && (
              <tr className="text-xs text-center">
                <td
                  className={`w-[249.4488189px] h-[18.141732283px] text-start ${
                    data[1]?.[conductionSticker]?.length > 41
                      ? "text-[10px]"
                      : ""
                  }`}
                >
                  {data[1]?.[conductionSticker] && (
                    <>Conduction Sticker: {data[1]?.[conductionSticker]}</>
                  )}
                </td>
                <td className="w-[71.05511811px]"></td>
                <td className="w-[77.480314961px] h-[18.141732283px]"></td>
                <td className="w-[96.377952756px] h-[18.141732283px]"></td>
              </tr>
            )}
            {data[1]?.[color] && (
              <tr className="text-xs text-center">
                <td
                  className={`w-[249.4488189px] h-[18.141732283px] text-start ${
                    data[1]?.[color]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[color] && <>Color: {data[1]?.[color]}</>}
                </td>
                <td className="w-[71.05511811px]"></td>
                <td className="w-[77.480314961px] h-[18.141732283px]"></td>
                <td className="w-[96.377952756px] h-[18.141732283px]"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-[28.346456693px] h-[124.72440945px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]">
                {vatableSalesFn}
              </td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {totalSalesVatInclusiveFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]">
                {vatAmountFn}
              </td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {lessVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]">
                0.00
              </td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {amountNetOfVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]">
                0.00
              </td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center"></td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]"></td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {addVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]"></td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {lessWithHoldingTaxFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[151.18110236px]"></td>
              <td className="h-[18.141732283px] w-[98.267716535px] pl-[11.338582677px]"></td>
              <td className="h-[18.141732283px] w-[147.4015748px]"></td>
              <td className="h-[18.141732283px] w-[96.377952756px] text-center">
                {totalSalesVatInclusiveFn}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-[548.03149606px]">
        <div className="mt-[15.897637795px] ml-[183.30708661px] w-[142.86614173px]">
          <p className="text-xs text-center">
            {data[1]?.[cashier]
              ?.replace(/Ã/g, "Ñ")
              .replace(/Ã‘/g, "Ñ")
              .replace(/Ã±/g, "ñ") || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MandaueMulti;
