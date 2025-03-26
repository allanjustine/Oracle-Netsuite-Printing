import FormattedNumber from "./FormattedNumber";

export default function FormattedSumTotalMinusLessVat(
  totalSales: any,
  lessVatToMinus: any
) {
  return FormattedNumber(
    Number(totalSales.replace(/,/g, "")) -
      Number(lessVatToMinus.replace(/,/g, ""))
  );
}
