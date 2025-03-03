"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const DSMBayugan = ({ data }: any) => {
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

  return (
    <div className="text-xs h-[400.62992126px] w-[767.24409449px]">
      <div className="w-full mt-[94.488188976px]">
        <p className="w-[120.94488189px] pl-[642.51968504px]">
          {data[1]?.[CR_Date] || ""}
        </p>
      </div>
      <div className="w-full h-[19.409448819px] mt-[15.677165354px]">
        <p className="w-[548.03149606px] pl-[170.07874016px]">
          {data[1]?.[CR_Name] || ""}
        </p>
      </div>
      <div className="w-full h-[19.409448819px] mt-[2.677165354px]">
        <p className="w-[548.03149606px] pl-[170.07874016px]">
          {data[1]?.[CR_TIN] || ""}
        </p>
      </div>
      <div className="w-[608.50393701px] h-[19.409448819px] mt-[2.677165354px]">
        <p className="w-[434.64566929px] ml-[170.07874016px]">
          {data[1]?.[CR_Address] || ""}
        </p>
      </div>
      <div className="flex mx-[22.677165354px] mt-[15.8267716539px]">
        <div className="w-[782.36220472px]">
          <p className="w-[419.52755906px] ml-[347.71653543px]">
            {data[1]?.[CR_Memo].substring(0, 70) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="mt-[15.456692914px] ml-[20px] w-[340.15748031px]">
          <p className="text-[10px] text-center">
            {data[1]?.[CR_AmountInFigures] || "Allan J. Dela Cruz"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DSMBayugan;
