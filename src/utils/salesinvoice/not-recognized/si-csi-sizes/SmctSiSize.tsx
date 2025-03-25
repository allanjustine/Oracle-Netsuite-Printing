"use client";
import { PrintPageProps } from "@/types/types";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";

const SmctSiSize: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs h-[785.76377953px] w-[582.80314961px]">
      <div className="flex h-[21.165354331px] mt-[109.7244094521px]">
        <p className="w-[377.95275591px] pl-[94.488188976px]">
          {data[1]?.[mainLineName]
            ?.replace(/Ã/g, "Ñ")
            .replace(/Ã‘/g, "Ñ")
            .replace(/Ã±/g, "ñ") || ""}
        </p>
        <p className="w-[219.21259843px] pl-[62px]">{data[1]?.[date] || ""}</p>
      </div>
      <div className="flex h-[21.165354331px]">
        <p className="w-[377.95275591px] pl-[94.488188976px]">
          {data[1]?.[taxNumber] || <span className="opacity-0">No Data</span>}
        </p>
        <p className="w-[219.21259843px] pl-[62px]">{data[1]?.[terms] || "CASH"}</p>
      </div>
      <div className="flex h-[21.165354331]">
        <p
          className={`w-full pl-[94.488188976px] ${
            data[1]?.[billingAddress]?.length > 90 ? "text-[9px]" : ""
          }`}
        >
          {data[1]?.[billingAddress] || ""}
        </p>
      </div>
      <div className="flex h-[21.165354331px]">
        <p className="w-[377.95275591px] pl-[129px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[219.21259843px] pl-[87px]"></p>
      </div>
      <div className="mx-[30.236220472px] mt-[23.456692913px] h-[313.32283465px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 17).map((row, index) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[71.433070866px]">
                  {row[quantity]?.replace(/.0$/, "")}
                </td>
                <td className="w-[56.31496063px] h-[18.275590551px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[231.30708661px] h-[18.275590551px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[79.37007874px] h-[18.275590551px]">
                  {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                </td>
                <td className="w-[101.66929134px] h-[18.275590551px]">
                  {FormattedNumber(row[quantity] * row[rateInclusiveVat]) ||
                    "0.00"}
                </td>
              </tr>
            ))}
            <tr className="text-xs text-center">
              <td className="w-[74.24071991px]"></td>
              <td className="w-[53.831271091px] h-[19.275590551px]"></td>
              <td
                className={`w-[309.70528684px] h-[19.275590551px] ${
                  data[1]?.[serialNumber]?.length > 41 ? "text-[10px]" : ""
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
            <tr className="text-xs text-center">
              <td className="w-[74.24071991px]"></td>
              <td className="w-[53.831271091px] h-[19.275590551px]"></td>
              <td
                className={`w-[309.70528684px] h-[19.275590551px] ${
                  data[1]?.[chassisNumber]?.length > 41 ? "text-[10px]" : ""
                }`}
              >
                {data[1]?.[chassisNumber] && (
                  <>Chassis #: {data[1]?.[chassisNumber]}</>
                )}
              </td>
              <td className="w-[163.81552306px] h-[19.275590551px]"></td>
              <td className="w-[114.30371204px] h-[19.275590551px]"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[30.236220472px] h-[135.68503937px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[18.275590551px] w-[124.72440945px]"></td>
              <td className="h-[18.275590551px] w-[179.90551181px] pl-[7.342622px]">
                {vatableSalesFn}
              </td>
              <td className="h-[18.275590551px] w-[128.50393701px]"></td>
              <td className="h-[18.275590551px] w-[98.267716535px] text-center">
                {totalSalesVatInclusiveFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.275590551px] w-[124.72440945px]"></td>
              <td className="h-[18.275590551px] w-[179.90551181px] pl-[7.342622px]">
                0.00
              </td>
              <td className="h-[18.275590551px] w-[128.50393701px]"></td>
              <td className="h-[18.275590551px] w-[98.267716535px] text-center">
                {lessVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.275590551px] w-[124.72440945px]"></td>
              <td className="h-[18.275590551px] w-[179.90551181px] pl-[7.342622px]">
                0.00
              </td>
              <td className="h-[18.275590551px] w-[128.50393701px]"></td>
              <td className="h-[18.275590551px] w-[98.267716535px] text-center">
                {amountNetOfVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.275590551px] w-[124.72440945px]"></td>
              <td className="h-[18.275590551px] w-[179.90551181px] pl-[7.342622px]">
                {vatAmountFn}
              </td>
              <td className="h-[18.275590551px] w-[128.50393701px]"></td>
              <td className="h-[18.275590551px] w-[98.267716535px] text-center"></td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.275590551px] w-[124.72440945px]"></td>
              <td className="h-[18.275590551px] w-[179.90551181px] pl-[7.342622px]"></td>
              <td className="h-[18.275590551px] w-[128.50393701px]"></td>
              <td className="h-[18.275590551px] w-[98.267716535px] text-center">
                {amountDueFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.275590551px] w-[124.72440945px]"></td>
              <td className="h-[18.275590551px] w-[179.90551181px] pl-[7.342622px]"></td>
              <td className="h-[18.275590551px] w-[128.50393701px]"></td>
              <td className="h-[18.275590551px] w-[98.267716535px] text-center">
                {addVatFn}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.275590551px] w-[124.72440945px]"></td>
              <td className="h-[18.275590551px] w-[179.90551181px] pl-[7.342622px]"></td>
              <td className="h-[18.275590551px] w-[128.50393701px]"></td>
              <td className="h-[18.275590551px] w-[98.267716535px] text-center">
                {totalAmountDueFn}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[30.236220472px]">
        <div className="mt-[22.566929134px] ml-[392.31496063px]">
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

export default SmctSiSize;
