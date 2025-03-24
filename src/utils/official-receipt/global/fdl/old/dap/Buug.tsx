"use client";
import FormattedNumber from "@/utils/FormattedNumber";

const Buug = ({ data }: any) => {
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
    <div className="text-xs w-[585.82677165px] h-[343.93700787px] ml-[10px]">
      <div className="flex mt-[101.38582677px]">
        <p className="ml-[472.44094488px] w-[147.4015748px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex w-[585.82677165px] mt-[26.7952755906px]">
        <div className="w-[442.20472441px]">
          <p className="ml-[264.56692913px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[139.08661417px]">
          <p className="ml-[49.133858268px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[9.8267716539px]">
        <p className={`${data[1]?.[CR_Address].length > 28 ? 'text-[11px]' : ''} ml-[272.12598425px] w-[381.73228346px]`}>
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[6.8267716539px] w-[585.82677165px]">
        <p className={`${data[1]?.[CR_BusinessStyle].length > 28 ? 'text-[11px]' : ''} ml-[279.12598425px] w-[381.73228346px]`}>
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
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[274.01574803px] ml-[132.28346457px]">
          <p>
            {data[1]?.[CR_Memo] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="mt-[25.7952755906px]">
        <p className="w-[577.88976378px] pl-[445.98425197px] mt-[6.7952755906px] text-[11px]">
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No Data</span>
          )}a
        </p>
      </div>
    </div>
  );
};

export default Buug;
