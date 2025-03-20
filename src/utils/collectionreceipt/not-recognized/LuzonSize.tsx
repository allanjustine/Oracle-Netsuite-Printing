"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";

const LuzonSize: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs w-[577.88976378px] h-[381.73228346px]">
      <div className="flex mt-[87.1732283431px]">
        <p className="pl-[472.44094488px] w-[86.551181102px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between mt-[14.7952755906px]">
        <div className="w-[442.20472441px]">
          <p className="pl-[264.56692913px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[139.08661417px]">
          <p className="pl-[49.133858268px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[9.8267716539px]">
        <p className={`${data[1]?.[CR_Address].length > 28 ? 'text-xs' : ''} ml-[272.12598425px] w-[204.09448819px]`}>
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[11.8267716539px]">
        <p className="ml-[279.12598425px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[9.8267716539px]">
        <div className="w-[449.76377953px]">
          <p className="pl-[204.09448819px]">
            {data[1]?.[CR_AmountInWords] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[129.25984252px]">
          <p className="pl-[47.244094488px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[551.81102362px] pl-[309.92125984px] mt-[8.8267716539px]">
        <p>
          {data[1]?.[CR_Memo].substring(0, 40) || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="w-[551.81102362px] pl-[207.87401575px] mt-[9.8267716539px]">
        <p>
          {data[1]?.[CR_Memo].substring(40) || <span className="opacity-0">No data</span>}
        </p>
      </div>
      
      <div className="w-[577.88976378px] pl-[445.98425197px] mt-[6.7952755906px] text-[11px]">
        <p>
        {data[1]?.[CR_PartnerName] || ""}
        </p>
      </div>
    </div>
  );
};

export default LuzonSize;
