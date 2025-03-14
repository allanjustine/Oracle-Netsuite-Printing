"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "../../FormattedNumber";
import FormattedSumTotal from "../../FormattedSumTotal";

const LuzonSize: React.FC<PrintPageProps> = ({ data }) => {
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
  const totalAmountDue = 27;

  return (
    <div className="text-[10px] h-[506.83464567px] w-[741.16535433px]">
      <div className="mx-[30.614173228px] w-[684.09448819px] flex space-x-20 mt-[100px]">
        <div className="w-[419.90551181px] pr-[11.716535433px]">
          <p className="w-full text-[10px] h-[19.275590551px] ml-[120px]">
            {data[1]?.[mainLineName] || "No Data"}
          </p>
          <p className="w-full text-[10px] h-[19.275590551px] ml-[120px]">
          </p>
          <p className="text-[10px] h-[38.551181102px] ml-[120px] w-fit leading-[19.275590551px]">
            {data[1]?.[billingAddress] || "No Data"}
          </p>
          <p className="w-full text-[10px] h-[19.275590551px] ml-[120px]">
            {data[1]?.[businessStyle] || "No Data"}
          </p>
        </div>
        <div className="w-[264.56692913px]">
          <p className="w-full text-[10px] h-[19.275590551px] ml-[160px]">
            {data[1]?.[date] || "No Data"}
          </p>
          <p className="w-full text-[10px] h-[19.275590551px] ml-[160px]">
            {data[1]?.[terms] || "No Data"}
          </p>
          <p className="w-full text-[10px] h-[19.275590551px] ml-[160px]">
            {data[1]?.[oscaPwdIdNo] || "No Data"}
          </p>
        </div>
      </div>
      <div className="mx-[30.614173228px]">
        <div className="mt-[22.488188976px] w-[741.16535433px] h-[91.086614173px]">
          <table className="border-collapse w-full">
            <tbody>
              {data.slice(1, 6).map((row, index) => (
                <tr key={index} className="text-[10px] text-center">
                  <td className="w-[75.212598425px]">{row[quantity]}</td>
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
                    {FormattedNumber(row[totalAmount]) || "0.00"}
                  </td>
                  <td className="w-[131.90551181px] h-[18.822047244px]">
                    {FormattedNumber(row[totalAmount]) || "0.00"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h-[113.461417326px] w-[741.16535433px] mt-[7px]">
          <table className="border-collapse w-full">
            <tbody>
              <tr className="text-[10px] text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {FormattedSumTotal(data, totalSalesVatInclusive, 5) || "0.00"}
                </td>
              </tr>
              <tr className="text-[10px] text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {FormattedSumTotal(data, vatAmount, 5) || "0.00"}
                </td>
              </tr>
              <tr className="text-[10px] text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]">
                  {/* {data[1]?.[vatAmount] || "0.00"} */}
                </td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {FormattedSumTotal(data, totalSalesVatExclusive, 5) || "0.00"}
                </td>
              </tr>
              <tr className="text-[10px] text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]">
                  {/* {data[1]?.[vatAmount] || "0.00"} */}
                </td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {/* {data[1]?.[totalSalesVatInclusive2] || "0.00"} */}
                </td>
              </tr>
              <tr className="text-[10px] text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]">
                  {/* {data[1]?.[vatAmount2] || "0.00"} */}
                </td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {FormattedSumTotal(data, totalSalesVatExclusive2, 5) ||
                    "0.00"}
                </td>
              </tr>
              <tr className="text-[10px] text-center">
                <td className="h-[18.822047244px] w-[165.92125984px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]"></td>
                <td className="h-[18.822047244px] w-[117.16535433px]">
                  {/* {data[1]?.[vatAmount2] || "0.00"} */}
                </td>
                <td className="h-[18.822047244px] w-[158.36220472px]"></td>
                <td className="h-[18.822047244px] w-[131.90551181px] text-center">
                  {FormattedSumTotal(data, vatAmount2, 5) || "0.00"}
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
                  {FormattedSumTotal(data, rateInclusiveOfTax, 5) ||
                    "0.00"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="mt-[19px] pl-[431.1023622px]">
          <p className="text-[10px] text-center">{data[1]?.[cashier] || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default LuzonSize;
