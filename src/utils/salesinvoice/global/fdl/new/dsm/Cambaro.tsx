"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const Cambaro = ({ data }: any) => {
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
    <div className="text-xs h-[767.24409449px] w-[610.39370079px]">
      <div className="flex items-center h-[29.480314961px] mx-[37.795275591px] ml-[412.34645669px] mt-[144.999999996px]">
        <p className="w-[161.00787402px] ml-[7.5590551181px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="mt-[17.007874016px] mx-[37.795275591px] h-[73.700787402px] w-[534.80314961px]">
        <p className="w-[389.29133858px] flex items-center h-[24.566929134px] ml-[154.96062992px]">
          {data[1]?.[mainLineName] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
        <p className="w-[389.29133858px] flex items-center h-[24.566929134px] ml-[154.96062992px]">
           <span className="opacity-0">No Data</span>
        </p>
        <p
          className={`${
            data[1]?.[billingAddress].length > 65 ? "text-[9px]" : ""
          } w-[389.29133858px] flex items-center h-[24.566929134px] ml-[154.96062992px]`}
        >
          {data[1]?.[billingAddress] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
      </div>
      <div className="mx-[37.795275591px] w-[533.29133858px] mt-[29.858267717px] h-[226.77165354px]">
        <table className="border-collapse">
          <tbody>
            {data.slice(1, 13).map((row: any, index: number) => (
              <tr key={index} className="text-xs text-center">
                <td
                  className={`w-[268.72440945px] h-[18.897637795px] text-start ${
                    row[articles]?.length > 41 ? "text-[10px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[75.968503937px]">{row[quantity]}</td>
                <td className="w-[83.48976378px] h-[18.897637795px]">
                  {/* {FormattedNumber(row[unitPrice])} */}
                </td>
                <td className="w-[105.4488189px] h-[18.897637795px]">
                  {FormattedNumber(row[totalAmount])}
                </td>
              </tr>
            ))}
            <tr className="text-xs text-center">
              <td
                className={`w-[268.72440945px] h-[18.897637795px] ${
                  data[1]?.[serialNumber]?.length > 41 ? "text-[10px]" : ""
                }`}
              >
                {data[1]?.[serialNumber] && (
                  <>Engine #: {data[1]?.[serialNumber]}</>
                )}
              </td>
              <td className="w-[75.968503937px]"></td>
              <td className="w-[83.48976378px] h-[18.897637795px]"></td>
              <td className="w-[105.4488189px] h-[18.897637795px]"></td>
            </tr>
            <tr className="text-xs text-center">
              <td
                className={`w-[268.72440945px] h-[18.897637795px] ${
                  data[1]?.[chassisNumber]?.length > 41 ? "text-[10px]" : ""
                }`}
              >
                {data[1]?.[chassisNumber] && (
                  <>Chassis #: {data[1]?.[chassisNumber]}</>
                )}
              </td>
              <td className="w-[75.968503937px]"></td>
              <td className="w-[83.48976378px] h-[18.897637795px]"></td>
              <td className="w-[105.4488189px] h-[18.897637795px]"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[37.795275591px] h-[132.28346457px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 12)}
              </td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 12)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]">
                {FormattedSumTotal(data, vatAmount, 12)}
              </td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 12)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]">
                {FormattedSumTotal(data, rateInclusiveVat, 12)}
              </td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 12)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]">
                {/* {FormattedSumTotal(data, rateInclusiveVat, 12)} VAT EXEMPT SALES */}
                0.00
              </td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 12)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]"></td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {FormattedSumTotal(data, vatAmount2, 12)}
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]"></td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {/* {FormattedSumTotal(data, rateInclusiveVat, 12)} LESS WITHHOLDING TAX */}
                0.00
              </td>
            </tr>
            <tr className="text-xs">
              <td className="h-[18.897637795px] w-[162.51968504px]"></td>
              <td className="h-[18.897637795px] w-[106.96062992px] pl-[11.338582677px]"></td>
              <td className="h-[18.897637795px] w-[159.11811024px]"></td>
              <td className="h-[18.897637795px] w-[102.38740157px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 12)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-[610.39370079px]">
        <div className="mt-[15.897637795px] ml-[192.75590551px] w-[154.96062992px]">
          <p className="text-xs text-center">
            {data[1]?.[cashier] || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cambaro;
