import FormattedNumber from "./FormattedNumber";

export default function FormattedAmountDue(
  AmountNetOfVat: any,
  lessWithHoldingTax: any
) {
  return FormattedNumber(
    Number(AmountNetOfVat.replace(",", "")) -
      Number(lessWithHoldingTax.replace(",", ""))
  );
}
