"use client";
import FormattedNumber from "@/utils/FormattedNumber";

const Dasmariñas = ({ data }: any) => {
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
    <div className="text-xs w-[608.50393701px] h-[404.40944882px]">
      <div className="flex mt-[99.60629921px]">
        <p className="ml-[491.33858268px] w-[94.488188976px] h-[22.677165354px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between mt-[7.7952755906px]">
        <div className="w-[491.33858268px]">
          <p className={`ml-[309.92125984px] h-[22.677165354px] ${data[1]?.[CR_Name]?.length > 28 ? "text-[9.5px]" : ""}`}>
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[117.16535433px]">
          <p className="pl-[45.354330709px] h-[22.677165354px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex">
        <p className={`ml-[291.02362205px] w-[226.77165354px] h-[22.677165354px] ${data[1]?.[CR_Address]?.length > 28 ? "text-[9.5px]" : ""}`}>
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex">
        <p className={`ml-[291.02362205px] w-[241.88976378px] h-[22.677165354px] ${data[1]?.[CR_BusinessStyle]?.length > 28 ? "text-[9.5px]" : ""}`}>
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex">
        <p className={`ml-[230.5511811px] h-[22.677165354px] w-[325.03937008px] ${data[1]?.[CR_AmountInWords]?.length > 28 ? "text-[9.5px]" : ""}`}>
          {data[1]?.[CR_AmountInWords] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full">
        <div className="w-[332.5984252px]">
          <p className="ml-[245.66929134px] h-[22.677165354px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[275.90551181px]">
          <p className={`h-[22.677165354px] ml-[113.38582677px] ${data[1]?.[CR_Memo]?.length > 28 ? "text-[9.5px]" : ""}`}>
            {data[1]?.[CR_Memo] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[608.50393701px] mt-[43.464566929px]">
        <p className="w-[162.51968504px] ml-[423.30708661px] h-[22.677165354px]">
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Dasmariñas;
