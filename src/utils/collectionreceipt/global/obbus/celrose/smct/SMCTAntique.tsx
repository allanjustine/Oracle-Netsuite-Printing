"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";

const SMCTAntique: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs w-[801.25984252px] h-[408.18897638px] ml-[15px]">
      <div className="flex mt-[132.28346457px]">
        <p className="pl-[619.84251969px] w-[139.84251969px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between mt-[12.094488189px]">
        <div className="w-[619.84251969px]">
          <p className="pl-[309.92125984px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[105.82677165px]">
          <p className="pl-[45.354330709px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[6.338582677px]">
        <p className="pl-[309.92125984px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[.338582677px]">
        <p className="pl-[321.25984252px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[11.338582677px]">
        <div className="w-[612.28346457px]">
          <p className="pl-[234.33070866px]">
            {data[1]?.[CR_AmountInWords] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[98.267716535px]">
          <p className="pl-[49.133858268px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[763.46456693px] pl-[370.39370079px] mt-[11.338582677px]">
        <p className={`${data[1]?.[CR_Memo].length > 40 ? "text-[10px]" : ""}`}>
          {data[1]?.[CR_Memo] || <span className="opacity-0">No data</span>}
        </p>
      </div>

      <div className="w-[763.46456693px] pl-[548.03149606px] mt-[18.897637795px] text-[11px]">
        <p>{data[1]?.[CR_PartnerName] || ""}</p>
      </div>
    </div>
  );
};

export default SMCTAntique;
