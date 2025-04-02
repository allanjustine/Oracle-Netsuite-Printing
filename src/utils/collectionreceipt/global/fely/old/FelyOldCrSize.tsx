"use client";
import FormattedNumber from "@/utils/FormattedNumber";
import enyeFormat from "@/utils/enyeFormat";

const FelyOldCrSize = ({ data }: any) => {
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
    <div className="text-xs w-[812.5984252px] h-[415.7480315px]">
      <div className="flex mt-[119.38582677px]">
        <p className="pl-[680.31496063px] w-[120.94488189px]">
          {enyeFormat(data[1]?.[CR_Name]) || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between mt-[19.7952755906px]">
        <div className="w-[604.72440945px]">
          <p className="pl-[340.15748031px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[151.18110236px]">
          <p className="pl-[37.7952755906px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[4.8267716539px]">
        <p className="pl-[340.15748031px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[4.8267716539px]">
        <p className="ml-[340.15748031px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex mt-[2.8267716539px]">
        <p className="ml-[272.12598425px]">
          {data[1]?.[CR_AmountInWords] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[6.8267716539px]">
        <div className="w-[385.51181102px]">
          <p className="ml-[283.46456693px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[294.80314961px] ml-[113.38582677px]">
          <p>
            {data[1]?.[CR_Memo].substring(0, 50) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="ml-[272.12598425px] mt-[4.1811023622]">
        <p>
          {data[1]?.[CR_Memo].substring(50) || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="w-[718.11023622px] pl-[566.92913386px] mt-[30.7952755906px]">
        <p>
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default FelyOldCrSize;