"use client";

const BjvOldOrSize = ({ data }: any) => {
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
    <div className="text-xs w-[755.90551181px] h-[404.03149606px] ml-[10px]">
      <div className="flex mt-[82.488188976px]">
        <p className="ml-[585.82677165px] w-[147.4015748px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex w-[755.90551181px] mt-[26.7952755906px]">
        <div className="w-[578.26771654px]">
          <p className="ml-[313.7007874px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[177.63779528px]">
          <p className="ml-[30.236220472px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex ml-[302.36220472px] mt-[9.8267716539px]">
        <p className="w-[362.83464567px] text-[11px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[6.8267716539px] w-[755.90551181px]">
        <p className="ml-[294.80314961px] w-[381.73228346px] text-[10px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex mt-[3.8267716539px]">
        <p className="ml-[226.77165354px] w-[472.44094488px]">
          {data[1]?.[CR_AmountInWords] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[6.8267716539px]">
        <div className="w-[325.03937008px]">
          <p className="ml-[245.66929134px]">
            {data[1]?.[CR_AmountInFigures] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[274.01574803px] ml-[132.28346457px]">
          <p>
            {data[1]?.[CR_Memo].substring(0, 45) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="ml-[226.77165354px] mt-[4.1811023622]">
        <p>
          {data[1]?.[CR_Memo].substring(45) || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="w-[718.11023622px] mt-[25.7952755906px]">
        <p className="ml-[566.92913386px]">
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default BjvOldOrSize;
