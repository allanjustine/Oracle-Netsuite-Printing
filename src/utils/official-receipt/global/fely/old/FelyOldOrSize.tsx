"use client";
import FormattedNumber from "@/utils/FormattedNumber";
import enyeFormat from "@/utils/enyeFormat";

const FelyOldOrSize = ({ data }: any) => {
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
    <div className="text-xs w-[801.25984252px] h-[408.18897638px] ml-[10px]">
      <div className="flex mt-[137.4015748px]">
        <p className="ml-[659.72440945px] w-[151.18110236px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between  mt-[15.7952755906px]">
        <div className="w-[566.92913386px]">
          <p className="ml-[317.48031496px]">
            {enyeFormat(data[1]?.[CR_Name]) || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[137.95275591px]">
          <p className="pl-[12.57480315px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[2.8267716539px]">
        <p className="ml-[312.36220472px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[6.8267716539px]">
        <p className="ml-[307.36220472px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex mt-[3.8267716539px]">
        <p className="ml-[245.77165354px]">
          {data[1]?.[CR_AmountInWords] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[6.8267716539px]">
        <div className="w-[325.03937008px]">
          <p className="ml-[254.66929134px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[274.01574803px] ml-[158.28346457px]">
          <p>
            {data[1]?.[CR_Memo].substring(0, 35) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="ml-[245.77165354px] mt-[4.1811023622]">
        <p>
          {data[1]?.[CR_Memo].substring(35) || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="w-[718.11023622px] pl-[566.92913386px] mt-[27.7952755906px]">
        <p>
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default FelyOldOrSize;
