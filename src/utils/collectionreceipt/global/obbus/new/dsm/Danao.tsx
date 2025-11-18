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

const Danao = ({ data }: any) => {
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
    <div className="text-xs h-[366.61417323px] w-[716.22047244px]">
      <div className="w-[113.38582677px] flex items-center mt-[83.9291338579px] ml-[551.81102362px] h-[21.921259843px]">
        <p className="text-xs ml-[11.338582677px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="h-[52.913385827px] mt-[26.456692913px] ml-[154.18110236px]">
        <p className="w-[563.1496063px] ml-[11.338582677px] h-[17.63779527566667px] flex items-center">
          {enyeFormat(data[1]?.[CR_Name]) || <span className="opacity-0">No data</span>}
        </p>
        <p className="w-[563.1496063px] ml-[11.338582677px] h-[17.63779527566667px] flex items-center">
          {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
        </p>
        <p className="w-[563.1496063px] ml-[11.338582677px] h-[17.63779527566667px] flex items-center">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex w-[650.07874016px] ml-[24.566929134px] mt-[36.614173228px] h-[41.57480315px]">
        <div className="flex flex-col items-center w-[629.29133858px]">
          <div className="w-[519.68503937px] h-[23.433070866px]">
            <p className="ml-[90.708661417px]">
              {data[1]?.[CR_Memo]?.substring(0, 62) || (
                <span className="opacity-0">No data</span>
              )}
            </p>
          </div>
          <div className="w-[519.68503937px] h-[23.433070866px]">
            <p className="ml-[11.338582677px]">
              {data[1]?.[CR_Memo]?.substring(62) || (
                <span className="opacity-0">No data</span>
              )}
            </p>
          </div>
        </div>
        <div className="w-[111.49606299px]">
          <p className="text-xs pl-1.5 h-[23.433070866px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="flex w-[650.07874016px] ml-[24.566929134px]">
        <div className="text-[11px] flex-none w-[385.88976378px]">
          <p className="ml-[226.77165354px] text-center w-[154.18110236px]">
            <span className="opacity-0">No data</span>
          </p>
          <p className="ml-[226.77165354px] text-center w-[154.18110236px]">
            {data[1]?.[CR_PartnerName] || ""}
          </p>
        </div>
        <div className="w-[243.77952756px]">
          <p className="text-xs text-center h-[23.433070866px] ml-[147.4015748px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
          <p className="text-xs text-center h-[23.433070866px]">
            {/* {data[1]?.[CR_Reference] || (
              <span className="opacity-0">No data</span>
            )} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Danao;
