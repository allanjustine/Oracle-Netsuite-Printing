"use client";
import { PrintPageProps } from "@/types/types";

const Size4Collection: React.FC<PrintPageProps> = ({ data }) => {
  const internalIdColumnIndex = 0;
  const mainLineName = 1;
  const billingAddress = 2;
  const billingAddress1 = 3;
  const billingAddress2 = 4;
  const billingAddress3 = 5;
  const taxNumber = 6;
  const date = 7;
  const terms = 8;
  const item = 9;
  const quantity = 10;
  const units = 11;
  const units1 = 12;
  const itemRate = 13;
  const itemRate1 = 14;
  const amount = 15;
  const totalSales = 16;
  const amountTax = 17;
  const netTax = 18;
  const transactionTotal = 19;

  return (
    <div className="text-sm flex justify-evenly w-[812px] h-[434px] pl-[45px] pr-[38px] pt-[27px] border-2 border-black">
      <div className="w-[212px] mt-[30px] mr-[11px]">
        <table className="text-sm">
          <tbody>
              <tr className="h-[19px]">
                <td className="text-center w-[106px]"></td>
                <td className="text-center w-[106px]"></td>
              </tr>
            <tr className="h-[19px]"></tr>
            <tr className="h-[19px]">
              <td className="text-left w-[106px]"></td>
              <td className="text-center w-[106px]"></td>
            </tr>
            <tr className="h-[19px]">
              <td className="text-left w-[106px]"></td>
              <td className="text-center w-[106px]"></td>
            </tr>
            <tr className="h-[19px]">
              <td className="text-left w-[106px]"></td>
              <td className="text-center w-[106px]"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full mt-[94px]">
        <div className="flex justify-end w-full mb-[9px]">
          <p>{data[1]?.[date]}</p>
        </div>
        <div className="flex justify-between h-[19px]">
          <p className="ml-[68px]">Noreen Angeleen S. Darunday</p>
          <p>TIN NUMBER 0186957</p>
        </div>
        <div className="h-[19px]">
          <p className="ml-[68px]">Poblacion, Corella, Bohol</p>
        </div>
        <div className="h-[19px]">
          <p className="ml-[68px]">Motorcycle installment for the year 2024 and so on vice versa</p>
        </div>
        <div className="h-[19px]">
          <p>One hundred thousand only</p>
        </div>
        <div className="h-[19px] flex">
          <p className="ml-[19px] mr-[132px]">100,000</p>
          <p>Car installment for year 20</p>
        </div>
      </div>
    </div>
  );
};

export default Size4Collection;
