"use client";
import { PrintPageProps } from "@/types/types";

const Size2Collection: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-sm w-[774.8px] h-[396.8px] pt-[106px] border-2">
      <div>
        <p className="ml-[189px] text-xs">{data[1]?.[mainLineName]?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ")}</p>
      </div>
      <div className="ml-[189px]">
        <p>{data[1]?.[mainLineName]?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ")}</p>
        <p>Tin number 0123758</p>
        <p>{data[1]?.[billingAddress]}</p>
      </div>
      <table className="w-[646px] text-sm">
        <thead>
          <tr>
            <th className="w-[529px] h-[23px]" />
            <th className="w-[117px] h-[23px]" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-[529px] pl-[92px] text-wrap">
              data this has to be the data data this has to be the data data
              this has to be the data data this has to be the data
            </td>
            <td className="w-[117px] flex justify-start">
              {data[1]?.[amount]}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-[19px] flex w-[646px]">
        <p className="w-[529px]" />
        <p className="w-[117px]">{data[1]?.[amount]}</p>
      </div>
      <div className="flex w-[646px]">
        <p className="w-[529px]" />
        <p className="w-[117px] text-xs">{data[1]?.[internalIdColumnIndex]}</p>
      </div>
    </div>
  );
};

export default Size2Collection;
