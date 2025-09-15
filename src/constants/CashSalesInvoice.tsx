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
import DSMDanao from "@/utils/salesinvoice/global/obbus/new/dsm/DSMDanao";
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
import HDToledo from "@/utils/salesinvoice/global/fdl/old/hd/HDToledo";
import HDTanza from "@/utils/salesinvoice/global/fdl/new/hd/HDTanza";

import Cerilles from "@/utils/salesinvoice/global/obbus/old/dsm/Cerilles";
import Calape2 from "@/utils/salesinvoice/global/fdl/old/smct/Calape2";
import HDOzamiz from "@/utils/salesinvoice/global/fdl/old/hd/HDOzamiz";
import HDVeterans from "@/utils/salesinvoice/global/fdl/new/hd/HDVeterans";
import HDMolave from "@/utils/salesinvoice/global/fdl/new/hd/HDMolave";
import HDOroquieta2 from "@/utils/salesinvoice/global/fdl/old/hd/HDOroquieta2";
import Dipolog2 from "@/utils/salesinvoice/global/fdl/old/dsm/Dipolog2";
import Calamba from "@/utils/salesinvoice/global/fdl/new/dsm/Calamba";
import HDDatoc from "@/utils/salesinvoice/global/fdl/old/hd/HDDatoc";
import DaanBantayan2 from "@/utils/salesinvoice/global/fdl/old/dsm/DaanBantayan2";
import HDCalamba from "@/utils/salesinvoice/global/fdl/old/hd/HDCalamba";
import HDPardo from "@/utils/salesinvoice/global/fdl/old/hd/HDPardo";
import HDMaranding from "@/utils/salesinvoice/global/fdl/old/hd/HDMaranding";
import Labason from "@/utils/salesinvoice/global/obbus/old/dsm/Labason";
import Remigio from "@/utils/salesinvoice/global/obbus/old/dsm/Remigio";
import HDBalamban from "@/utils/salesinvoice/global/fdl/old/hd/HDBalamban";
import Oroquieta from "@/utils/salesinvoice/global/fdl/old/hd/Oroquieta";
import LapuLapu2 from "@/utils/salesinvoice/global/fdl/old/dsm/LapuLapu2";
import Liloan from "@/utils/salesinvoice/global/obbus/old/dsm/Liloan";
import HDCalinog from "@/utils/salesinvoice/global/fdl/old/hd/HDCalinog";
import LapuLapu from "@/utils/salesinvoice/global/fdl/old/dsm/LapuLapu";
import Nabunturan from "@/utils/salesinvoice/global/fdl/new/dsm/Nabunturan";
import SuzukiOsamiz from "@/utils/salesinvoice/global/fdl/new/dsm/SuzukiOsamiz";
import HDInitao from "@/utils/salesinvoice/global/fdl/old/hd/HDInitao";
import Bulua2 from "@/utils/salesinvoice/global/fdl/old/dsm/Bulua2";
import Aurora from "@/utils/salesinvoice/global/obbus/old/dsm/Aurora";
import HDGusa from "@/utils/salesinvoice/global/fdl/new/hd/HDGusa";
import Bulua from "@/utils/salesinvoice/global/obbus/old/dsm/Bulua";
import FdlOldCsiSize from "@/utils/salesinvoice/global/fdl/old/FdlOldCsiSize";
import FdlOldSiSize from "@/utils/salesinvoice/global/fdl/old/FdlOldSiSize";
import FdlNewSiSize from "@/utils/salesinvoice/global/fdl/new/FdlNewSiSize";
import ObbusNewSiSize from "@/utils/salesinvoice/global/obbus/new/ObbusNewSiSize";
import ObbusOldSiSize from "@/utils/salesinvoice/global/obbus/old/ObbusOldSiSize";
import ObbusOldCsiSize from "@/utils/salesinvoice/global/obbus/old/ObbusOldCsiSize";
import DSMAurora from "@/utils/salesinvoice/global/obbus/old/dsm/DSMAurora";
import FelyOldCsiSize from "@/utils/salesinvoice/global/fely/old/FelyOldCsiSize";
import FelyOldSiSize from "@/utils/salesinvoice/global/fely/old/FelyOldSiSize";
import BjvOldCsiSize from "@/utils/salesinvoice/global/bjv/old/BjvOldCsiSize";
import SMCTAlano from "@/utils/salesinvoice/global/fdl/old/smct/SMCTAlano";
import DAPOzamiz from "@/utils/salesinvoice/global/fdl/old/dap/DAPOzamiz";
import SMCTNaic from "@/utils/salesinvoice/global/fely/old/smct/SMCTNaic";
import SMCTRosario from "@/utils/salesinvoice/global/fely/old/smct/SMCTRosario";
import SMCTPagsanjan from "@/utils/salesinvoice/global/fely/old/smct/SMCTPagsanjan";
import HDInabanga from "@/utils/salesinvoice/global/bjv/old/hd/HDInabanga";
import SMCTGuindulman1 from "@/utils/salesinvoice/global/bjv/old/smct/SMCTGuindulman1";
import SMCTSilang from "@/utils/salesinvoice/global/fely/old/smct/SMCTSilang";
import SMCTAntique from "@/utils/salesinvoice/global/fdl/old/smct/SMCTAntique";
import DSMTagbilaran from "@/utils/salesinvoice/global/obbus/old/dsm/DSMTagbilaran";
import DSMLabangon from "@/utils/salesinvoice/global/obbus/old/dsm/DSMLabangon";
import DSMSuzukiPardo from "@/utils/salesinvoice/global/obbus/old/dsm/DSMSuzukiPardoOld";
import Bogo from "@/utils/salesinvoice/global/obbus/old/dsm/Bogo";
import DSMPardo from "@/utils/salesinvoice/global/fdl/old/dsm/DSMPardo";
import SMCTTubigon from "@/utils/salesinvoice/global/fdl/old/smct/SMCTTubigon";
import Panabo from "@/utils/salesinvoice/global/obbus/old/dsm/Panabo";
import DAPImelda from "@/utils/salesinvoice/global/fdl/old/dap/DAPImelda";
import Iligan from "@/utils/salesinvoice/global/fdl/old/dsm/Iligan";
import SMCTSanJose from "@/utils/salesinvoice/global/fdl/old/smct/SMCTSanJose";
import Kia from "@/utils/salesinvoice/global/fdl/old/smct/Kia";
import HDTrinidad from "@/utils/salesinvoice/global/bjv/old/hd/HDTrinidad";
import SMCTCarcar from "@/utils/salesinvoice/global/fdl/old/smct/SMCTCarcar";
import SMCTCalinan from "@/utils/salesinvoice/global/fdl/old/smct/SMCTCalinan";
import DSMMedellin from "@/utils/salesinvoice/global/obbus/old/dsm/DSMMedellin";
import HDAlano from "@/utils/salesinvoice/global/fdl/old/hd/HDAlano";
import Baybay from "@/utils/salesinvoice/global/fdl/old/smct/Baybay";
import DSMToril from "@/utils/salesinvoice/global/obbus/old/dsm/DSMToril";
import DAPMolave2 from "@/utils/salesinvoice/global/fdl/old/dap/DAPMolave2";
import SMCTLipa from "@/utils/salesinvoice/global/fdl/old/smct/SMCTLipa";
import SMCTCarmona from "@/utils/salesinvoice/global/fely/old/smct/SMCTCarmona";
import Balamban from "@/utils/salesinvoice/global/fdl/old/dsm/Balamban";
import DSMMatina from "@/utils/salesinvoice/global/obbus/old/dsm/DSMMatina";
import Iloilo from "@/utils/salesinvoice/global/fdl/new/dsm/Iloilo";
import CarmenCebu2 from "@/utils/salesinvoice/global/obbus/new/dsm/CarmenCebu2";
import HDDSMCarmenCebu2 from "@/utils/salesinvoice/global/obbus/old/dsm/HDDSMCarmenCebu2";
import DSMCatar2 from "@/utils/salesinvoice/global/obbus/new/dsm/DSMCatar2";
import SuzukiPardo from "@/utils/salesinvoice/global/fdl/new/dsm/SuzukiPardo";
import SMCTCatarman from "@/utils/salesinvoice/global/fdl/old/smct/SMCTCatarman";
import HdBalamban from "@/utils/salesinvoice/global/fdl/new/hd/Balamban";
import DAPSanMiguel from "@/utils/salesinvoice/global/fdl/old/dap/DAPSanMiguel";
import OroquietaNew from "@/utils/salesinvoice/global/fdl/new/hd/OroquietaNew";
import Gingoog from "@/utils/salesinvoice/global/fdl/new/dsm/Gingoog";
import DAPIliganNew from "@/utils/salesinvoice/global/fdl/old/dap/DAPIliganNew";
import Sablayan from "@/utils/salesinvoice/global/fdl/new/dsm/Sablayan";
import DSMQuezon from "@/utils/salesinvoice/global/fdl/new/dsm/DSMQuezon";
import Kabac from "@/utils/salesinvoice/not-recognized/si-csi-sizes/Kabac";
import DSMIsulan from "@/utils/salesinvoice/global/obbus/old/dsm/DSMIsulan";
import DSMArgao from "@/utils/salesinvoice/global/obbus/old/dsm/DSMArgao";
import PropertyVenturesCorporation from "@/utils/salesinvoice/global/fdl/new/smct/property-ventures-corporation";
import Tacloban from "@/utils/salesinvoice/global/fdl/new/dsm/tacloban";

