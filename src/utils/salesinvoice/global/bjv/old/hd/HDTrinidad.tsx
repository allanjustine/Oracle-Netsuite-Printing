"use client";
import { PrintPageProps } from "@/types/types";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";

const HDTrinidad = ({ data }: any) => {
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
    <div className="text-xs h-[771.02362205px] w-[604.72440945px]">
      <div className="flex h-[19.409448819px] mt-[109.60629921px]">
        <p className="w-[376.06299213px] pl-[94.488188976px]">
          {data[1]?.[mainLineName]
            ?.replace(/Ã/g, "Ñ")
            .replace(/Ã‘/g, "Ñ")
            .replace(/Ã±/g, "ñ") || ""}
        </p>
        <p className="w-[219.21259843px] pl-[60.472440945px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[19.409448819px]">
        <p className="w-[376.06299213px] pl-[94.488188976px]">
          {data[1]?.[taxNumber] || <span className="opacity-0">No Data</span>}
        </p>
        <p className="w-[219.21259843px] pl-[60.472440945px]">
          {data[1]?.[terms] || ""}
        </p>
      </div>
      <div className="flex h-[38.818897638px]">
        <div className="w-[376.06299213px] pl-[94.488188976px]">
          <p className="h-[19.409448819px]">
            {data[1]?.[billingAddress].substring(0, 47) || ""}
          </p>
          <p className="h-[19.409448819px]">
            {data[1]?.[billingAddress].substring(47) || ""}
          </p>
        </div>
        <p className="w-[219.21259843px] pl-[136.06299213px]">
          {data[1]?.[oscaPwdIdNo] || ""}
        </p>
      </div>
      <div className="flex h-[19.409448819px]">
        <p className="w-[376.06299213px] pl-[137.95275591px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[219.21259843px] pl-[113.38582677px]">
          {data[1]?.[cardHolderSignatures] || ""}
        </p>
      </div>
      <div className="mx-[34.393700787px] mt-[12.094488189px] h-[321.25984252px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 17).map((row: any, index: number) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[71.811023622px]">
                  {row[quantity]?.replace(/.0$/, "")}
                </td>
                <td className="w-[62.362204724px] h-[19.275590551px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[238.48818898px] h-[19.275590551px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[79.748031496px] h-[19.275590551px] text-start">
                  {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                </td>
                <td className="w-[102.38740157px] h-[19.275590551px] text-start">
                  {FormattedNumber(row[quantity] * row[rateInclusiveVat]) ||
                    "0.00"}
                </td>
              </tr>
            ))}
            {data[1]?.[serialNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[71.811023622px]"></td>
                <td className="w-[62.362204724px] h-[19.275590551px]"></td>
                <td
                  className={`w-[238.48818898px] h-[19.275590551px] text-start ${
                    data[1]?.[serialNumber]?.length > 28 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[serialNumber] && data[1]?.[chassisNumber] ? (
                    <>Engine #: {data[1]?.[serialNumber]}</>
                  ) : (
                    <>Serial #: {data[1]?.[serialNumber]}</>
                  )}
                </td>
                <td className="w-[79.748031496px] h-[19.275590551px]"></td>
                <td className="w-[102.38740157px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data[1]?.[chassisNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[71.811023622px]"></td>
                <td className="w-[62.362204724px] h-[19.275590551px]"></td>
                <td
                  className={`w-[238.48818898px] h-[19.275590551px] text-start ${
                    data[1]?.[chassisNumber]?.length > 28 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[chassisNumber] && (
                    <>Chassis #: {data[1]?.[chassisNumber]}</>
                  )}
                </td>
                <td className="w-[79.748031496px] h-[19.275590551px]"></td>
                <td className="w-[102.38740157px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data?.[1]?.[conductionSticker] && (
              <tr className="text-xs text-center">
                <td className="w-[71.811023622px]"></td>
                <td className="w-[62.362204724px] h-[19.275590551px]"></td>
                <td
                  className={`w-[238.48818898px] h-[19.275590551px] text-start ${
                    data[1]?.[conductionSticker]?.length > 28
                      ? "text-[10px]"
                      : ""
                  }`}
                >
                  {data[1]?.[conductionSticker] && (
                    <>Conduction Sticker: {data[1]?.[conductionSticker]}</>
                  )}
                </td>
                <td className="w-[79.748031496px] h-[19.275590551px]"></td>
                <td className="w-[102.38740157px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data?.[1]?.[color] && (
              <tr className="text-xs text-center">
                <td className="w-[71.811023622px]"></td>
                <td className="w-[62.362204724px] h-[19.275590551px]"></td>
                <td
                  className={`w-[238.48818898px] h-[19.275590551px] text-start ${
                    data[1]?.[color]?.length > 28 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[color] && <>Color: {data[1]?.[color]}</>}
                </td>
                <td className="w-[79.748031496px] h-[19.275590551px]"></td>
                <td className="w-[102.38740157px] h-[19.275590551px]"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-[34.393700787px] h-[139.84251969px]">
        <tbody>
          <tr className="text-xs">
            <td className="h-[19.275590551px] w-[131.90551181px]"></td>
            <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
              {vatableSalesFn}
            </td>
            <td className="h-[19.275590551px] w-[132.66141732px]"></td>
            <td className="h-[19.275590551px] w-[102.04724409px] text-start">
              {totalSalesVatInclusiveFn}
            </td>
          </tr>
          <tr className="text-xs">
            <td className="h-[19.275590551px] w-[131.90551181px]"></td>
            <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
              0.00
            </td>
            <td className="h-[19.275590551px] w-[132.66141732px]"></td>
            <td className="h-[19.275590551px] w-[102.04724409px] text-start">
              {lessVatFn}
            </td>
          </tr>
          <tr className="text-xs">
            <td className="h-[19.275590551px] w-[131.90551181px]"></td>
            <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
              0.00
            </td>
            <td className="h-[19.275590551px] w-[132.66141732px]"></td>
            <td className="h-[19.275590551px] w-[102.04724409px] text-start">
              {amountNetOfVatFn}
            </td>
          </tr>
          <tr className="text-xs">
            <td className="h-[19.275590551px] w-[131.90551181px]"></td>
            <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
              {vatAmountFn}
            </td>
            <td className="h-[19.275590551px] w-[132.66141732px]"></td>
            <td className="h-[19.275590551px] w-[102.04724409px] text-start"></td>
          </tr>
          <tr className="text-xs">
            <td className="h-[19.275590551px] w-[131.90551181px]"></td>
            <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]"></td>
            <td className="h-[19.275590551px] w-[132.66141732px]"></td>
            <td className="h-[19.275590551px] w-[102.04724409px] text-start">
              {amountDueFn}
            </td>
          </tr>
          <tr className="text-xs">
            <td className="h-[19.275590551px] w-[131.90551181px]"></td>
            <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]"></td>
            <td className="h-[19.275590551px] w-[132.66141732px]"></td>
            <td className="h-[19.275590551px] w-[102.04724409px] text-start">
              {addVatFn}
            </td>
          </tr>
          <tr className="text-xs">
            <td className="h-[19.275590551px] w-[131.90551181px]"></td>
            <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]"></td>
            <td className="h-[19.275590551px] w-[132.66141732px]"></td>
            <td className="h-[19.275590551px] w-[102.04724409px] text-start">
              {totalAmountDueFn}
            </td>
          </tr>
        </tbody>
      </div>
      <div className="mx-[34.393700787px]">
        <div className="mt-[22.456692914px] ml-[332.976377952px]">
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

export default HDTrinidad;
