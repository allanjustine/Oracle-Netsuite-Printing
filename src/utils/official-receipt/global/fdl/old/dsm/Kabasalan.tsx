"use client";
import FormattedNumber from "@/utils/FormattedNumber";
import enyeFormat from "@/utils/enyeFormat";

const Kabasalan = ({ data }: any) => {
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
      <div className="flex mt-[75.590551181px]">
        <p className="ml-[457.32283465px] w-[105.82677165px]">
          {enyeFormat(data[1]?.[CR_Name]) || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex w-[585.82677165px] mt-[15.456692912px]">
        <div className="w-[453.54330709px]">
          <p className="ml-[260.78740157px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[136.44094488px]">
          <p className={`ml-[49.133858268px] ${data[1]?.[CR_TIN]?.length > 10 ? 'text-[9.5px]' : ''}`}>
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div> 
      <div className="flex mt-[9.8267716539px]">
        <p className={`${data[1]?.[CR_Address]?.length > 28 ? 'text-[9.5px]' : ''} ml-[257.00787402px] w-[251.33858268px]`}>
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[6.8267716539px] w-[585.82677165px]">
        <p className={`${data[1]?.[CR_BusinessStyle]?.length > 28 ? 'text-[9.5px]' : ''} ml-[263.00787402px] w-[251.33858268px]`}>
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex mt-[3.8267716539px] w-full">
        <p className={`ml-[196.53543307px] w-[347.71653543px] ${data[1]?.[CR_AmountInWords]?.length > 28 ? "text-[9.5px]" : "" }`}>
          {data[1]?.[CR_AmountInWords] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[6.8267716539px]">
        <div className="w-[268.34645669px]">
          <p className="ml-[204.09448819px]">
            {FormattedNumber(data[1]?.[CR_AmountInFigures]) || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[298.58267717px]">
          <p className={`${data[1]?.[CR_Memo]?.length > 28 ? 'text-[9.5px]' : ''} ml-[105.82677165px]`}>
            {data[1]?.[CR_Memo] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="mt-[25.7952755906px]">
        <p className="w-[577.88976378px] pl-[445.98425197px] mt-[56.692913386px] text-[11px]">
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Kabasalan;
