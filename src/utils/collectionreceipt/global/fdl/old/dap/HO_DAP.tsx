"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import enyeFormat from "@/utils/enyeFormat";

const HO_DAP: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs w-[612.28346457px] h-[381.73228346px] ml-[10px]">
      <div className="flex mt-[94.488188976px]">
        <p className="pl-[472.44094488px] w-[113.38582677px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between  mt-[30.236220472px]">
        <div className="w-[219.21259843px]">
          <p className="pl-[275.90551181px]">
            {enyeFormat(data[1]?.[CR_Name]) || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[120.94488189px]">
          <p className="pl-[34.015748031px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[9.8267716539px]">
        <p className="pl-[260.78740157px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[6.8267716539px]">
        <p className="ml-[257.00787402px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[3.8267716539px]">
        <div className="w-[253.22834646px]">
          <p className="pl-[207.87401575px]">
            {data[1]?.[CR_AmountInWords] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[94.488188976px]">
          <p className="pl-[49.133858268px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[287.24409449px] pl-[298.58267717px] mt-[6.8267716539px]">
        <p>
          {data[1]?.[CR_Memo] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="w-[151.18110236px] pl-[434.64566929px] mt-[37.795275591px] text-[11px]">
        <p>
        {data[1]?.[CR_PartnerName]}
        </p>
      </div>
    </div>
  );
};

export default HO_DAP;
