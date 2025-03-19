"use client";

const Argao = ({ data }: any) => {
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

  return (
    <div className="text-xs w-[778.58267717px] h-[396.8503937px] ml-[2px]">
      <div className="flex mt-[100.38582677px]">
        <p className="pl-[604.72440945px] w-[151.18110236px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between mt-[28.7952755906px]">
        <div className="w-[566.92913386px]">
          <p className="pl-[317.48031496px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[137.95275591px]">
          <p className="pl-[1.57480315px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[5.8267716539px]">
        <p className="pl-[302.36220472px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[4.8267716539px]">
        <p className="ml-[302.36220472px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex mt-[2.8267716539px]">
        <p className="ml-[226.77165354px]">
          {data[1]?.[CR_AmountInWords] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[6.8267716539px]">
        <div className="w-[325.03937008px]">
          <p className="ml-[245.66929134px]">
            {data[1]?.[CR_AmountInFigures] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[274.01574803px] ml-[132.28346457px]">
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
      <div className="w-[718.11023622px] pl-[566.92913386px] mt-[28.7952755906px]">
        <p>
          {data[1]?.[CR_PartnerName] || (
            <span className="opacity-0">No Data</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Argao;
