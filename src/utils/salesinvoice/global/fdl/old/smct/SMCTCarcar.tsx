"use client";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";

const SMCTCarcar = ({ data }: any) => {
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
    <div className="text-xs h-[782.74015748px] w-[597.16535433px]">
      <div className="flex h-[19.409448819px] mt-[109.38582677px]">
        <p className={`w-[370.39370079px] pl-[86.929133858px] ${data[1]?.[mainLineName]?.length > 28 ? "text-[9px]" : ""}`}>
          {data[1]?.[mainLineName]
            ?.replace(/Ã/g, "Ñ")
            .replace(/Ã‘/g, "Ñ")
            .replace(/Ã±/g, "ñ") || ""}
        </p>
        <p className="w-[207.87401575px] pl-[52.913385827px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[19.409448819px]">
        <p className="w-[370.39370079px] pl-[86.929133858px]">
          {data[1]?.[taxNumber] || <span className="opacity-0">No Data</span>}
        </p>
        <p className="w-[207.87401575px] pl-[52.913385827px]">
          {data[1]?.[terms] || "CASH"}
        </p>
      </div>
      <div className="flex h-[38.818897638px]">
        <div className="w-[370.39370079px] pl-[86.929133858px]">
          <p className="h-[19.409448819px]">
            {data[1]?.[billingAddress].substring(0, 48) || ""}
          </p>
          <p className="h-[19.409448819px]">
            {data[1]?.[billingAddress].substring(48) || ""}
          </p>
        </div>
        <p className="w-[207.87401575px] pl-[124.72440945px]">
          {data[1]?.[oscaPwdIdNo] || ""}
        </p>
      </div>
      <div className="flex h-[19.409448819px]">
        <p className="w-[370.39370079px] pl-[124.72440945px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[207.87401575px] pl-[94.488188976px]">
          {data[1]?.[cardHolderSignatures] || ""}
        </p>
      </div>
      <div className="mx-[26.834645669px] mt-[22.456692913px] h-[313.7007874px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 17).map((row: any, index: number) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[68.409448819px]">
                  {row[quantity]?.replace(/.0$/, "")}
                </td>
                <td className="w-[56.31496063px] h-[19.653543307px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[228.66141732px] h-[19.653543307px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[77.480314961px] h-[19.653543307px] text-center">
                  {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                </td>
                <td className="w-[97.88976378px] h-[19.653543307px] text-center">
                  {FormattedNumber(row[quantity] * row[rateInclusiveVat]) ||
                    "0.00"}
                </td>
              </tr>
            ))}
            {data[1]?.[serialNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[68.409448819px]"></td>
                <td className="w-[56.31496063px] h-[19.653543307px]"></td>
                <td
                  className={`w-[228.66141732px] h-[19.653543307px] text-start ${
                    data[1]?.[serialNumber]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[serialNumber] && data[1]?.[chassisNumber] ? (
                    <>Engine #: {data[1]?.[serialNumber]}</>
                  ) : (
                    <>Serial #: {data[1]?.[serialNumber]}</>
                  )}
                </td>
                <td className="w-[77.480314961px] h-[19.653543307px]"></td>
                <td className="w-[97.88976378px] h-[19.653543307px]"></td>
              </tr>
            )}
            {data[1]?.[chassisNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[68.409448819px]"></td>
                <td className="w-[56.31496063px] h-[19.653543307px]"></td>
                <td
                  className={`w-[228.66141732px] h-[19.653543307px] text-start ${
                    data[1]?.[chassisNumber]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[chassisNumber] && (
                    <>Chassis #: {data[1]?.[chassisNumber]}</>
                  )}
                </td>
                <td className="w-[77.480314961px] h-[19.653543307px]"></td>
                <td className="w-[97.88976378px] h-[19.653543307px]"></td>
              </tr>
            )}
            {data?.[1]?.[conductionSticker] && (
              <tr className="text-xs text-center">
                <td className="w-[68.409448819px]"></td>
                <td className="w-[56.31496063px] h-[19.653543307px]"></td>
                <td
                  className={`w-[228.66141732px] h-[19.653543307px] text-start ${
                    data[1]?.[conductionSticker]?.length > 20
                      ? "text-[10px]"
                      : ""
                  }`}
                >
                  {data[1]?.[conductionSticker] && (
                    <>Conduction Sticker: {data[1]?.[conductionSticker]}</>
                  )}
                </td>
                <td className="w-[77.480314961px] h-[19.653543307px]"></td>
                <td className="w-[97.88976378px] h-[19.653543307px]"></td>
              </tr>
            )}
            {data?.[1]?.[color] && (
              <tr className="text-xs text-center">
                <td className="w-[68.409448819px]"></td>
                <td className="w-[56.31496063px] h-[19.653543307px]"></td>
                <td
                  className={`w-[228.66141732px] h-[19.653543307px] text-start ${
                    data[1]?.[color]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[color] && <>Color: {data[1]?.[color]}</>}
                </td>
                <td className="w-[77.480314961px] h-[19.653543307px]"></td>
                <td className="w-[97.88976378px] h-[19.653543307px]"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-[26.834645669px] h-[136.44094488px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[19.653543307px] w-[124.72440945px]"></td>
              <td className="h-[19.653543307px] w-[177.63779528px] pl-[11.338582677px]">
                {/* Vatable Sales */}
                {vatableSalesFn}
              </td>
              <td className="h-[19.653543307px] w-[128.50393701px]"></td>
              <td className="h-[19.653543307px] w-[97.88976378px] text-center">
                {/* Total Sales (VAT Inclusive) */}
                {totalSalesVatInclusiveFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.653543307px] w-[124.72440945px]"></td>
              <td className="h-[19.653543307px] w-[177.63779528px] pl-[11.338582677px]">
                {/* VAT-Exempt Sales */}
                0.00
              </td>
              <td className="h-[19.653543307px] w-[128.50393701px]"></td>
              <td className="h-[19.653543307px] w-[97.88976378px] text-center">
                {/* Less: VAT */}
                {lessVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.653543307px] w-[124.72440945px]"></td>
              <td className="h-[19.653543307px] w-[177.63779528px] pl-[11.338582677px]">
                {/* Zero Rated Sales */}
                0.00
              </td>
              <td className="h-[19.653543307px] w-[128.50393701px]"></td>
              <td className="h-[19.653543307px] w-[97.88976378px] text-center">
                {/* Amount: Net Of Vat */}
                {amountNetOfVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.653543307px] w-[124.72440945px]"></td>
              <td className="h-[19.653543307px] w-[177.63779528px] pl-[11.338582677px]">
                {/* VAT Amount */}
                {vatAmountFn}
              </td>
              <td className="h-[19.653543307px] w-[128.50393701px]"></td>
              <td className="h-[19.653543307px] w-[97.88976378px] text-center"></td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.653543307px] w-[124.72440945px]"></td>
              <td className="h-[19.653543307px] w-[177.63779528px] pl-[11.338582677px]"></td>
              <td className="h-[19.653543307px] w-[128.50393701px]"></td>
              <td className="h-[19.653543307px] w-[97.88976378px] text-center">
                {/* Amount Due */}
                {amountDueFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.653543307px] w-[124.72440945px]"></td>
              <td className="h-[19.653543307px] w-[177.63779528px] pl-[11.338582677px]"></td>
              <td className="h-[19.653543307px] w-[128.50393701px]"></td>
              <td className="h-[19.653543307px] w-[97.88976378px] text-center">
                {/* Add: VAT */}
                {addVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.653543307px] w-[124.72440945px]"></td>
              <td className="h-[19.653543307px] w-[177.63779528px] pl-[11.338582677px]"></td>
              <td className="h-[19.653543307px] w-[128.50393701px]"></td>
              <td className="h-[19.653543307px] w-[97.88976378px] text-center">
                {/* TOTAL AMOUNT DUE */}
                {totalAmountDueFn}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[26.834645669px]">
        <div className="mt-[24.015748031px] ml-[332.976377952px]">
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

export default SMCTCarcar;
