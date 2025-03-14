'use client'
import { PrintPageProps } from "@/types/types";



const Size8Sales: React.FC<PrintPageProps> = ({ data }) => {
  
  const internalIdColumnIndex = 0;
  const mainLineName = 1;
  const billingAddress = 2;
  const billingAddress1 = 3;
  const billingAddress2 = 4;
  const billingAddress3 = 5;
  const taxNumber = 6;
  const date = 7;
  const terms = 8;
  const item = 9;
  const quantity = 10;
  const units = 11;
  const units1 = 12;
  const itemRate = 13;
  const itemRate1 = 14;
  const amount = 15;
  const totalSales = 16;
  const amountTax = 17;
  const netTax = 18;
  const transactionTotal = 19;

  return (
    <div className="text-xs h-[774.8px] w-[612.28px]">
      <div className="flex mt-[155px]">
        <p className="w-full text-right pr-[114px]">{data[date]?.[7]}</p>
      </div>
      <div className="flex mt-[27px]">
        <p className="w-full pl-[188.97px] pr-[37.8px]">
          Mr. Silvestre Lumapas
        </p>
      </div>
      <div className="flex mt-[10px]">
        <p className="w-full pl-[188.97px] pr-[37.8px]">1231321564548974432</p>
      </div>
      <div className="flex mt-[px] h-[29px]">
        <p className="w-full pl-[188.97px] pr-[37.8px]">
          JA Clarin Street, Tagbilaran City Bohol 6300 Philippines Country
        </p>
      </div>
      <div className="mx-[30.23px] mt-[25px] h-[230.55px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 11).map((row, index) => (
              <tr key={index} className="text-xs text-center text-xs">
                <td className={`w-[268.34] h-[19px]  ${
                    row[9]?.length > 53 ? "text-[10px]" : ""
                  }`}>{row[9]}</td>
                <td className="w-[75.59px] h-[19px]">{row[10]}</td>
                <td className="w-[79.37px] h-[19px]">{row[13]}</td>
                <td className="w-[98.26px]h-[19px]">{row[15]}</td>
              </tr>
            ))}
            <tr className="text-xs text-center text-xs">
              <td className="w-[268.34] h-[19px]">JKASHJKASJKDHB</td>
              <td className="w-[75.59px] h-[19px]">1</td>
              <td className="w-[83.14px] h-[19px]">121</td>
              <td className="w-[98.26px] h-[19px]">2121</td>
            </tr>
            <tr className="text-xs text-center text-xs">
              <td className="w-[268.34] h-[19px]">JKASHJKASJKDHB</td>
              <td className="w-[75.59px] h-[19px]">1</td>
              <td className="w-[83.14px] h-[19px]">121</td>
              <td className="w-[98.26px] h-[19px]">2121</td>
            </tr>
            <tr className="text-xs text-center text-xs">
              <td className="w-[268.34] h-[19px]">JKASHJKASJKDHB</td>
              <td className="w-[75.59px] h-[19px]">1</td>
              <td className="w-[83.14px] h-[19px]">121</td>
              <td className="w-[98.26px] h-[19px]">2121</td>
            </tr>
            <tr className="text-xs text-center text-xs">
              <td className="w-[268.34] h-[19px]">JKASHJKASJKDHB</td>
              <td className="w-[75.59px] h-[19px]">1</td>
              <td className="w-[83.14px] h-[19px]">121</td>
              <td className="w-[98.26px] h-[19px]">2121</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[30.23px] h-[136.06px]">
        <table className="border-collapse w-full text-xs">
          <tbody>
            <tr className="text-xs">
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[102.04px] h-[19px]">PHP0.00</td>
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[98.26px] h-[19px]">PHP142,857.14</td>
            </tr>
            <tr className="text-xs">
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[102.04px] h-[19px]">PHP0.00</td>
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[98.26px] h-[19px]">17,142.86</td>
            </tr>
            <tr className="text-xs">
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[102.04px] h-[19px]">PHP0.00</td>
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[98.26px] h-[19px]"></td>
            </tr>
            <tr className="text-xs">
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[102.04px] h-[19px]">PHP17,142.86</td>
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[98.26px] h-[19px]"></td>
            </tr>
            <tr className="text-xs">
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[102.04px] h-[19px]"></td>
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[98.26px] h-[19px]">PHP160,000.00</td>
            </tr>
            <tr className="text-xs">
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[102.04px] h-[19px]"></td>
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[98.26px] h-[19px]">PHP160,000.00</td>
            </tr>
            <tr className="text-xs">
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[102.04px] h-[19px]"></td>
              <td className="w-[151.18px] h-[19px]"></td>
              <td className="w-[98.26px] h-[19px]">PHP160,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Size8Sales;