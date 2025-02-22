export default function FormattedNumber(value: any) {
  const numericValue = isNaN(value) ? 0 : parseFloat(value);

  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue);

  return formattedNumber;
}
