export default function enyeFormat(text: any) {
  const formattedEnye =
    text?.replace(/Ã/g, "Ñ").replace(/Ã‘/g, "Ñ").replace(/Ã±/g, "ñ") || "";

  return formattedEnye;
}
