"use client";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";

const SMCTRosario = ({ data }: any) => {
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
    <div className="text-xs h-[797.48031496px] w-[638.74015748px]">
      <div className="flex h-[14.74015748px] mt-[125.01574804px]">
        <p className={`w-[425.19685039px] pl-[109.60629921px] ${data[1]?.[mainLineName]?.length > 28 ? "text-[9px]" : ''}`}>
          {data[1]?.[mainLineName]
            ?.replace(/Ã/g, "Ñ")
            .replace(/Ã‘/g, "Ñ")
            .replace(/Ã±/g, "ñ") || ""}
        </p>
        <p className="w-[216.94488189px] pl-[56.692913386px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[14.74015748px]">
        <p className="w-[425.19685039px] pl-[109.60629921px]">
          {data[1]?.[taxNumber] || <span className="opacity-0">No Data</span>}
        </p>
        <p className="w-[216.94488189px] pl-[56.692913386px]">
          {data[1]?.[terms] || "CASH"}
        </p>
      </div>
      <div className="flex h-[38.818897638px]">
        <div className="w-[425.19685039px] pl-[109.60629921px]">
          <p className="h-[14.74015748px]">
            {data[1]?.[billingAddress]?.substring(0, 40) || ""}
          </p>
          <p className="h-[14.74015748px]">
            {data[1]?.[billingAddress]?.substring(40) || ""}
          </p>
        </div>
        <p className="w-[216.94488189px] pl-[124.72440945px]">
          {data[1]?.[oscaPwdIdNo] || ""}
        </p>
      </div>
      <div className="flex h-[14.74015748px]">
        <p className="w-[425.19685039px] pl-[137.95275591px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[216.94488189px] pl-[86.929133858px]">
          {data[1]?.[cardHolderSignatures] || ""}
        </p>
      </div>
      <div className="mx-[39.68503937px] mt-[19.275590551px] h-[314.07874016px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 17).map((row: any, index: number) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[49.133858268px]">
                  {row[quantity]?.replace(/.0$/, "")}
                </td>
                <td className="w-[49.133858268px] h-[19.275590551px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[283.46456693px] h-[19.275590551px] text-start ${
                    row[articles]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[79.37007874px] h-[19.275590551px]">
                  {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                </td>
                <td className="w-[79.748031496px] h-[19.275590551px]">
                  {FormattedNumber(row[quantity] * row[rateInclusiveVat]) ||
                    "0.00"}
                </td>
              </tr>
            ))}
            {data[1]?.[serialNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[49.133858268px]"></td>
                <td className="w-[49.133858268px] h-[19.275590551px]"></td>
                <td
                  className={`w-[283.46456693px] h-[19.275590551px] text-start ${
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
                <td className="w-[79.748031496px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data[1]?.[chassisNumber] && (
              <tr className="text-xs text-center">
                <td className="w-[49.133858268px]"></td>
                <td className="w-[49.133858268px] h-[19.275590551px]"></td>
                <td
                  className={`w-[283.46456693px] h-[19.275590551px] text-start ${
                    data[1]?.[chassisNumber]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[chassisNumber] && (
                    <>Chassis #: {data[1]?.[chassisNumber]}</>
                  )}
                </td>
                <td className="w-[79.37007874px] h-[19.275590551px]"></td>
                <td className="w-[79.748031496px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data?.[1]?.[conductionSticker] && (
              <tr className="text-xs text-center">
                <td className="w-[49.133858268px]"></td>
                <td className="w-[49.133858268px] h-[19.275590551px]"></td>
                <td
                  className={`w-[283.46456693px] h-[19.275590551px] text-start ${
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
                <td className="w-[79.748031496px] h-[19.275590551px]"></td>
              </tr>
            )}
            {data?.[1]?.[color] && (
              <tr className="text-xs text-center">
                <td className="w-[49.133858268px]"></td>
                <td className="w-[49.133858268px] h-[19.275590551px]"></td>
                <td
                  className={`w-[283.46456693px] h-[19.275590551px] text-start ${
                    data[1]?.[color]?.length > 20 ? "text-[10px]" : ""
                  }`}
                >
                  {data[1]?.[color] && <>Color: {data[1]?.[color]}</>}
                </td>
                <td className="w-[79.37007874px] h-[19.275590551px]"></td>
                <td className="w-[79.748031496px] h-[19.275590551px]"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mx-[39.68503937px] h-[126.99212598px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[94.488188976px]"></td>
              <td className="h-[19.275590551px] w-[223.37007874px] pl-[11.338582677px]">
                {vatableSalesFn}
              </td>
              <td className="h-[19.275590551px] w-[142.11023622px]"></td>
              <td className="h-[19.275590551px] w-[79.748031496px] text-center">
                {totalSalesVatInclusiveFn}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[94.488188976px]"></td>
              <td className="h-[19.275590551px] w-[223.37007874px] pl-[11.338582677px]">
                0.00
              </td>
              <td className="h-[19.275590551px] w-[142.11023622px]"></td>
              <td className="h-[19.275590551px] w-[79.748031496px] text-center">
                {lessVatFn}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[94.488188976px]"></td>
              <td className="h-[19.275590551px] w-[223.37007874px] pl-[11.338582677px]">
                0.00
              </td>
              <td className="h-[19.275590551px] w-[142.11023622px]"></td>
              <td className="h-[19.275590551px] w-[79.748031496px] text-center">
                {amountNetOfVatFn}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[94.488188976px]"></td>
              <td className="h-[19.275590551px] w-[223.37007874px] pl-[11.338582677px]">
                {vatAmountFn}
              </td>
              <td className="h-[19.275590551px] w-[142.11023622px]"></td>
              <td className="h-[19.275590551px] w-[79.748031496px] text-center">
                {lessWithHoldingTaxFn}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[94.488188976px]"></td>
              <td className="h-[19.275590551px] w-[223.37007874px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[142.11023622px]"></td>
              <td className="h-[19.275590551px] w-[79.748031496px] text-center">
                {amountDueFn}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[94.488188976px]"></td>
              <td className="h-[19.275590551px] w-[223.37007874px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[142.11023622px]"></td>
              <td className="h-[19.275590551px] w-[79.748031496px] text-center">
                {addVatFn}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[94.488188976px]"></td>
              <td className="h-[19.275590551px] w-[223.37007874px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[142.11023622px]"></td>
              <td className="h-[19.275590551px] w-[79.748031496px] text-center">
                {totalAmountDueFn}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[39.68503937px]">
        <div className="mt-[26.456692914px] ml-[340.15748031px] w-[196.53543307px]">
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

export default SMCTRosario;
