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

const Sablayan = ({ data }: any) => {
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
      <div className="w-[117.16535433px] flex items-center mt-[106.38582677px] ml-[604.72440945px] h-[21.921259843px]">
        <p className="text-xs ml-[11.338582677px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="h-[61.984251969px] mt-[37.039370079px] ml-[149.29133858px]">
        <p className="w-[563.1496063px] ml-[16.338582677px] h-[20.409448819px] flex items-center">
          {enyeFormat(data[1]?.[CR_Name]) || <span className="opacity-0">No data</span>}
        </p>
        <p className="w-[563.1496063px] ml-[16.338582677px] h-[20.409448819px] flex items-center">
          {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
        </p>
        <p className="w-[563.1496063px] ml-[16.338582677px] h-[20.409448819px] flex items-center">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex w-[680.31496063px] mx-[37.795275591px] mt-[34.37007874px]">
        <div className="flex flex-col w-[568.81889764px]">
          <p className="h-[23.433070866px] pl-[88.149606299px]">
            {data[1]?.[CR_Memo]?.substring(0, 92) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
          <p className="pl-[56.692913386px] h-[23.433070866px]">
            {data[1]?.[CR_Memo]?.substring(92) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[113.38582677px]">
          <p className="text-xs text-center h-[23.433070866px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="flex w-[680.31496063px] mx-[37.795275591px]">
        <div className="text-[11px] w-[568.81889764px] flex-none">
          <p><span className="opacity-0">No data</span></p>
          <p className="text-center w-[162.51968504px] ml-[260.78740157px]">
            {data[1]?.[CR_PartnerName] || ""}
          </p>
        </div>
        <div className="w-[113.38582677px]">
          <p className="text-xs text-center h-[23.433070866px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
          <p className="text-xs text-center h-[23.433070866px]">
            {data[1]?.[CR_Reference] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sablayan;