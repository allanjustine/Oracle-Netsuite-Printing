"use client";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";

const Remegio = ({ data }: any) => {
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
    <div className="text-xs h-[795.59055118px] w-[616.06299213px]">
      <div className="flex h-[15.458267717px] mt-[148.503937007px]">
        <p className="w-[402.51968504px] ml-[86.929133858px]">
          {data[1]?.[mainLineName]
            ?.replace(/Ã/g, "Ñ")
            .replace(/Ã‘/g, "Ñ")
            .replace(/Ã±/g, "ñ") || ""}
        </p>
        <p className="w-[215.43307087px] ml-[41.57480315px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[15.458267717px]">
        <p className="w-[402.51968504px] ml-[86.929133858px]">
          {data[1]?.[taxNumber] || <span className="opacity-0">No Data</span>}
        </p>
        <p className="w-[215.43307087px] ml-[41.57480315px]"></p>
      </div>
      <div className="w-[402.51968504px] flex flex-col h-[32.503937008px]">
        <p className="ml-[86.929133858px] h-[16.251968504px]">
          {data[1]?.[billingAddress]?.substring(0, 50) || ""}
        </p>
        <p className="ml-[86.929133858px] h-[16.251968504px]">
          {data[1]?.[billingAddress]?.substring(50) || ""}
        </p>
      </div>
      <div className="flex h-[15.458267717px]">
        <p className="w-[402.51968504px] ml-[113.38582677px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[215.43307087px] ml-[41.57480315px]"></p>
      </div>
      <div className="mx-[25.700787402px] mt-[27.590551181px] h-[317.85826772px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 16).map((row: any, index: any) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[53.291338583px]">
                  {row[quantity]?.replace(/.0$/, "")}
                </td>
                <td className="w-[49.133858268px] h-[22.11023622px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[285.73228346px] h-[22.11023622px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[72.188976378px] h-[22.11023622px]">
                  {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                </td>
                <td className="w-[95.244094488px] h-[22.11023622px]">
                  {FormattedNumber(row[quantity] * row[rateInclusiveVat]) ||
                    "0.00"}
                </td>
              </tr>
            ))}
            {data[1]?.[serialNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[53.291338583px]"></td>
                <td className="w-[49.133858268px] h-[22.11023622px]"></td>
                <td
                  className={`w-[285.73228346px] h-[22.11023622px] text-start ${
                    data[1]?.[serialNumber]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[serialNumber] && data[1]?.[chassisNumber] ? (
                    <>Engine #: {data[1]?.[serialNumber]}</>
                  ) : (
                    <>Serial #: {data[1]?.[serialNumber]}</>
                  )}
                </td>
                <td className="w-[72.188976378px] h-[22.11023622px]"></td>
                <td className="w-[95.244094488px] h-[22.11023622px]"></td>
              </tr>
            )}
            {data[1]?.[chassisNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[53.291338583px]"></td>
                <td className="w-[49.133858268px] h-[22.11023622px]"></td>
                <td
                  className={`w-[285.73228346px] h-[22.11023622px] text-start ${
                    data[1]?.[chassisNumber]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[chassisNumber] && (
                    <>Chassis #: {data[1]?.[chassisNumber]}</>
                  )}
                </td>
                <td className="w-[72.188976378px] h-[22.11023622px]"></td>
                <td className="w-[95.244094488px] h-[22.11023622px]"></td>
              </tr>
            )}
            {data?.[1]?.[conductionSticker] && (
              <tr className="text-xs text-center">
                <td className="w-[53.291338583px]"></td>
                <td className="w-[49.133858268px] h-[22.11023622px]"></td>
                <td
                  className={`w-[285.73228346px] h-[22.11023622px] text-start ${
                    data[1]?.[conductionSticker]?.length > 20
                      ? "text-[10px]"
                      : ""
                  }`}
                >
                  {data[1]?.[conductionSticker] && (
                    <>Conduction Sticker: {data[1]?.[conductionSticker]}</>
                  )}
                </td>
                <td className="w-[72.188976378px] h-[22.11023622px]"></td>
                <td className="w-[95.244094488px] h-[22.11023622px]"></td>
              </tr>
            )}
            {data?.[1]?.[color] && (
              <tr className="text-xs text-center">
                <td className="w-[53.291338583px]"></td>
                <td className="w-[49.133858268px] h-[22.11023622px]"></td>
                <td
                  className={`w-[285.73228346px] h-[22.11023622px] text-start ${
                    data[1]?.[color]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[color] && <>Color: {data[1]?.[color]}</>}
                </td>
                <td className="w-[72.188976378px] h-[22.11023622px]"></td>
                <td className="w-[95.244094488px] h-[22.11023622px]"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-[25.700787402px] h-[170.07874016px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3">
                {vatableSalesFn}
              </td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center"></td>
            </tr>
            <tr className="text-xs">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3">
                0.00
              </td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {totalSalesVatInclusiveFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3">
                0.00
              </td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {lessVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3">
                {vatAmountFn}
              </td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {amountNetOfVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3"></td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {lessWithHoldingTaxFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3"></td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {amountDueFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3"></td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {addVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3"></td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {totalAmountDueFn}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[32.125984252px]">
        <div className="mt-[15.136220472px] w-[196.53543307px] ml-[336.37795276px]">
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

export default Remegio;
