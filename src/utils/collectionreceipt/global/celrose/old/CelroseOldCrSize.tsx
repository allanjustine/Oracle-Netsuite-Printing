"use client";
import { PrintPageProps } from "@/types/types";

const CelroseOldCrSize: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs w-[805.03937008px] h-[415.7480315px]">
      <div className="flex mt-[95.1732283431px]">
        <p className="pl-[582.28346457px] w-[143.62204724px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between mt-[9.6771653556px]">
        <div className="w-[574.48818898px]">
          <p className="pl-[283.46456693px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[207.87401575px]">
          <p className="pl-[40.133858268px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex">
        <p className="pl-[275.90551181px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex">
        <p className="ml-[268.34645669px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-[600.94488189px]">
          <p className="pl-[211.65354331px]">
            {data[1]?.[CR_AmountInWords] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[181.41732283px]">
          <p className="pl-[37.795275591px]">
            {data[1]?.[CR_AmountInFigures] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[782.36220472px]">
        <p className="w-[419.52755906px] ml-[309.92125984px]">
          {data[1]?.[CR_Memo].substring(0, 70) || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="w-[782.36220472px]">
        <p className="w-[521.57480315px] ml-[245.66929134px]">
          {data[1]?.[CR_Memo].substring(70) || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>

      <div className="w-[782.36220472px] pl-[529.13385827px] mt-[9.8976377953px] text-[11px]">
        <p className="text-center w-[170.07874016px]">
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default CelroseOldCrSize;
