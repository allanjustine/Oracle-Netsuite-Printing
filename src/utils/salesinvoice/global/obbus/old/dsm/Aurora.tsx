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
    <div className="text-xs h-[806.92913386px] w-[612.28346457px]">
      <div className="flex h-[15.874015748px] mt-[132.16535433px]">
        <p className={`w-[404.40944882px] ml-[86.929133858px] ${data[1]?.[mainLineName]?.length > 28 ? "text-[10px]" : ""}`}>
          {data[1]?.[mainLineName]
            ?.replace(/Ã/g, "Ñ")
            .replace(/Ã‘/g, "Ñ")
            .replace(/Ã±/g, "ñ") || ""}
        </p>
        <p className="w-[207.87401575px] ml-[30.236220472px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[15.874015748px]">
        <p className="w-[404.40944882px] ml-[86.929133858px]">
          {data[1]?.[taxNumber] || <span className="opacity-0">No Data</span>}
        </p>
        <p className="w-[207.87401575px] ml-[30.236220472px]"></p>
      </div>
      <div className="w-[404.40944882px] flex flex-col h-[32.503937008px]">
        <p className="ml-[86.929133858px] h-[16.251968504px]">
          {data[1]?.[billingAddress]?.substring(0, 50) || ""}
        </p>
        <p className="ml-[37.795275591px] h-[16.251968504px]">
          {data[1]?.[billingAddress]?.substring(50) || ""}
        </p>
      </div>
      <div className="flex h-[15.874015748px]">
        <p className="w-[404.40944882px] ml-[113.38582677px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[207.87401575px] ml-[30.236220472px]"></p>
      </div>
      <div className="mx-[25.700787402px] mt-[27.590551181px] h-[292.91338583px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 16).map((row: any, index: any) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[55.937007874px]">
                  {row[quantity]?.replace(/.0$/, "")}
                </td>
                <td className="w-[45.354330709px] h-[21.165354331px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[279.68503937px] h-[21.165354331px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[69.921259843px] h-[21.165354331px]">
                  {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                </td>
                <td className="w-[94.488188976px] h-[21.165354331px]">
                  {FormattedNumber(row[quantity] * row[rateInclusiveVat]) ||
                    "0.00"}
                </td>
              </tr>
            ))}
            {data[1]?.[serialNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[55.937007874px]"></td>
                <td className="w-[45.354330709px] h-[21.165354331px]"></td>
                <td
                  className={`w-[279.68503937px] h-[21.165354331px] text-start ${
                    data[1]?.[serialNumber]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[serialNumber] && data[1]?.[chassisNumber] ? (
                    <>Engine #: {data[1]?.[serialNumber]}</>
                  ) : (
                    <>Serial #: {data[1]?.[serialNumber]}</>
                  )}
                </td>
                <td className="w-[69.921259843px] h-[21.165354331px]"></td>
                <td className="w-[94.488188976px] h-[21.165354331px]"></td>
              </tr>
            )}
            {data[1]?.[chassisNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[55.937007874px]"></td>
                <td className="w-[45.354330709px] h-[21.165354331px]"></td>
                <td
                  className={`w-[279.68503937px] h-[21.165354331px] text-start ${
                    data[1]?.[chassisNumber]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[chassisNumber] && (
                    <>Chassis #: {data[1]?.[chassisNumber]}</>
                  )}
                </td>
                <td className="w-[69.921259843px] h-[21.165354331px]"></td>
                <td className="w-[94.488188976px] h-[21.165354331px]"></td>
              </tr>
            )}
            {data?.[1]?.[conductionSticker] && (
              <tr className="text-xs text-center">
                <td className="w-[55.937007874px]"></td>
                <td className="w-[45.354330709px] h-[21.165354331px]"></td>
                <td
                  className={`w-[279.68503937px] h-[21.165354331px] text-start ${
                    data[1]?.[conductionSticker]?.length > 20
                      ? "text-[10px]"
                      : ""
                  }`}
                >
                  {data[1]?.[conductionSticker] && (
                    <>Conduction Sticker: {data[1]?.[conductionSticker]}</>
                  )}
                </td>
                <td className="w-[69.921259843px] h-[21.165354331px]"></td>
                <td className="w-[94.488188976px] h-[21.165354331px]"></td>
              </tr>
            )}
            {data?.[1]?.[color] && (
              <tr className="text-xs text-center">
                <td className="w-[55.937007874px]"></td>
                <td className="w-[45.354330709px] h-[21.165354331px]"></td>
                <td
                  className={`w-[279.68503937px] h-[21.165354331px] text-start ${
                    data[1]?.[color]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[color] && <>Color: {data[1]?.[color]}</>}
                </td>
                <td className="w-[69.921259843px] h-[21.165354331px]"></td>
                <td className="w-[94.488188976px] h-[21.165354331px]"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-[25.700787402px] h-[168.18897638px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[211.65354331px] pl-3">
                {vatableSalesFn}
              </td>
              <td className="h-[21.165354331px] w-[136.44094488px]"></td>
              <td className="h-[21.165354331px] w-[94.488188976px] text-center"></td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[211.65354331px] pl-3">
                0.00
              </td>
              <td className="h-[21.165354331px] w-[136.44094488px]"></td>
              <td className="h-[21.165354331px] w-[94.488188976px] text-center">
                {totalSalesVatInclusiveFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[211.65354331px] pl-3">
                0.00
              </td>
              <td className="h-[21.165354331px] w-[136.44094488px]"></td>
              <td className="h-[21.165354331px] w-[94.488188976px] text-center">
                {lessVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[211.65354331px] pl-3">
                {vatAmountFn}
              </td>
              <td className="h-[21.165354331px] w-[136.44094488px]"></td>
              <td className="h-[21.165354331px] w-[94.488188976px] text-center">
                {amountNetOfVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[211.65354331px] pl-3"></td>
              <td className="h-[21.165354331px] w-[136.44094488px]"></td>
              <td className="h-[21.165354331px] w-[94.488188976px] text-center">
                {lessWithHoldingTaxFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[211.65354331px] pl-3"></td>
              <td className="h-[21.165354331px] w-[136.44094488px]"></td>
              <td className="h-[21.165354331px] w-[94.488188976px] text-center">
                {amountDueFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[211.65354331px] pl-3"></td>
              <td className="h-[21.165354331px] w-[136.44094488px]"></td>
              <td className="h-[21.165354331px] w-[94.488188976px] text-center">
                {addVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[21.165354331px] w-[98.645669291px]"></td>
              <td className="h-[21.165354331px] w-[211.65354331px] pl-3"></td>
              <td className="h-[21.165354331px] w-[136.44094488px]"></td>
              <td className="h-[21.165354331px] w-[94.488188976px] text-center">
                {totalAmountDueFn}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[32.125984252px] mt-[10.118110236px]">
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
