import FormattedNumber from "./FormattedNumber";

export default function FormattedAmountDue(
  AmountNetOfVat: any,
  lessWithHoldingTax: any
) {
  return FormattedNumber(
    Number(AmountNetOfVat.replace(/,/g, "")) -
      Number(lessWithHoldingTax.replace(/,/g, ""))
  );
}
