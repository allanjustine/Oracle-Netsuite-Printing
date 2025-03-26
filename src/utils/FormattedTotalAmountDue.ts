import FormattedNumber from "./FormattedNumber";

export default function FormattedTotalAmountDue(amountDue: any, addVat: any) {
  return FormattedNumber(
    Number(amountDue.replace(/,/g, "")) + Number(addVat.replace(/,/g, ""))
  );
}
