"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import enyeFormat from "@/utils/enyeFormat";

const Aurora: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs w-[805.03937008px] h-[415.7480315px] ml-[10px]">
      <div className="flex mt-[117.16535433px]">
        <p className="pl-[658.51968504px] w-[120.94488189px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between  mt-[15.7952755906px]">
        <div className="w-[595.27559055px]">
          <p className="pl-[321.25984252px] h-[20.299212598px]">
            {enyeFormat(data[1]?.[CR_Name]) || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[209.76377953px]">
          <p className="pl-[49.133858268px] h-[20.299212598px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[3.8267716539px]">
        <p className="ml-[313.7007874px] w-[415.7480315px] h-[20.299212598px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex">
        <p className="ml-[302.36220472px] w-[415.7480315px] h-[20.299212598px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-[606.61417323px]">
          <p className="pl-[238.11023622px] h-[20.299212598px]">
            {data[1]?.[CR_AmountInWords] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[198.42519685px]">
          <p className="pl-[49.133858268px] h-[20.299212598px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-full h-[41.57480315px]">
        <p className="ml-[350.15748031px] w-[423.30708661px] h-[20.299212598px]">
          {data[1]?.[CR_Memo]?.substring(0, 70) || <span className="opacity-0">No data</span>}
        </p>
        <p className="ml-[241.88976378px] w-[521.57480315] h-[20.299212598px]">
          {data[1]?.[CR_Memo]?.substring(70) || <span className="opacity-0">No data</span>}
        </p>
      </div>
      
      <div className="w-[769.13385827px] pl-[566.92913386px] mt-[26.456692913px] text-[11px]">
        <p>
        {data[1]?.[CR_PartnerName] || ""}
        </p>
      </div>
    </div>
  );
};

export default Aurora;
