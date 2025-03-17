"use client";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";

const HeadOffice = ({ data }: any) => {
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
    <div className="text-xs h-[767.24409449px] w-[608.50393701px]">
      <div className="w-full h-[30.236220472px] mt-[167.62992126px]">
        <p className="w-[158.74015748px] pl-[415.7480315px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="w-full h-[19.409448819px] mt-[11.677165354px]">
        <p className="w-[377.95275591px] pl-[188.97637795px]">
          {data[1]?.[mainLineName]
            ?.replace(/Ã/g, "Ñ")
            .replace(/Ã‘/g, "Ñ")
            .replace(/Ã±/g, "ñ") || ""}
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
                  {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                </td>
                <td className="w-[105.82677165px] h-[19.275590551px]">
                  {FormattedNumber(row[totalSalesVatInclusive2]) || "0.00"}
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
                {vatableSalesFn}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {totalSalesVatInclusiveFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]">
                {vatAmountFn}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {lessVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]">
                0.00
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {amountNetOfVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]">
                0.00
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center"></td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {addVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {lessWithHoldingTaxFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[65.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {totalAmountDueFn}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[34.393700787px]">
        <div className="mt-[15.456692914px] ml-[7.5px] w-[340.15748031px]">
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

export default HeadOffice;