const CashSalesInvoice: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  const luzonSizeData = [""];

  const landscapeSiSizeData = [
    "ALAD",
    "AURD",
    "CALD",
    "CAMD",
    "KABD",
    "RIZD",
    "IPID",
    "SLIL",
    "MADRI",
    "BALI",
    "ELSA",
    "KATI",
    "DSMTG",
    "VILLA",
    "MARD",
    "TRINI2",
    "MOLS",
    "DASMA",
    "DSMB",
    "MARA",
    // "KABAC",
    "LABA",
    "HO-DAP",
  ];

  const dapCsiSizeData = ["DIPD", "JIME", "MANO"];

  const DSMSISizeData = [""];

  const dsmCsiSizeData = [""];

  const hdCsiSizeData = [""];

  const smctCsiSizeData = [""];

  const smctSiSizeData = [""];

  //FDL
  const fdlCsiNewSizeData = [];

  const fdlCsiOldSizeData = [
    "MALA",
    "JIME",
    "LILD",
    "MOLD",
    "OROD",
    "SUCD",
    "TUBOD",
    "SANP",
    // "DSMBN",
    "DSMC",
    "AKLA",
    //"CARS",
    "MANG",
    "TALI",
    "VALEN",
    // "TUBU",
    "BUUD",
    "DIPD2",
    "DSMV",
    "DSMTA",
    "YATI",
    "MARA2",
    "DONC",
    "SIND",
    "HO-SMCT",
    "HO-DSM",
  ];

  const fdlSiNewSizeData = [
    "GUIN2",
    "TANZ2",
    "SANT2",
    //  "DSMD2"
    "DSMT2",
    "TANZ3",
    "INIT2",
    "KABA",
    "CATM",
    "MONKA",
    "BANTA",
    "TALI2",
    "CALAP",
    "CARC",
    "CARC2",
    // "UTAP",
    "SMCT",
    "PUTD",
    "CALB",
    "OZAH",
    "INAB",
    "KABA2",
    "NABU",
    "TUBU",
    "HO-HD",
    "DSMCN",
    "SINDA",
    "OROD2",
    "TOLED",
  ];

  const fdlSiOldSizeData = ["NUND2", "DAPI", "TANZ", "BONI", "VITA"];

  // OBBUS
  const obbusCsiNewSizeData = [];

  const obbusCsiOldSizeData = [
    "UBAY",
    "CALIN",
    "COMPO",
    "JIMEDSM",
    "REMI2",
    "DSMM",
    "DSMDM",
    "LABA",
  ];

  const obbusSiNewSizeData = ["DSMD", "RIZA", "TOMAS", "BOLOD", "MING"];

  const obbusSiOldSizeData = ["TACU", "DIGOS"];

  //FELY
  const felyCsiNewSizeData = [];

  const felyCsiOldSizeData = [""];

  const felySiNewSizeData = [];

  const felySiOldSizeData = [""];

  // AJD
  const ajdCsiNewSizeData = [];

  const ajdCSiOldSizeData = [];

  const ajdSiNewSizeData = [];

  const ajdSiOldSizeData = [];

  // BJV
  const bjvCsiNewSizeData = [];

  const bjvCSiOldSizeData = ["CARMB", "LOAY", "JAGN", "ALIC"];

  const bjvSiNewSizeData = [];

  const bjvSiOldSizeData = [];

  switch (true) {
    // FDL CASES
    case fdlSiNewSizeData.some((branch) => branch === user?.branchCode):
      return <FdlNewSiSize data={data} />;
    case fdlCsiOldSizeData.some((branch) => branch === user?.branchCode):
      return <FdlOldCsiSize data={data} />;
    case fdlSiOldSizeData.some((branch) => branch === user?.branchCode):
      return <FdlOldSiSize data={data} />;

    // OBBUS CASES
    case obbusSiNewSizeData.some((branch) => branch === user?.branchCode):
      return <ObbusNewSiSize data={data} />;
    case obbusCsiOldSizeData.some((branch) => branch === user?.branchCode):
      return <ObbusOldCsiSize data={data} />;
    case obbusSiOldSizeData.some((branch) => branch === user?.branchCode):
      return <ObbusOldSiSize data={data} />;

    // FELY CASES
    case felyCsiOldSizeData.some((branch) => branch === user?.branchCode):
      return <FelyOldCsiSize data={data} />;
    case felySiOldSizeData.some((branch) => branch === user?.branchCode):
      return <FelyOldSiSize data={data} />;

    // BJV CASES
    case bjvCSiOldSizeData.some((branch) => branch === user?.branchCode):
      return <BjvOldCsiSize data={data} />;

    case luzonSizeData.some((branch) => branch === user?.branchCode):
      return <LuzonSize data={data} />;
    case landscapeSiSizeData.some((branch) => branch === user?.branchCode):
      return <DAP1Size data={data} />;
    case dapCsiSizeData.some((branch) => branch === user?.branchCode):
      return <DapCsiSize data={data} />;
    case DSMSISizeData.some((branch) => branch === user?.branchCode):
      return <DSMSISize data={data} />;
    case dsmCsiSizeData.some((branch) => branch === user?.branchCode):
      return <DsmCsiSize data={data} />;
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
      return <HdBalamban data={data} />;
    case "LABD" === user?.branchCode:
      return <DapLabason data={data} />;
    case "ANTIP" === user?.branchCode:
      return <Antipolo data={data} />;
    case "CARMC2" === user?.branchCode:
      return <CarmenCebu2 data={data} />;
    case "MAND" === user?.branchCode:
      return <MandaueMulti data={data} />;
    case "MAND2" === user?.branchCode:
      return <MandaueY3s data={data} />;
    case "BALD" === user?.branchCode:
      return <DAPBalingasag data={data} />;
    case "ILID" === user?.branchCode:
      return <DAPIliganNew data={data} />;
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
    //case "SMCT" === user?.branchCode:
    //  return <SmctHdIpilWingShop data={data} />;
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
    // case "SINDA" === user?.branchCode:
    //   return <HDSindangan data={data} />;
    case "DSML" === user?.branchCode:
      return <HDToledo data={data} />; //CSI
    case "TANH" === user?.branchCode:
      return <HDTanza data={data} />;
    case "CERI" === user?.branchCode:
      return <Cerilles data={data} />;
    case "CALAP2" === user?.branchCode:
      return <Calape2 data={data} />;
    case "DSMD2" === user?.branchCode:
      return <Dipolog2 data={data} />;
    // case "OZAH" === user?.branchCode:
    //   return <HDOzamiz data={data} />;
    case "VETH" === user?.branchCode:
      return <HDVeterans data={data} />;
    case "MOLH" === user?.branchCode:
      return <HDMolave data={data} />;
    case "OROH2" === user?.branchCode:
      return <HDOroquieta2 data={data} />;
    case "OROH" === user?.branchCode:
      return <OroquietaNew data={data} />;
    case "DSMCA" === user?.branchCode:
      return <Calamba data={data} />;
    case "DATH" === user?.branchCode:
      return <HDDatoc data={data} />; //CSI
    case "DAAN" === user?.branchCode:
      return <DaanBantayan2 data={data} />;
    case "CALA" === user?.branchCode:
      return <HDCalamba data={data} />;
    case "PARD3" === user?.branchCode:
      return <HDPardo data={data} />;
    case "MARH" === user?.branchCode:
      return <HDMaranding data={data} />; //CSI
    // case "LABA" === user?.branchCode:
    //   return <Labason data={data} />;
    case "REMI" === user?.branchCode:
      return <Remigio data={data} />;
    case "LAPU" === user?.branchCode:
      return <LapuLapu2 data={data} />;
    case "LIPA" === user?.branchCode:
      return <SMCTLipa data={data} />; // TEMP NO TAG-IYA
    case "FAMY" === user?.branchCode:
      return <LapuLapu2 data={data} />; // TEMP NO TAG-IYA
    case "DSMLN" === user?.branchCode:
      return <Liloan data={data} />;
    case "CALIN2" === user?.branchCode:
      return <HDCalinog data={data} />;
    case "SLAP" === user?.branchCode:
      return <LapuLapu data={data} />;
    // case "NABU" === user?.branchCode:
    //   return <Nabunturan data={data} />;
    case "DSMSO" === user?.branchCode:
      return <SuzukiOsamiz data={data} />;
    case "INIT" === user?.branchCode:
      return <HDInitao data={data} />; //CSI
    case "BULU" === user?.branchCode:
      return <Bulua2 data={data} />;
    case "AURO" === user?.branchCode:
      return <Aurora data={data} />;
    case "GUSA" === user?.branchCode:
      return <HDGusa data={data} />;
    case "DSMBL" === user?.branchCode:
      return <Bulua data={data} />;
    case "AURO" === user?.branchCode:
      return <DSMAurora data={data} />;
    case "SALA" === user?.branchCode:
      return <SMCTAlano data={data} />; //CSI
    case "OZAD" === user?.branchCode:
      return <DAPOzamiz data={data} />;
    case "NAIC" === user?.branchCode:
      return <SMCTNaic data={data} />; //CSI LANDSCAPE
    case "SROS" === user?.branchCode:
      return <SMCTRosario data={data} />;
    case "PAGS" === user?.branchCode:
      return <SMCTPagsanjan data={data} />; //CSI LANDSCAPE
    // case "INAB" === user?.branchCode:
    //   return <HDInabanga data={data} />; //CSI LANDSCAPE
    case "GUIN" === user?.branchCode:
      return <SMCTGuindulman1 data={data} />;
    case "SILA" === user?.branchCode:
      return <SMCTSilang data={data} />;
    case "ANTI" === user?.branchCode:
      return <SMCTAntique data={data} />;
    case "DSMT" === user?.branchCode:
      return <DSMTagbilaran data={data} />;
    case "DSMK" === user?.branchCode:
      return <DSMLabangon data={data} />;
    case "PARD2" === user?.branchCode:
      return <SuzukiPardo data={data} />;
    case "BOGO" === user?.branchCode:
      return <Bogo data={data} />;
    case "PARD" === user?.branchCode:
      return <DSMPardo data={data} />;
    case "TUBI" === user?.branchCode:
      return <SMCTTubigon data={data} />;
    case "DSMPO" === user?.branchCode:
      return <Panabo data={data} />;
    case "IMED" === user?.branchCode:
      return <DAPImelda data={data} />;
    case "ILIG" === user?.branchCode:
      return <Iligan data={data} />;
    case "SANJ" === user?.branchCode:
      return <SMCTSanJose data={data} />;
    case "BOHK" === user?.branchCode:
      return <Kia data={data} />;
    case "TRINI" === user?.branchCode:
      return <HDTrinidad data={data} />;
    case "CARS" === user?.branchCode:
      return <SMCTCarcar data={data} />;
    case "CALI" === user?.branchCode:
      return <SMCTCalinan data={data} />;
    case "MEDE" === user?.branchCode:
      return <DSMMedellin data={data} />;
    case "ALAH" === user?.branchCode:
      return <HDAlano data={data} />;
    case "BAYB" === user?.branchCode:
      return <Baybay data={data} />;
    case "TORI" === user?.branchCode:
      return <DSMToril data={data} />;
    case "MOLD2" === user?.branchCode:
      return <DAPMolave2 data={data} />;
    case "CARMO" === user?.branchCode:
      return <SMCTCarmona data={data} />;
    case "DSMBN" === user?.branchCode:
      return <Balamban data={data} />;
    case "MATI" === user?.branchCode:
      return <DSMMatina data={data} />;
    case "ILOI" === user?.branchCode:
      return <Iloilo data={data} />;
    case "DSMDN" === user?.branchCode:
      return <HDDSMCarmenCebu2 data={data} />;
    case "CATAR2" === user?.branchCode:
      return <DSMCatar2 data={data} />;
    case "CATAR" === user?.branchCode:
      return <SMCTCatarman data={data} />;
    case "SANM" === user?.branchCode:
      return <DAPSanMiguel data={data} />;
    case "GINGO" === user?.branchCode:
      return <Gingoog data={data} />;
    case "SABLA" === user?.branchCode:
      return <Sablayan data={data} />;
    case "SANPA" === user?.branchCode:
      return <HDTanza data={data} />;
    case "KABAC" === user?.branchCode:
      return <Kabac data={data} />;
    case "QUEZ" === user?.branchCode:
      return <DSMQuezon data={data} />;
    case "ISU" === user?.branchCode:
      return <DSMIsulan data={data} />;
    case "SARG" === user?.branchCode:
      return <DSMArgao data={data} />;
    case "SPVC" === user?.branchCode:
      return <PropertyVenturesCorporation data={data} />;
    case "UTAP" === user?.branchCode:
      return <Tacloban data={data} />;

    default:
      return (
        <div className="text-center flex items-center justify-center h-screen font-bold text-lg">
          Sorry, This printing page is temporary unavailable on your branch.
          Please contact dev team for more information.
        </div>
      );
  }
};

export default CashSalesInvoice;
