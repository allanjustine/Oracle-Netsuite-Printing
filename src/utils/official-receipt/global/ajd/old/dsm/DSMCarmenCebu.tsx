"use client";
import FormattedNumber from "@/utils/FormattedNumber";

const DSMCarmenCebu = ({ data }: any) => {
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
    <div className="text-xs w-[628.15748031px] h-[393.07086614px]">
      <p className="ml-[480px] mt-[104.26771654px] w-[105.82677165px] h-[22.677165354px]">
        {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
      </p>
      <div className="flex w-[628.15748031px] mt-[4.5354330709px]">
        <div className="w-[468.66141732px]">
          <p className="ml-[309.92125984px] text-xs h-[22.677165354px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[159.49606299px]">
          <p className="ml-[52.913385827px] h-[22.677165354px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex ml-[294.80314961px]">
        <p className={`w-[226.77165354px] h-[22.677165354px] ${data[1]?.[CR_Address]?.length > 28 ? "text-[9.5px]" : "text-xs"}`}>
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex text-xs ml-[313.7007874px]">
        <p className="w-[226.77165354px] h-[22.677165354px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex ml-[219.21259843px]">
        <p className="w-[340.15748031px] h-[22.677165354px]">
          {data[1]?.[CR_AmountInWords] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-[628.15748031px]">
        <div className="w-[332.5984252px]">
          <p className="ml-[234.33070866px] h-[22.677165354px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[253.22834646px]">
          <p className={`ml-[145.18110236px] ${data[1]?.[CR_Memo]?.length > 28 ? "text-[9.5px]" : "text-xs"} h-[22.677165354px]`}>
            {data[1]?.[CR_Memo] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="w-[196.53543307px] ml-[408.18897638px] mt-[43.913385827px]">
        <p className="text-center">
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default DSMCarmenCebu;
