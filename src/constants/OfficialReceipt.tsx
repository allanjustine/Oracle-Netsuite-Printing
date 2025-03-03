import { useAuth } from "@/context/authcontext";
import Consolacion from "@/utils/official-receipt/global/fdl/old/dsm/Consolacion";

export function OfficialReceipt({ data }: any) {
  const { user } = useAuth();
  switch (user?.branchCode) {
    case "DSMP":
      return <Consolacion data={data} />;
    default:
      return (
        <div className="text-center flex items-center justify-center h-screen font-bold text-lg">
          Sorry, This page is temporary unavailable on your branch
        </div>
      );
  }
}
