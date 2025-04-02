"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";

const SMCTLipa: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs w-[767.24409449px] h-[400.62992126px]">
      <div className="flex mt-[113.38582677px]">
        <p className="pl-[604.72440945px] w-[151.18110236px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between mt-[18.897637795px]">
        <div className="w-[548.03149606px]">
          <p className="pl-[302.36220472px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[170.07874016px]">
          <p className="pl-[37.795275591px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[15.118110236px]">
        <p className="pl-[294.80314961px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[15.118110236px]">
        <p className="ml-[294.80314961px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[3.8267716539px]">
        <div className="w-[585.82677165px]">
          <p className="pl-[226.77165354px]">
            {data[1]?.[CR_AmountInWords] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[143.62204724px]">
          <p className="pl-[49.133858268px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[737.00787402px] mt-[7.8267716539px]">
        <p className="w-[396.8503937px] ml-[340.15748031px]">
          {data[1]?.[CR_Memo].substring(0, 70) || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="w-[737.00787402px] mt-[6.8267716539px]">
        <p className="w-[510.23622047px] ml-[226.77165354px]">
          {data[1]?.[CR_Memo].substring(70) || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>

      <div className="w-[737.00787402px] pl-[566.92913386px] mt-[28.7952755906px] text-[11px]">
        <p className="text-center w-[170.07874016px]">
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default SMCTLipa;
