"use client";
import { PrintPageProps } from "@/types/types";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";
import enyeFormat from "@/utils/enyeFormat";

const DSMCatarman2 = ({ data }: any) => {
  const CR_Date = 0;
  const CR_Name = 1;
  const CR_TIN = 2;
  const CR_Address = 3;
  const CR_BusinessStyle = 4;
  const CR_AmountInFigures = 5;
  const CR_AmountInWords = 6;
  const CR_Memo = 7;
  const CR_FormOfPayment = 8;
  const CR_PartnerName = 9;
  const CR_Reference = 10;

  return (
    <div className="text-xs h-[400.62992126px] w-[767.24409449px]">
      <div className="w-[120.94488189px] flex items-center mt-[101.9291338579px] ml-[602.83464567px] h-[21.921259843px]">
        <p className="text-xs ml-[11.338582677px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="h-[61.984251969px] mt-[19.039370079px] ml-[164.40944882px]">
        <p className="w-[563.1496063px] ml-[11.338582677px] h-[20.409448819px] flex items-center">
          {enyeFormat(data[1]?.[CR_Name]) || <span className="opacity-0">No data</span>}
        </p>
        <p className="w-[563.1496063px] ml-[11.338582677px] h-[20.409448819px] flex items-center">
          {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
        </p>
        <p className="w-[563.1496063px] ml-[11.338582677px] h-[20.409448819px] flex items-center">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex w-[699.59055118px] ml-[24.566929134px] mt-[18.37007874px]">
        <div className="flex flex-col items-center w-[550.50393701px]">
          <p className="w-[491.33858268px] h-[23.433070866px] ml-[110.818897638px]">
            {data[1]?.[CR_Memo].substring(0, 70) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
          <p className="w-[574.48818898px] ml-[11.338582677px] h-[23.433070866px]">
            {data[1]?.[CR_Memo].substring(70) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[120.56692913px]">
          <p className="text-xs text-center h-[23.433070866px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="flex w-[699.59055118px] ml-[24.566929134px]">
        <div className="text-[11px] flex-none w-[425.19685039px]">
          <p className="ml-[250.90551181px] text-center">
            {data[1]?.[CR_PartnerName] || ""}
          </p>
        </div>
        <div className="w-[291.77952756px]">
          <p className="text-xs text-center h-[23.433070866px] ml-[98.62992126px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DSMCatarman2;