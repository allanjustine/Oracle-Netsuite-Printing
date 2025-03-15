"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const DSMSISize: React.FC<PrintPageProps> = ({ data }) => {
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

  return (
    <div className="text-xs h-[510.23622047px] w-[778.58267717px]">
      <div className="flex h-[18.141732283px] mt-[91.488188976px]">
        <p className="w-[461.1023622px] pl-[132.28346457px]">
          {data[1]?.[mainLineName]?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ") || ""}
        </p>
        <p className="w-[132.28346457px] pl-[151.18110236px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[18.141732283px]">
        <p className="w-[461.1023622px] pl-[132.28346457px]">
        </p>
        <p className="w-[132.28346457px] pl-[151.18110236px]">
          {data[1]?.[terms] || ""}
        </p>
      </div>
      <div className="flex h-[37.795275591px]">
        <p className="w-[461.1023622px] pl-[132.28346457px]">
          {data[1]?.[billingAddress] || ""}
        </p>
        <p className="w-[132.28346457px] pl-[151.18110236px]">
          {data[1]?.[oscaPwdIdNo] || ""}
        </p>
      </div>
      <div className="flex h-[18.141732283px]">
        <p className="w-[461.1023622px] pl-[132.28346457px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[132.28346457px] pl-[151.18110236px]">
          {data[1]?.[cardHolderSignatures] || ""}
        </p>
      </div>
      <div className="mx-[37.795275591px] mt-[17.0078740154px] h-[91.086614173px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 6).map((row, index) => (
              <tr key={index} className="text-xs text-center">
                <td className="w-[75.590551181px]">{row[quantity]?.replace(/.0$/, "")}</td>
                <td className="w-[75.590551181px] h-[18.141732283px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[230.5511811px] h-[18.141732283px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[164.40944882px] h-[18.141732283px]">
                  {FormattedNumber(row[rateInclusiveVat])}
                </td>
                <td className="w-[137.95275591px] h-[18.141732283px]">
                  {FormattedNumber(row[totalSalesVatInclusive2])}
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
      <div className="mx-[37.795275591px] h-[37.795275591px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs text-center">
              <td className="w-[75.590551181px]"></td>
              <td className="w-[75.590551181px] h-[18.141732283px]"></td>
              <td className={`w-[230.5511811px] h-[18.141732283px]`}></td>
              <td className="w-[164.40944882px] h-[18.141732283px]"></td>
              <td className="w-[137.95275591px] h-[18.141732283px]">
                {FormattedSumTotal(data, totalSalesVatInclusive, 5)}
              </td>
            </tr>
            <tr className="text-xs text-center">
              <td className="w-[75.590551181px]"></td>
              <td className="w-[75.590551181px] h-[18.141732283px]"></td>
              <td className={`w-[230.5511811px] h-[18.141732283px]`}></td>
              <td className="w-[164.40944882px] h-[18.141732283px]"></td>
              <td className="w-[137.95275591px] h-[18.141732283px]">
                {FormattedSumTotal(data, vatAmount2, 5)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[37.795275591px] h-[89.196850394px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[289.13385827px]"></td>
              <td className="h-[18.141732283px] w-[117.16535433px]">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 5)}
              </td>
              <td className="h-[18.141732283px] w-[162.51968504px]"></td>
              <td className="h-[18.141732283px] w-[137.95275591px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 5)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[289.13385827px]"></td>
              <td className="h-[18.141732283px] w-[117.16535433px]">
                {/* {FormattedSumTotal(data, rateInclusiveVat, 5)} VAT EXEMPT SALES */}
                0.00
              </td>
              <td className="h-[18.141732283px] w-[162.51968504px]"></td>
              <td className="h-[18.141732283px] w-[137.95275591px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 5)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[289.13385827px]"></td>
              <td className="h-[18.141732283px] w-[117.16535433px]">
                {FormattedSumTotal(data, rateInclusiveVat, 5)}
              </td>
              <td className="h-[18.141732283px] w-[162.51968504px]"></td>
              <td className="h-[18.141732283px] w-[137.95275591px] text-center">
                {FormattedSumTotal(data, vatAmount2, 5)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[289.13385827px]"></td>
              <td className="h-[18.141732283px] w-[117.16535433px]">
                {FormattedSumTotal(data, vatAmount, 5)}
              </td>
              <td className="h-[18.141732283px] w-[162.51968504px]"></td>
              <td className="h-[18.141732283px] w-[137.95275591px] text-center">
                {FormattedSumTotal(data, vatAmount3, 5)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.141732283px] w-[289.13385827px]"></td>
              <td className="h-[18.141732283px] w-[117.16535433px]"></td>
              <td className="h-[18.141732283px] w-[162.51968504px]"></td>
              <td className="h-[18.141732283px] w-[137.95275591px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 5)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[32.125984252px]">
        <div className="mt-[30.236220472px] ml-[480px]">
          <p className="text-xs text-center">
            {data[1]?.[cashier]?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ") || ""}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DSMSISize;
