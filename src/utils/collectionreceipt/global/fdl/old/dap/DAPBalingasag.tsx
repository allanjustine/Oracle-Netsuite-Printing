"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import enyeFormat from "@/utils/enyeFormat";

const DAPBalingasag: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs w-[774.80314961px] h-[404.40944882px] ml-[10px] mt-[18.897637795px]">
      <div className="flex mt-[108.38582677px]">
        <p className="pl-[604.72440945px] w-[143.62204724px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between  mt-[19.7952755906px]">
        <div className="w-[559.37007874px]">
          <p className="pl-[302.36220472px]">
            {enyeFormat(data[1]?.[CR_Name]) || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[215.43307087px]">
          <p className="pl-[45.354330709px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[9.8267716539px]">
        <p className="pl-[294.80314961px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[6.8267716539px]">
        <p className="ml-[287.24409449px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[3.8267716539px]">
        <div className="w-[595.27559055px]">
          <p className="pl-[222.99212598px]">
            {data[1]?.[CR_AmountInWords] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[102.04724409px]">
          <p className="pl-[46.354330709px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[521.57480315px] pl-[340.15748031px] mt-[6.8267716539px]">
        <p>
          {data[1]?.[CR_Memo] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="w-[774.80314961px] pl-[566.92913386px] mt-[45.7952755906px] text-[11px]">
        <p>
        {data[1]?.[CR_PartnerName]}
        </p>
      </div>
    </div>
  );
};

export default DAPBalingasag;
