"use client";
import FormattedNumber from "@/utils/FormattedNumber";

const HDKabasalan = ({ data }: any) => {
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
    <div className="text-xs w-[608.50393701px] h-[381.73228346px]">
      <div className="flex mt-[79.38582677px]">
        <p className="ml-[491.33858268px] w-[113.38582677px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex w-[608.50393701px] mt-[8.7952755906px]">
        <div className="w-[472.44094488px]">
          <p className="ml-[283.46456693px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[113.38582677px]">
          <p className="ml-[37.795275591px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex ml-[264.56692913px]">
        <p className="w-[245.66929134px] text-[11px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[6.8267716539px] w-[608.50393701px]">
        <p className="ml-[283.46456693px] w-[264.56692913px] text-xs">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex">
        <p className="ml-[207.87401575px] w-[359.05511811px]">
          {data[1]?.[CR_AmountInWords] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-[302.36220472px]">
          <p className="ml-[226.77165354px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[170.07874016px] ml-[94.488188976px]">
          <p>
            {data[1]?.[CR_Memo].substring(0, 35) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="ml-[226.77165354px] mt-[4.1811023622]">
        <p>
          {data[1]?.[CR_Memo].substring(35) || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="w-[585.82677165px] mt-[25.7952755906px]">
        <p className="ml-[434.64566929px]">
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default HDKabasalan;