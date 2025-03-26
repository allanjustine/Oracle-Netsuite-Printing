"use client";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";

const Aurora = ({ data }: any) => {
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
    <div className="text-xs h-[789.92125984px] w-[600.94488189px] ml-[10px]">
      <div className="flex h-[15.874015748px] mt-[147.503937007px]">
        <p className="w-[396.8503937px] ml-[83.149606299px]">
          {data[1]?.[mainLineName]
            ?.replace(/Ã/g, "Ñ")
            .replace(/Ã‘/g, "Ñ")
            .replace(/Ã±/g, "ñ") || ""}
        </p>
        <p className="w-[222.99212598px] ml-[37.795275591px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[15.874015748px]">
        <p className="w-[396.8503937px] ml-[83.149606299px]">
          {data[1]?.[taxNumber] || <span className="opacity-0">No Data</span>}
        </p>
        <p className="w-[222.99212598px] ml-[37.795275591px]"></p>
      </div>
      <div className="w-[396.8503937px] flex flex-col h-[32.503937008px]">
        <p className="ml-[83.149606299px] h-[16.251968504px]">
          {data[1]?.[billingAddress].substring(0, 50) || ""}
        </p>
        <p className="ml-[83.149606299px] h-[16.251968504px]">
          {data[1]?.[billingAddress].substring(50) || ""}
        </p>
      </div>
      <div className="flex h-[15.874015748px]">
        <p className="w-[396.8503937px] ml-[113.38582677px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[222.99212598px] ml-[37.795275591px]"></p>
      </div>
      <div className="mx-[25.700787402px] mt-[27.590551181px] h-[291.02362205px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 16).map((row: any, index: any) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[52.913385827px]">
                  {row[quantity]?.replace(/.0$/, "")}
                </td>
                <td className="w-[46.11023622px] h-[21.165354331px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[276.28346457px] h-[21.165354331px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[71.811023622px] h-[21.165354331px]">
                  {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                </td>
                <td className="w-[93.732283465px] h-[21.165354331px]">
                  {FormattedNumber(row[quantity] * row[rateInclusiveVat]) ||
                    "0.00"}
                </td>
              </tr>
            ))}
            {data[1]?.[serialNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[52.913385827px]"></td>
                <td className="w-[46.11023622px] h-[21.165354331px]"></td>
                <td
                  className={`w-[276.28346457px] h-[21.165354331px] text-start ${
                    data[1]?.[serialNumber]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[serialNumber] && data[1]?.[chassisNumber] ? (
                    <>Engine #: {data[1]?.[serialNumber]}</>
                  ) : (
                    <>Serial #: {data[1]?.[serialNumber]}</>
                  )}
                </td>
                <td className="w-[71.811023622px] h-[21.165354331px]"></td>
                <td className="w-[93.732283465px] h-[21.165354331px]"></td>
              </tr>
            )}
            {data[1]?.[chassisNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[52.913385827px]"></td>
                <td className="w-[46.11023622px] h-[21.165354331px]"></td>
                <td
                  className={`w-[276.28346457px] h-[21.165354331px] text-start ${
                    data[1]?.[chassisNumber]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[chassisNumber] && (
                    <>Chassis #: {data[1]?.[chassisNumber]}</>
                  )}
                </td>
                <td className="w-[71.811023622px] h-[21.165354331px]"></td>
                <td className="w-[93.732283465px] h-[21.165354331px]"></td>
              </tr>
            )}
            {data?.[1]?.[conductionSticker] && (
              <tr className="text-xs text-center">
                <td className="w-[52.913385827px]"></td>
                <td className="w-[46.11023622px] h-[21.165354331px]"></td>
                <td
                  className={`w-[276.28346457px] h-[21.165354331px] text-start ${
                    data[1]?.[conductionSticker]?.length > 20
                      ? "text-[10px]"
                      : ""
                  }`}
                >
                  {data[1]?.[conductionSticker] && (
                    <>Conduction Sticker: {data[1]?.[conductionSticker]}</>
                  )}
                </td>
                <td className="w-[71.811023622px] h-[21.165354331px]"></td>
                <td className="w-[93.732283465px] h-[21.165354331px]"></td>
              </tr>
            )}
            {data?.[1]?.[color] && (
              <tr className="text-xs text-center">
                <td className="w-[52.913385827px]"></td>
                <td className="w-[46.11023622px] h-[21.165354331px]"></td>
                <td
                  className={`w-[276.28346457px] h-[21.165354331px] text-start ${
                    data[1]?.[color]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[color] && <>Color: {data[1]?.[color]}</>}
                </td>
                <td className="w-[71.811023622px] h-[21.165354331px]"></td>
                <td className="w-[93.732283465px] h-[21.165354331px]"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-[25.700787402px] h-[145.51181102px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[209.00787402px] pl-3">
                {vatableSalesFn}
              </td>
              <td className="h-[21.165354331px] w-[136.81889764px]"></td>
              <td className="h-[21.165354331px] w-[94.11023622px] text-center"></td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[209.00787402px] pl-3">
                0.00
              </td>
              <td className="h-[21.165354331px] w-[136.81889764px]"></td>
              <td className="h-[21.165354331px] w-[94.11023622px] text-center">
                {totalSalesVatInclusiveFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[209.00787402px] pl-3">
                0.00
              </td>
              <td className="h-[21.165354331px] w-[136.81889764px]"></td>
              <td className="h-[21.165354331px] w-[94.11023622px] text-center">
                {lessVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[209.00787402px] pl-3">
                {vatAmountFn}
              </td>
              <td className="h-[21.165354331px] w-[136.81889764px]"></td>
              <td className="h-[21.165354331px] w-[94.11023622px] text-center">
                {amountNetOfVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[209.00787402px] pl-3"></td>
              <td className="h-[21.165354331px] w-[136.81889764px]"></td>
              <td className="h-[21.165354331px] w-[94.11023622px] text-center">
                {lessWithHoldingTaxFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[209.00787402px] pl-3"></td>
              <td className="h-[21.165354331px] w-[136.81889764px]"></td>
              <td className="h-[21.165354331px] w-[94.11023622px] text-center">
                {amountDueFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[209.00787402px] pl-3"></td>
              <td className="h-[21.165354331px] w-[136.81889764px]"></td>
              <td className="h-[21.165354331px] w-[94.11023622px] text-center">
                {addVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[209.00787402px] pl-3"></td>
              <td className="h-[21.165354331px] w-[136.81889764px]"></td>
              <td className="h-[21.165354331px] w-[94.11023622px] text-center">
                {totalAmountDueFn}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[32.125984252px] mt-[26.338582677px]">
        <div className="w-[188.97637795px] ml-[359.05511811px]">
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

export default Aurora;
