"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import enyeFormat from "@/utils/enyeFormat";

const CarmenCdo: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs w-[805.03937008px] h-[415.7480315px]">
      <div className="flex mt-[103.1732283431px]">
        <p className="pl-[650.07874016px] w-[143.62204724px]">
          {enyeFormat(data[1]?.[CR_Name]) || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between  mt-[14.7952755906px]">
        <div className="w-[574.48818898px]">
          <p className="pl-[321.25984252px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[207.87401575px]">
          <p className="pl-[49.133858268px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[6.8267716539px]">
        <p className="pl-[313.7007874px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[3.8267716539px]">
        <p className="ml-[306.14173228px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[3.8267716539px]">
        <div className="w-[600.94488189px]">
          <p className="pl-[249.4488189px]">
            {data[1]?.[CR_AmountInWords] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[181.41732283px]">
          <p className="pl-[52.913385827px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[782.36220472px] mt-[3.8267716539px]">
        <p className="w-[419.52755906px] ml-[347.71653543px]">
          {data[1]?.[CR_Memo].substring(0, 70) || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="w-[782.36220472px] mt-[6.8267716539px]">
        <p className="w-[521.57480315px] ml-[245.66929134px]">
          {data[1]?.[CR_Memo].substring(70) || <span className="opacity-0">No data</span>}
        </p>
      </div>
      
      <div className="w-[782.36220472px] pl-[566.92913386px] mt-[32.7952755906px] text-[11px]">
        <p>
        {data[1]?.[CR_PartnerName] || ""}
        </p>
      </div>
    </div>
  );
};

export default CarmenCdo;
