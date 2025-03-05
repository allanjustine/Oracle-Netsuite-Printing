import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import DAP1Size from "@/utils/salesinvoice/not-recognized/si-csi-sizes/DAP1Size";
import DSMSISize from "@/utils/salesinvoice/not-recognized/si-csi-sizes/DSMSISize";
import DapCsiSize from "@/utils/salesinvoice/not-recognized/si-csi-sizes/DapCsiSize";
import DsmCsiSize from "@/utils/salesinvoice/not-recognized/si-csi-sizes/DsmCsiSize";
import HondaDesSize from "@/utils/salesinvoice/not-recognized/si-csi-sizes/HdSiSize";
import LuzonSize from "@/utils/salesinvoice/not-recognized/LuzonSize";
import Size1Sales from "@/utils/salesinvoice/not-recognized/size1";
import Size1SalesOld from "@/utils/salesinvoice/not-recognized/size1-old";
import Size2Sales from "@/utils/salesinvoice/not-recognized/size2";
import Size2SalesOld from "@/utils/salesinvoice/not-recognized/size2-old";
import Size3Sales from "@/utils/salesinvoice/not-recognized/size3";
import Size4Sales from "@/utils/salesinvoice/not-recognized/size4";
import Size5Sales from "@/utils/salesinvoice/not-recognized/size5";
import Size6Sales from "@/utils/salesinvoice/not-recognized/size6";
import Size7Sales from "@/utils/salesinvoice/not-recognized/size7";
import Size8Sales from "@/utils/salesinvoice/not-recognized/size8";
import Size9Sales from "@/utils/salesinvoice/not-recognized/size9";
import HdSiSize from "@/utils/salesinvoice/not-recognized/si-csi-sizes/HdSiSize";
import HdCsiSizes from "@/utils/salesinvoice/not-recognized/si-csi-sizes/HdCsiSize";
import SmctCsiSize from "@/utils/salesinvoice/not-recognized/si-csi-sizes/SmctCsiSize";
import SmctSiSize from "@/utils/salesinvoice/not-recognized/si-csi-sizes/SmctSiSize";
import HDAurora from "@/utils/salesinvoice/global/fdl/new/hd/HDAurora";
import DapLabason from "@/utils/salesinvoice/global/fdl/old/dap/DapLabason";
import Antipolo from "@/utils/salesinvoice/global/fdl/new/smct/Antipolo";
import MandaueMulti from "@/utils/salesinvoice/global/obbus/new/dsm/MandaueMulti";
import HDBuug from "@/utils/salesinvoice/global/fdl/new/hd/HDBuug";
import HDBalamban from "@/utils/salesinvoice/global/fdl/new/hd/HDBalamban";
import DSMDanao from "@/utils/salesinvoice/global/obbus/new/dsm/DSMDanao";
import DsmCarmenCebu2 from "@/utils/salesinvoice/global/obbus/new/dsm/DsmCarmenCebu2";
import DAPBalingasag from "@/utils/salesinvoice/global/fdl/old/dap/DAPBalingasag";
import DAPIligan from "@/utils/salesinvoice/global/fdl/old/dap/DAPIligan";
import DSMBayugan from "@/utils/salesinvoice/global/fdl/new/dsm/DSMBayugan";
import DSMNorzagaray from "@/utils/salesinvoice/global/fdl/new/dsm/DSMNorzagaray";
import Binan from "@/utils/salesinvoice/global/fdl/old/smct/Binan";
import Consolacion from "@/utils/salesinvoice/global/obbus/old/dsm/Consolacion";
import HDCamino from "@/utils/salesinvoice/global/fdl/new/hd/HDCamino";
import HDCarmenCebu from "@/utils/salesinvoice/global/fdl/new/hd/HDCarmenCebu";
import HDDipolog from "@/utils/salesinvoice/global/fdl/old/hd/HDDipolog";
import HDIpil from "@/utils/salesinvoice/global/fdl/old/smct/SmctHdIpilWingShop";
import Argao from "@/utils/salesinvoice/global/obbus/old/dsm/Argao";
import Balangasan from "@/utils/salesinvoice/global/obbus/old/dsm/Balangasan";
import Cambaro from "@/utils/salesinvoice/global/fdl/new/dsm/Cambaro";
import CarmenCdo from "@/utils/salesinvoice/global/fdl/old/dsm/CarmenCdo";
import HeadOffice from "@/utils/salesinvoice/global/fdl/new/hd/HeadOffice";
import Sagbayan from "@/utils/salesinvoice/global/fdl/old/smct/Sagbayan";
import MandaueY3s from "@/utils/salesinvoice/global/obbus/new/dsm/MandaueY3s";
import SmctHdIpilWingShop from "@/utils/salesinvoice/global/fdl/old/smct/SmctHdIpilWingShop";
import Ipil from "@/utils/salesinvoice/global/fdl/old/hd/Ipil";
import Allen from "@/utils/salesinvoice/global/fdl/old/smct/Allen";
import Sucabon from "@/utils/salesinvoice/global/fdl/old/dap/Sucabon";
import HDVillanueva from "@/utils/salesinvoice/global/fdl/old/hd/HDVillanueva";
import Maranding from "@/utils/salesinvoice/global/fdl/old/dap/Maranding";
import HDGeneralTrias from "@/utils/salesinvoice/global/fdl/new/hd/HDGeneralTrias";
import HDSindangan from "@/utils/salesinvoice/global/fdl/old/hd/HDSindangan";
import Cerilles from "@/utils/salesinvoice/global/obbus/old/dsm/Cerilles";
import Calape2 from "@/utils/salesinvoice/global/fdl/old/smct/Calape2";

