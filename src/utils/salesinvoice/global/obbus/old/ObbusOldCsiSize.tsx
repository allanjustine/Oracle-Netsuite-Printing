"use client";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const ObbusOldCsiSize = ({ data }: any) => {
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
  const tinNumber = 24;
  const cashier = 25;
  const unitPrice = 26;

  return (
    <div className="text-xs h-[795.59055118px] w-[616.06299213px]">
      <div className="flex h-[15.458267717px] mt-[135.503937007px]">
        <p className="w-[402.51968504px] ml-[86.929133858px]">
          {data[1]?.[mainLineName] || ""}
        </p>
        <p className="w-[215.43307087px] ml-[41.57480315px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[15.458267717px]">
        <p className="w-[402.51968504px] ml-[86.929133858px]">
          {data[1]?.[tinNumber] || "No Data"}
        </p>
        <p className="w-[215.43307087px] ml-[41.57480315px]"></p>
      </div>
      <div className="w-[402.51968504px] flex flex-col h-[32.503937008px]">
        <p className="ml-[86.929133858px] h-[16.251968504px]">
          {data[1]?.[billingAddress].substring(0, 515) || ""}
        </p>
        <p className="ml-[86.929133858px] h-[16.251968504px]">
          {data[1]?.[billingAddress].substring(515) || ""}
        </p>
      </div>
      <div className="flex h-[15.458267717px]">
        <p className="w-[402.51968504px] ml-[113.38582677px]">
          {data[1]?.[businessStyle] || "No Data"}
        </p>
        <p className="w-[215.43307087px] ml-[41.57480315px]"></p>
      </div>
      <div className="mx-[25.700787402px] mt-[27.590551181px] h-[317.85826772px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 16).map((row: any, index: any) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[53.291338583px]">{row[quantity]}</td>
                <td className="w-[49.133858268px] h-[22.11023622px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[285.73228346px] h-[22.11023622px] ${
                    row[articles]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[72.188976378px] h-[22.11023622px]">
                  {FormattedNumber(row[unitPrice])}
                </td>
                <td className="w-[95.244094488px] h-[22.11023622px]">
                  {FormattedNumber(row[totalAmount])}
                </td>
              </tr>
            ))}
            <tr className="text-[10px] text-center">
              <td className="w-[74.24071991px]"></td>
              <td className="w-[53.831271091px] h-[19.275590551px]"></td>
              <td
                className={`w-[309.70528684px] h-[19.275590551px] ${
                  data[1]?.[serialNumber]?.length > 41 ? "text-[7px]" : ""
                }`}
              >
                {data[1]?.[serialNumber] && (
                  <>Engine #: {data[1]?.[serialNumber]}</>
                )}
              </td>
              <td className="w-[163.81552306px] h-[19.275590551px]"></td>
              <td className="w-[114.30371204px] h-[19.275590551px]"></td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[74.24071991px]"></td>
              <td className="w-[53.831271091px] h-[19.275590551px]"></td>
              <td
                className={`w-[309.70528684px] h-[19.275590551px] ${
                  data[1]?.[chassisNumber]?.length > 41 ? "text-[7px]" : ""
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
      <div className="mx-[25.700787402px] h-[170.07874016px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 15)}
              </td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3">
                0.00
              </td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 15)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3">
                {FormattedSumTotal(data, rateInclusiveVat, 15)}
              </td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {FormattedSumTotal(data, vatAmount2, 15)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3">
                {FormattedSumTotal(data, vatAmount, 15)}
              </td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 5)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3"></td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 5)} LESS: WITH HOLDING TAX */}
                0.00
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3"></td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {FormattedSumTotal(data, vatAmount2, 15)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3"></td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {FormattedSumTotal(data, vatAmount3, 15)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[22.11023622px] w-[102.42519685px]"></td>
              <td className="h-[22.11023622px] w-[216.18897638px] pl-3"></td>
              <td className="h-[22.11023622px] w-[140.5984252px]"></td>
              <td className="h-[22.11023622px] w-[96.755905512px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 15)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[32.125984252px]">
        <div className="mt-[15.136220472px] w-[196.53543307px] ml-[336.37795276px]">
          <p className="text-[10px] text-center">
            {data[1]?.[cashier] || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ObbusOldCsiSize;
