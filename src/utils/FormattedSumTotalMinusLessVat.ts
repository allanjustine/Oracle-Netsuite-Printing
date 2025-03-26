import FormattedNumber from "./FormattedNumber";

export default function FormattedSumTotalMinusLessVat(
  totalSales: any,
  lessVatToMinus: any
) {
  console.log(totalSales, lessVatToMinus);
  return FormattedNumber(
    Number(totalSales.replace(/,/g, "")) -
      Number(lessVatToMinus.replace(/,/g, ""))
  );
}