const CashSalesInvoice: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  const luzonSizeData = [
    "BINAN",
    "DASMA",
    "FAMY",
    "LIPA",
    "NAIC",
    "PAGS",
    "SANJ",
    "SANM",
    "SILA",
    "SLAS",
    "SROS",
    "TANZ2",
    "TANZ3",
  ];

  const DAP1SizeData = [
    "ALAD",
    "AURD",
    "CALD",
    "CAMD",
    "KABD",
    "RIZD",
    "SANM",
    "IMED",
    "IPID",
    "SIND",
    "TUBOD",
  ];

  const dapCsiSizeData = [
    "BUUD",
    "DIPD",
    "JIME",
    "LILD",
    "MANO",
    "MARA2",
    "MOLD2",
    "OROD",
    "OZAD",
    "BONI",
  ];

  const DSMSISizeData = ["DIGOS", "TACU", "TOMAS"];

  const dsmCsiSizeData = [
    "CALIN",
    "DSMM",
    "DSMT2",
    "ILOI",
    "JIMEDSM",
    "LABA",
  ];

  const hdSiSizeData = ["OROH", "TANH"];

  const hdCsiSizeData = ["ALAH", "DSML", "PARD3", "INIT", "MARH", "VETH"];

  const smctCsiSizeData = [
    "BAYB",
    "MANG",
    "SALA",
    "SANP",
    "AKLA",
    "TALI",
    "VALEN",
  ];

  const smctSiSizeData = [
    "BANTA",
    "GUIN",
    "MADRI",
    "CARMO",
    "ANTI",
    "TRINI2",
    "ALLEN",
  ];

  switch (true) {
    case luzonSizeData.some((branch) => branch === user?.branchCode):
      return <LuzonSize data={data} />;
    case DAP1SizeData.some((branch) => branch === user?.branchCode):
      return <DAP1Size data={data} />;
    case dapCsiSizeData.some((branch) => branch === user?.branchCode):
      return <DapCsiSize data={data} />;
    case DSMSISizeData.some((branch) => branch === user?.branchCode):
      return <DSMSISize data={data} />;
    case dsmCsiSizeData.some((branch) => branch === user?.branchCode):
      return <DsmCsiSize data={data} />;
    case hdSiSizeData.some((branch) => branch === user?.branchCode):
      return <HdSiSize data={data} />;
    case hdCsiSizeData.some((branch) => branch === user?.branchCode):
      return <HdCsiSizes data={data} />;
    case smctCsiSizeData.some((branch) => branch === user?.branchCode):
      return <SmctCsiSize data={data} />;
    case smctSiSizeData.some((branch) => branch === user?.branchCode):
      return <SmctSiSize data={data} />;
    case "AURH" === user?.branchCode:
      return <HDAurora data={data} />;
    case "BUUH" === user?.branchCode:
      return <HDBuug data={data} />;
    case "DANAO" === user?.branchCode:
      return <DSMDanao data={data} />;
    case "BALAM" === user?.branchCode:
      return <HDBalamban data={data} />;
    case "LABD" === user?.branchCode:
      return <DapLabason data={data} />;
    case "ANTIP" === user?.branchCode:
      return <Antipolo data={data} />;
    case "CARMC2" === user?.branchCode:
      return <DsmCarmenCebu2 data={data} />;
    case "MAND" === user?.branchCode:
      return <MandaueMulti data={data} />;
    case "MAND2" === user?.branchCode:
      return <MandaueY3s data={data} />;
    case "BALD" === user?.branchCode:
      return <DAPBalingasag data={data} />;
    case "ILID" === user?.branchCode:
      return <DAPIligan data={data} />;
    case "BAYU" === user?.branchCode:
      return <DSMBayugan data={data} />;
    case "NORZA" === user?.branchCode:
      return <DSMNorzagaray data={data} />;
    case "BINAN" === user?.branchCode:
      return <Binan data={data} />;
    case "DSMP" === user?.branchCode:
      return <Consolacion data={data} />;
    case "CAMH" === user?.branchCode:
      return <HDCamino data={data} />;
    case "CARMC" === user?.branchCode:
      return <HDCarmenCebu data={data} />;
    case "SDIP" === user?.branchCode:
      return <HDDipolog data={data} />;
    case "SMCT" === user?.branchCode:
      return <SmctHdIpilWingShop data={data} />;
    case "DSMAO" === user?.branchCode:
      return <Argao data={data} />;
    case "BALA" === user?.branchCode:
      return <Balangasan data={data} />;
    case "DSMA" === user?.branchCode:
      return <Cambaro data={data} />;
    case "CARMCDO" === user?.branchCode:
      return <CarmenCdo data={data} />;
    case "HO" === user?.branchCode:
      return <HeadOffice data={data} />;
    case "SAGBA" === user?.branchCode:
      return <Sagbayan data={data} />;
    case "IPIH" === user?.branchCode:
      return <Ipil data={data} />;
    case "ALEN" === user?.branchCode:
      return <Allen data={data} />;
    case "SUCD" === user?.branchCode:
      return <Sucabon data={data} />;
    case "VILLA2" === user?.branchCode:
      return <HDVillanueva data={data} />;
    case "MARD" === user?.branchCode:
      return <Maranding data={data} />;
    case "GENT" === user?.branchCode:
      return <HDGeneralTrias data={data} />;
    case "SINDA" === user?.branchCode:
      return <HDSindangan data={data} />;
    case "CERI" === user?.branchCode:
      return <Cerilles data={data} />;
    case "CALAP2" === user?.branchCode:
      return <Calape2 data={data} />;
    default:
      return (
        <div className="text-center flex items-center justify-center h-screen font-bold text-lg">
          Sorry, This page is temporary unavailable on your branch
        </div>
      );
  }
};

export default CashSalesInvoice;
