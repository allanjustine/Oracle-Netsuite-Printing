"use client";
import { PrintPageProps } from "@/types/types";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";

const Bulua2 = ({ data }: any) => {
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
    <div className="text-xs h-[763.46456693px] w-[604.72440945px]">
      <div className="flex h-[19.409448819px] mt-[105.00787402px]">
        <p className="w-[377.95275591px] pl-[94.488188976px]">
          {data[1]?.[mainLineName]
            ?.replace(/Ã/g, "Ñ")
            .replace(/Ã‘/g, "Ñ")
            .replace(/Ã±/g, "ñ") || ""}
        </p>
        <p className="w-[219.21259843px] pl-[52.913385827px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[19.409448819px]">
        <p className="w-[377.95275591px] pl-[94.488188976px]">
          {data[1]?.[taxNumber] || <span className="opacity-0">No Data</span>}
        </p>
        <p className="w-[219.21259843px] pl-[52.913385827px]">
          {data[1]?.[terms] || "CASH"}
        </p>
      </div>
      <div className="flex h-[38.818897638px]">
        <div className="w-[377.95275591px] pl-[94.488188976px]">
          <p className="h-[19.409448819px]">
            {data[1]?.[billingAddress]?.substring(0, 48) || ""}
          </p>
          <p className="h-[19.409448819px]">
            {data[1]?.[billingAddress]?.substring(48) || ""}
          </p>
        </div>
        <p className="w-[219.21259843px] pl-[132.28346457px]">
          {data[1]?.[oscaPwdIdNo] || ""}
        </p>
      </div>
      <div className="flex h-[19.409448819px]">
        <p className="w-[377.95275591px] pl-[127.95275591px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[219.21259843px] pl-[113.38582677px]">
          {data[1]?.[cardHolderSignatures] || ""}
        </p>
      </div>
      <div className="mx-[26.834645669px] mt-[24.456692913px] h-[309.92125984px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 17).map((row: any, index: number) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[69.921259843px]">
                  {row[quantity]?.replace(/.0$/, "")}
                </td>
                <td className="w-[56.692913386px] h-[19.275590551px] pl-4">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[234.33070866px] h-[19.275590551px] pl-2 text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[79.37007874px] h-[19.275590551px]">
                  {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                </td>
                <td className="w-[102.04724409px] h-[19.275590551px]">
                  {FormattedNumber(row[quantity] * row[rateInclusiveVat]) ||
                    "0.00"}
                </td>
              </tr>
            ))}
            {data[1]?.[serialNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[69.921259843px]"></td>
                <td className="w-[56.692913386px] h-[19.275590551px] pl-4"></td>
                <td
                  className={`w-[234.33070866px] h-[19.275590551px] pl-2 text-start ${
                    data[1]?.[serialNumber]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[serialNumber] && data[1]?.[chassisNumber] ? (
                    <>Engine #: {data[1]?.[serialNumber]}</>
                  ) : (
                    <>Serial #: {data[1]?.[serialNumber]}</>
                  )}
                </td>
                <td className="w-[79.37007874px] h-[19.275590551px]"></td>
                <td className="w-[102.04724409px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data[1]?.[chassisNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[69.921259843px]"></td>
                <td className="w-[56.692913386px] h-[19.275590551px] pl-4"></td>
                <td
                  className={`w-[234.33070866px] h-[19.275590551px] pl-2 text-start ${
                    data[1]?.[chassisNumber]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[chassisNumber] && (
                    <>Chassis #: {data[1]?.[chassisNumber]}</>
                  )}
                </td>
                <td className="w-[79.37007874px] h-[19.275590551px]"></td>
                <td className="w-[102.04724409px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data?.[1]?.[conductionSticker] && (
              <tr className="text-xs text-center">
                <td className="w-[69.921259843px]"></td>
                <td className="w-[56.692913386px] h-[19.275590551px] pl-4"></td>
                <td
                  className={`w-[234.33070866px] h-[19.275590551px] pl-2 text-start ${
                    data[1]?.[conductionSticker]?.length > 20
                      ? "text-[10px]"
                      : ""
                  }`}
                >
                  {data[1]?.[conductionSticker] && (
                    <>Conduction Sticker: {data[1]?.[conductionSticker]}</>
                  )}
                </td>
                <td className="w-[79.37007874px] h-[19.275590551px]"></td>
                <td className="w-[102.04724409px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data?.[1]?.[color] && (
              <tr className="text-xs text-center">
                <td className="w-[69.921259843px]"></td>
                <td className="w-[56.692913386px] h-[19.275590551px] pl-4"></td>
                <td
                  className={`w-[234.33070866px] h-[19.275590551px] pl-2 text-start ${
                    data[1]?.[color]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[color] && <>Color: {data[1]?.[color]}</>}
                </td>
                <td className="w-[79.37007874px] h-[19.275590551px]"></td>
                <td className="w-[102.04724409px] h-[19.275590551px]"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-[26.834645669px] h-[130.01574803px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[128.50393701px]"></td>
              <td className="h-[19.275590551px] w-[179.52755906px] pl-[11.338582677px]">
                {vatableSalesFn}
              </td>
              <td className="h-[19.275590551px] w-[132.28346457px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {totalSalesVatInclusiveFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[128.50393701px]"></td>
              <td className="h-[19.275590551px] w-[179.52755906px] pl-[11.338582677px]">
                0.00
              </td>
              <td className="h-[19.275590551px] w-[132.28346457px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {lessVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[128.50393701px]"></td>
              <td className="h-[19.275590551px] w-[179.52755906px] pl-[11.338582677px]">
                0.00
              </td>
              <td className="h-[19.275590551px] w-[132.28346457px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {amountNetOfVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[128.50393701px]"></td>
              <td className="h-[19.275590551px] w-[179.52755906px] pl-[11.338582677px]">
                {vatAmountFn}
              </td>
              <td className="h-[19.275590551px] w-[132.28346457px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {lessWithHoldingTaxFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[128.50393701px]"></td>
              <td className="h-[19.275590551px] w-[179.52755906px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.28346457px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {amountDueFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[128.50393701px]"></td>
              <td className="h-[19.275590551px] w-[179.52755906px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.28346457px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {addVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[128.50393701px]"></td>
              <td className="h-[19.275590551px] w-[179.52755906px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.28346457px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {totalAmountDueFn}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[26.834645669px]">
        <div className="mt-[20.456692914px] ml-[332.976377952px]">
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

export default Bulua2;
