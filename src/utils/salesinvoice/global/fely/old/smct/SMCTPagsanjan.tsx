"use client";
import { PrintPageProps } from "@/types/types";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";

const SMCTPagsanjan: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-[10px] h-[638.74015748px] w-[774.80314961px]">
      <div className="mx-[41.952755906px] w-[684.09448819px] flex space-x-20 mt-[117.16535433px]">
        <div className="w-[415.7480315px] pr-[11.716535433px]">
          <p className="w-full text-[10px] h-[19.275590551px] ml-[120px]">
            {data[1]?.[mainLineName]
              ?.replace(/Ã/g, "Ñ")
              .replace(/Ã‘/g, "Ñ")
              .replace(/Ã±/g, "ñ") || ""}
          </p>
          <p className="w-full text-[10px] h-[19.275590551px] ml-[120px]">
            <span className="opacity-0">No Data</span>
          </p>
          <p className="text-[10px] h-[38.551181102px] ml-[120px] w-fit leading-[19.275590551px]">
            {data[1]?.[billingAddress] || ""}
          </p>
          <p className="w-full text-[10px] h-[19.275590551px] ml-[120px]">
            {data[1]?.[businessStyle] || ""}
          </p>
        </div>
        <div className="w-[264.56692913px]">
          <p className="w-full text-[10px] h-[19.275590551px] ml-[160px] pl-[12px]">
            {data[1]?.[date] || ""}
          </p>
          <p className="w-full text-[10px] h-[19.275590551px] ml-[160px]">
            {data[1]?.[terms] || ""}
          </p>
          <p className="w-full text-[10px] h-[19.275590551px] ml-[160px]">
            {data[1]?.[oscaPwdIdNo] || ""}
          </p>
        </div>
      </div>
      <div className="mx-[41.952755906px] mt-[22.488188976px]">
        <div className="mt-[22.488188976px] w-[714.33070866px] h-[200.31496063px]">
          <table className="border-collapse w-full">
            <tbody>
              {data.slice(1, 12).map((row, index) => (
                <tr key={index} className="text-[10px] text-center">
                  <td className="w-[75.212598425px]">
                    {row[quantity]?.replace(/.0$/, "")}
                  </td>
                  <td className="w-[75.968503937px] h-[18.822047244px]">
                    {row[unitOfMeasurement]}
                  </td>
                  <td
                    className={`w-[242.64566929px] h-[18.822047244px] ${
                      row[articles]?.length > 41 ? "text-[7px]" : ""
                    }`}
                  >
                    {row[articles]}
                  </td>
                  <td className="w-[158.36220472px] h-[18.822047244px]">
                    {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                  </td>
                  <td className="w-[131.90551181px] h-[18.822047244px]">
                    {FormattedNumber(row[quantity] * row[rateInclusiveVat]) || "0.00"}
                  </td>
                </tr>
              ))}
              <tr className="text-[10px] text-center">
                <td className="w-[75.212598425px]"></td>
                <td className="w-[75.968503937px] h-[18.822047244px]"></td>
                <td
                  className={`w-[242.64566929px] h-[18.822047244px] ${
                    data[1]?.[serialNumber]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {data[1]?.[serialNumber] && (
                    <>Engine #: {data[1]?.[serialNumber]}</>
                  )}
                </td>
                <td className="w-[158.36220472px] h-[18.822047244px]"></td>
                <td className="w-[131.90551181px] h-[18.822047244px]"></td>
              </tr>
              <tr className="text-[10px] text-center">
                <td className="w-[75.212598425px]"></td>
                <td className="w-[75.968503937px] h-[18.822047244px]"></td>
                <td
                  className={`w-[242.64566929px] h-[18.822047244px] ${
                    data[1]?.[chassisNumber]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {data[1]?.[chassisNumber] && (
                    <>Chassis #: {data[1]?.[chassisNumber]}</>
                  )}
                </td>
                <td className="w-[158.36220472px] h-[18.822047244px]"></td>
                <td className="w-[131.90551181px] h-[18.822047244px]"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="h-[109.60629921px] w-[741.16535433px] mt-[27.456692913px]">
          <table className="border-collapse w-full">
            <tbody>
              <tr className="text-xs text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {totalSalesVatInclusiveFn}
                </td>
              </tr>
              <tr className="text-xs text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {lessVatFn}
                </td>
              </tr>
              <tr className="text-xs text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]">
                  {vatableSalesFn}
                </td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {amountNetOfVatFn}
                </td>
              </tr>
              <tr className="text-xs text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]">0.00</td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {lessWithHoldingTaxFn}
                </td>
              </tr>
              <tr className="text-xs text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]">0.00</td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {amountDueFn}
                </td>
              </tr>
              <tr className="text-xs text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]">
                  {vatAmountFn}
                </td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {addVatFn}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="h-[18.822047244px] w-[741.16535433px]">
          <table className="border-collapse w-full">
            <tbody>
              <tr className="text-[10px] text-center">
                <td className="h-[18.822047244px] w-[560.40944881px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {totalAmountDueFn}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="mt-[19px] pl-[431.1023622px]">
          <p className="text-[10px] text-center">
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

export default SMCTPagsanjan;
