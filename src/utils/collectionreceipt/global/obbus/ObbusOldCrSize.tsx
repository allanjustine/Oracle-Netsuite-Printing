"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";

const ObbusOldCrSize: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs w-[752.12598425px] h-[389.29133858px] ml-[10px]">
      <div className="flex mt-[110.1732283431px]">
        <p className="pl-[649.72440945px] w-[143.62204724px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between  mt-[15.7952755906px]">
        <div className="w-[566.92913386px]">
          <p className="pl-[316.7007874px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[202.58267717px]">
          <p className="pl-[71.795275591px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[3.8267716539px]">
        <p className="pl-[312.36220472px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[6.8267716539px]">
        <p className="ml-[302.80314961px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[3.8267716539px]">
        <div className="w-[604.72440945px]">
          <p className="pl-[239.33070866px]">
            {data[1]?.[CR_AmountInWords] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[164.40944882px]">
          <p className="pl-[60.354330709px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-full h-[41.57480315px] mt-[6.8267716539px]">
        <p className="ml-[350.15748031px] w-[423.30708661px] h-[20.299212598px]">
          {data[1]?.[CR_Memo]?.substring(0, 65) || <span className="opacity-0">No data</span>}
        </p>
        <p className="ml-[241.88976378px] w-[521.57480315] h-[20.299212598px]">
          {data[1]?.[CR_Memo]?.substring(65) || <span className="opacity-0">No data</span>}
        </p>
      </div>
      
      <div className="w-[769.13385827px] pl-[566.92913386px] mt-[25.7952755906px] text-[11px]">
        <p>
        {data[1]?.[CR_PartnerName] || ""}
        </p>
      </div>
    </div>
  );
};

export default ObbusOldCrSize;
