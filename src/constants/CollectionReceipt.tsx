"use client";
import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import LuzonSize from "@/utils/collectionreceipt/not-recognized/LuzonSize";
import Size1Collection from "@/utils/collectionreceipt/not-recognized/size1";
import Size2Collection from "@/utils/collectionreceipt/not-recognized/size2";
import Size3Collection from "@/utils/collectionreceipt/not-recognized/size3";
import Size4Collection from "@/utils/collectionreceipt/not-recognized/size4";
import HondaDESSize from "@/utils/collectionreceipt/not-recognized/cr-sizes/HondaDESSize";
import DAPSize from "@/utils/collectionreceipt/not-recognized/cr-sizes/DAPSize";
import SmctCrSize from "@/utils/collectionreceipt/not-recognized/cr-sizes/SmctCrSize";
import DsmCrSize from "@/utils/collectionreceipt/not-recognized/cr-sizes/DsmCrSize";
import DAPBalingasag from "@/utils/collectionreceipt/global/fdl/old/dap/DAPBalingasag";
import DAPIligan from "@/utils/collectionreceipt/global/fdl/old/dap/DAPIligan";
import DAPTubod from "@/utils/collectionreceipt/global/fdl/old/dap/DAPTubod";
import DSMBayugan from "@/utils/collectionreceipt/global/fdl/new/dsm/DSMBayugan";
import Consolacion from "@/utils/official-receipt/global/fdl/old/dsm/Consolacion";
import DSMNorzagaray from "@/utils/collectionreceipt/global/fdl/new/dsm/DSMNorzagaray";
import DAPSanMiguel from "@/utils/collectionreceipt/global/fdl/new/dap/DAPSanMiguel";
import Binan from "@/utils/collectionreceipt/global/fdl/old/smct/Binan";
import Argao from "@/utils/official-receipt/global/fdl/old/dsm/Argao";
import Alano from "@/utils/collectionreceipt/global/fdl/new/dap/Alano";
import Balangasan from "@/utils/collectionreceipt/global/obbus/old/dsm/Balangasan";
import Cambaro from "@/utils/official-receipt/global/fdl/old/dsm/Cambaro";
import CarmenCdo from "@/utils/collectionreceipt/global/obbus/old/dsm/CarmenCdo";
import Ipil from "@/utils/official-receipt/global/fdl/old/hd/Ipil";
import Sucabon from "@/utils/collectionreceipt/global/fdl/new/dap/Sucabon";
// import MandaueMulti from "@/utils/official-receipt/global/obbus/old/dsm/MandaueMulti";
import HDGeneralTrias from "@/utils/collectionreceipt/global/fdl/new/hd/HDGeneralTrias";
import HDSindangan from "@/utils/collectionreceipt/global/fdl/old/hd/HDSindangan";
import HDDipolog from "@/utils/collectionreceipt/global/fdl/old/hd/HDDipolog";
import HDCarmenCebu from "@/utils/collectionreceipt/global/fdl/old/hd/HDCarmenCebu";
import Cerilles from "@/utils/official-receipt/global/obbus/old/dsm/Cerilles";
import Calape2 from "@/utils/official-receipt/global/fdl/old/smct/Calape2";
import Tanza from "@/utils/collectionreceipt/global/fely/old/hd/Tanza";
import HDMolave from "@/utils/official-receipt/global/fdl/old/hd/HDMolave";
import Dipolog2 from "@/utils/official-receipt/global/fdl/old/dsm/Dipolog2";
import HDCamino from "@/utils/official-receipt/global/fdl/old/hd/HDCamino";
import HDOzamiz from "@/utils/official-receipt/global/fdl/old/hd/HDOzamiz";
import HDVeterans from "@/utils/official-receipt/global/fdl/old/hd/HDVeterans";
import HDToledo from "@/utils/official-receipt/global/fdl/old/hd/HDToledo";
import HDAurora from "@/utils/official-receipt/global/fdl/old/hd/HDAurora";
import HDDatoc from "@/utils/collectionreceipt/global/fdl/old/hd/HDDatoc";
import Calamba from "@/utils/collectionreceipt/global/fdl/old/dsm/Calamba";
import DaanBantayan2 from "@/utils/collectionreceipt/global/fdl/old/dsm/DaanBantayan2";
import HDPardo from "@/utils/collectionreceipt/global/fdl/old/hd/HDPardo";
import HDMaranding from "@/utils/collectionreceipt/global/fdl/old/hd/HDMaranding";
import Labason from "@/utils/collectionreceipt/global/obbus/old/dsm/Labason";
import Remigio from "@/utils/official-receipt/global/fdl/old/dsm/Remigio";
import LapuLapu2 from "@/utils/official-receipt/global/fdl/old/dsm/LapuLapu2";
import HDOroquieta from "@/utils/collectionreceipt/global/fdl/old/hd/HDOroquieta";
import HDCalinog from "@/utils/collectionreceipt/global/fdl/old/hd/HDCalinog";
import HDOroquieta2 from "@/utils/official-receipt/global/fdl/old/hd/HDOroquieta2";
import LapuLapu from "@/utils/official-receipt/global/fdl/old/dsm/LapuLapu";
import Nabunturan from "@/utils/collectionreceipt/global/fdl/new/dsm/Nabunturan";
import SuzukiOsamiz from "@/utils/official-receipt/global/obbus/old/dsm/SuzukiOsamiz";
import HDInitao from "@/utils/official-receipt/global/fdl/old/hd/HDInitao";
import HDCalamba from "@/utils/official-receipt/global/fdl/old/hd/HDCalamba";
import HDBuug from "@/utils/official-receipt/global/fdl/old/hd/HDBuug";
import Bulua2 from "@/utils/collectionreceipt/global/fdl/old/dsm/Bulua2";
import Aurora from "@/utils/collectionreceipt/global/obbus/old/dsm/Aurora";
import HDGusa from "@/utils/official-receipt/global/fdl/old/hd/HDGusa";
import Bulua from "@/utils/official-receipt/global/obbus/old/dsm/Bulua";
import FdlNewCrSize from "@/utils/collectionreceipt/global/fdl/new/FdlNewCrSize";
import FdlOldCrSize from "@/utils/collectionreceipt/global/fdl/old/FdlOldCrSize";
import FdlOldOrSize from "@/utils/official-receipt/global/fdl/old/FdlOldOrSize";
import ObbusOldCrSize from "@/utils/collectionreceipt/global/obbus/ObbusOldCrSize";
import ObbusOldOrSize from "@/utils/official-receipt/global/obbus/ObbusOldOrSize";
import FelyOldCrSize from "@/utils/collectionreceipt/global/fely/old/FelyOldCrSize";
import AjdOldOrSize from "@/utils/official-receipt/global/ajd/old/AjdOldOrSize";
import BjvOldOrSize from "@/utils/official-receipt/global/bjv/old/BjvOldOrSize";
import Liloan from "@/utils/official-receipt/global/obbus/old/dsm/Liloan";
import DSMAurora from "@/utils/official-receipt/global/fdl/old/dsm/DSMAurora";
import FelyOldOrSize from "@/utils/official-receipt/global/fely/old/FelyOldOrSize";
import BjvOldCrSize from "@/utils/collectionreceipt/global/bjv/old/BjvOldCrSize";
import ObbusNewCrSize from "@/utils/collectionreceipt/global/obbus/new/ObbusNewCrSize";
import HDInabanga from "@/utils/collectionreceipt/global/bjv/old/HDInabanga";
import SMCTJagna from "@/utils/official-receipt/global/bjv/old/smct/SMCTJagna";
import Calinan from "@/utils/collectionreceipt/global/obbus/old/smct/Calinan";
import DAPCaminoNuevo from "@/utils/official-receipt/global/fdl/old/dap/DAPCaminoNuevo";
import DSMPardo from "@/utils/official-receipt/global/ajd/old/dsm/DSMPardo";
import SMCTCalape from "@/utils/collectionreceipt/global/fdl/old/smct/SMCTCalape";
import Danao from "@/utils/collectionreceipt/global/obbus/new/dsm/Danao";
import Minglanilla from "@/utils/collectionreceipt/global/obbus/new/dsm/Minglanilla";
import CelroseOldOrSize from "@/utils/official-receipt/global/celrose/old/CelroseOldOrSize";
import DSMTagbilaran from "@/utils/official-receipt/global/obbus/old/dsm/DSMTagbilaran";
import DSMCalinog from "@/utils/official-receipt/global/celrose/old/dsm/DSMCalinog";
import DSMCarmenCebu from "@/utils/official-receipt/global/ajd/old/dsm/DSMCarmenCebu";
import SMCTAntique from "@/utils/collectionreceipt/global/obbus/celrose/smct/SMCTAntique";
import Tagum from "@/utils/collectionreceipt/global/obbus/old/dsm/Tagum";
import SMCTLiloan from "@/utils/official-receipt/global/obbus/old/smct/SMCTLiloan";
import Buug from "@/utils/official-receipt/global/fdl/old/dap/Buug";
import DAPImelda from "@/utils/collectionreceipt/global/fdl/old/dap/DAPImelda";
import SMCTSanJose from "@/utils/collectionreceipt/global/fdl/old/smct/SMCTSanJose";
import HDTrinidad from "@/utils/official-receipt/global/fdl/old/hd/HDTriniadad";
import HDAlano from "@/utils/official-receipt/global/fdl/old/hd/HDAlano";
import Pagsanjan from "@/utils/official-receipt/global/fdl/old/smct/Pagsanjan";
import DAPMolave2 from "@/utils/collectionreceipt/global/fdl/old/dap/DAPMolave2";
import SMCTAntipolo from "@/utils/official-receipt/global/fely/old/smct/SMCTAntipolo";
import HDKabasalan from "@/utils/official-receipt/global/fdl/old/hd/HDKabasalan";
import Dasmariñas from "@/utils/official-receipt/global/fely/old/smct/Dasmariñas";
import Basak from "@/utils/collectionreceipt/global/fdl/old/dsm/Basak";
import Kabasalan from "@/utils/official-receipt/global/fdl/old/dsm/Kabasalan";
import HDBalamban from "@/utils/collectionreceipt/global/fdl/old/hd/HDBalamban";
import SMCTCarmona from "@/utils/official-receipt/global/fely/old/smct/SMCTCarmona";
import SMCTLipa from "@/utils/collectionreceipt/global/fdl/old/smct/SMCTLipa";
import SMCTTalibon2 from "@/utils/collectionreceipt/global/fdl/new/smct/SMCTTalibon2";
import DSMJimenez from "@/utils/official-receipt/global/obbus/old/dsm/DSMJimenez";
import SMCTCatarman from "@/utils/collectionreceipt/global/fdl/old/smct/SMCTCatarman";
import MandaueY3s from "@/utils/collectionreceipt/global/fdl/old/dsm/MandaueY3s";
import MandaueMulti from "@/utils/collectionreceipt/global/fdl/old/dsm/MandaueMulti";
import CarmenCebu2 from "@/utils/official-receipt/global/ajd/old/dsm/CarmenCebu2";
import DSMSARG from "@/utils/collectionreceipt/global/fdl/old/dsm/DSMSARG";
import HDDSMCarmenCebu2 from "@/utils/official-receipt/global/ajd/old/dsm/HDDSMCarmenCebu2";
import DSMCatarman2 from "@/utils/collectionreceipt/global/obbus/new/dsm/DSMCatarman2";
import DSMToledo2 from "@/utils/official-receipt/global/obbus/old/dsm/DSMToledo2";
import Gingoog from "@/utils/collectionreceipt/global/fdl/new/dsm/Gingoog";
import SMCTRosario from "@/utils/collectionreceipt/global/fely/old/smct/SMCTRosario";
import Sablayan from "@/utils/collectionreceipt/global/fdl/new/dsm/Sablayan";
import SMCTTalibon from "@/utils/collectionreceipt/global/fdl/old/smct/SMCTTalibon";
import DSMHeadOffice from "@/utils/collectionreceipt/global/fdl/old/dsm/DSMHeadOffice";
import HO_DAP from "@/utils/collectionreceipt/global/fdl/old/dap/HO_DAP";
import HO_SMCT from "@/utils/official-receipt/global/fdl/old/smct/HO_SMCT";
import DSMQuezon from "@/utils/collectionreceipt/global/fdl/new/dsm/DSMQuezon";
import DAPCalamba from "@/utils/collectionreceipt/global/fdl/new/dap/DAPCalamba";
import CashSalesPropertyVenturesCorporation from "@/utils/collectionreceipt/global/fdl/new/smct/cash-sales-property-ventures-corporation";
import DsmTacloban from "@/utils/collectionreceipt/global/fdl/new/dsm/dsm-tacloban";
import DSMButuan from "@/utils/collectionreceipt/global/fdl/new/dsm/DSMButuan";
import HDSanPablo from "@/utils/collectionreceipt/global/fdl/new/hd/HDSanPablo";
import SMCTFamy from "@/utils/collectionreceipt/global/fely/old/smct/SMCTFamy";

//import Argao from "@/utils/collectionreceipt/global/fdl/old/dsm/Argao";

const CollectionReceipt: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  const luzonSizeData = ["SILA"];

  const HondaDESSizeData = [""];

  const DAPSizeData = ["SIND", "KABD", "MANO", "PUTD"];

  const smctCrSizeData = [""];

  const dsmCrSizeData = ["CARS", "CONSO", "DONC", "DSMSB", "MARA", "TAGUM"];

  //FDL
  const fdlCrNewSizeData = [
    "TANH",
    "TANZ2",
    "JIME",
    "OROD",
    "SANT2",
    "TANZ3",
    "AURD",
    "MONKA",
    "RIZD",
    "MADRI",
    "ALIC",
    "SAGBA",
    // "UTAP",
    "INIT2",
    "IPID",
    "LOAY",
    "NABU",
    "MARD",
    "GUIN2",
    "DAPI",
    "MOLD2",
    "PANGL",
    // "CALD",
    "ISU",
    "BAYB",
    "KATI",
    "DIPD2",
    "ALEN",
    "KABAC",
    "DSMCN",
    "CALB",
    "SINDA",
    "VITA",
    "MANG",
    "BULU",
    "OROD2",
    "BANTA",
    "TOLED",
    "ASTUR",
    "SANTA",
    "BALAM",
  ];

  const fdlOrOldSizeData = [
    "NUND2",
    "AKLA",
    //"CARS",
    "TUBI",
    "DSMD",
    "REMI2",
    "PARD2",
    "BOHK",
    // "PARD",
    "CATM",
  ];

  const fdlCrOldSizeData = [
    "CARMB",
    "MALA",
    "MOLD",
    "LILD",
    // "DSMD2",
    "KATI",
    "VALEN",
    // "TALI",
    "VILLA2",
    "BONI",
    "LABD",
    "LILD",
    "DSMV",
    "MOLS",
    "DSMTA",
    "YATI",
    "SALA",
    "SMCT",
    "TRINI2",
    "OZAD",
    "INIT",
    "DSMAO",
    "TUBU",
    "MARA",
    "DIPD",
    "PARD",
    "BUUH",
    "DSMM",
    "TRINI",
    "AURH",
    "IPIH",
    "MOLH",
    "VETH",
  ];

  const fdlOrNewSizeData = [];

  // OBBUS
  const obbusCrNewSizeData = [
    "TOMAS",
    "DIGOS",
    "BOLOD",
    "MARA2",
    "TORI",
    "TACU",
  ];

  const obbusCrOldSizeData = [
    "DSMBN",
    "ELSA",
    "ILIG",
    "DSMPO",
    "VILLA",
    "MATI",
    "MEDE",
    "DONC",
    "CARC",
    "CARC2",
    "COMPO",
    "RIZA",
    "DSMP",
  ];

  const obbusOrNewSizeData = [];

  const obbusOrOldSizeData = [
    "BOGO",
    "DSMC",
    "DSMK",
    "DSMT2",
    "ILOI",
    // "UBAY",
  ];

  //FELY
  const felyCrNewSizeData = [];

  const felyCrOldSizeData = ["NAIC"];

  const felyOrNewSizeData = [];

  const felyOrOldSizeData = ["SANP", "TANZ",];

  // AJD
  const ajdCrNewSizeData = [];

  const ajdCrOldSizeData = [];

  const ajdOrNewSizeData = [];

  const ajdOrOldSizeData = [""];

  // BJV
  const bjvCrNewSizeData = [];

  const bjvCrOldSizeData = ["UBAY", "GUIN"];

  // CELROSE
  const celroseOrNewSizeData = [];

  const celroseOrOldSizeData = [""];

  const bjvOrNewSizeData = [];

  const bjvOrOldSizeData = [""];

  switch (true) {
    // FDL OR - CR CASES
    case fdlCrNewSizeData.some((branch) => branch === user?.branchCode):
      return <FdlNewCrSize data={data} />;
    case fdlCrOldSizeData.some((branch) => branch === user?.branchCode):
      return <FdlOldCrSize data={data} />;
    case fdlOrOldSizeData.some((branch) => branch === user?.branchCode):
      return <FdlOldOrSize data={data} />;

    // OBBUS OR - CR CASES
    case obbusCrOldSizeData.some((branch) => branch === user?.branchCode):
      return <ObbusOldCrSize data={data} />;
    case obbusOrOldSizeData.some((branch) => branch === user?.branchCode):
      return <ObbusOldOrSize data={data} />;
    case obbusCrNewSizeData.some((branch) => branch === user?.branchCode):
      return <ObbusNewCrSize data={data} />;

    // FELY OR - CR CASES
    case felyCrOldSizeData.some((branch) => branch === user?.branchCode):
      return <FelyOldCrSize data={data} />;
    case felyOrOldSizeData.some((branch) => branch === user?.branchCode):
      return <FelyOldOrSize data={data} />;

    // AJD OR - CR CASES
    case ajdOrOldSizeData.some((branch) => branch === user?.branchCode):
      return <AjdOldOrSize data={data} />;

    // BJV OR - CR CASES
    case bjvOrOldSizeData.some((branch) => branch === user?.branchCode):
      return <BjvOldOrSize data={data} />;
    case bjvCrOldSizeData.some((branch) => branch === user?.branchCode):
      return <BjvOldCrSize data={data} />;

    // CELROSE OR - CR CASES
    case celroseOrOldSizeData.some((branch) => branch === user?.branchCode):
      return <CelroseOldOrSize data={data} />;

    case luzonSizeData.some((branch) => branch === user?.branchCode):
      return <LuzonSize data={data} />;
    case HondaDESSizeData.some((branch) => branch === user?.branchCode):
      return <HondaDESSize data={data} />;
    case DAPSizeData.some((branch) => branch === user?.branchCode):
      return <DAPSize data={data} />;
    case smctCrSizeData.some((branch) => branch === user?.branchCode):
      return <SmctCrSize data={data} />;
    case dsmCrSizeData.some((branch) => branch === user?.branchCode):
      return <DsmCrSize data={data} />;
    case "BALD" === user?.branchCode:
      return <DAPBalingasag data={data} />;
    case "ILID" === user?.branchCode:
      return <DAPIligan data={data} />;
    case "TUBOD" === user?.branchCode:
      return <DAPTubod data={data} />;
    case "BAYU" === user?.branchCode:
      return <DSMBayugan data={data} />;
    // case "DSMP" === user?.branchCode:
    //   return <Consolacion data={data} />;
    case "NORZA" === user?.branchCode:
      return <DSMNorzagaray data={data} />;
    case "SANM" === user?.branchCode:
      return <DAPSanMiguel data={data} />;
    case "BINAN" === user?.branchCode:
      return <Binan data={data} />;
    // case "DSMAO" === user?.branchCode:
    //   return <Argao data={data} />;
    case "ALAD" === user?.branchCode:
      return <Alano data={data} />;
    case "BALA" === user?.branchCode:
      return <Balangasan data={data} />;
    case "DSMA" === user?.branchCode:
      return <Cambaro data={data} />;
    case "CARMCDO" === user?.branchCode:
      return <CarmenCdo data={data} />;
    // case "IPIH" === user?.branchCode:
    //   return <Ipil data={data} />; //OR
    case "SUCD" === user?.branchCode:
      return <Sucabon data={data} />;
    case "MAND" === user?.branchCode:
      return <MandaueMulti data={data} />;
    case "GENT" === user?.branchCode:
      return <HDGeneralTrias data={data} />;
    // case "SINDA" === user?.branchCode:
    //   return <HDSindangan data={data} />;
    case "SDIP" === user?.branchCode:
      return <HDDipolog data={data} />;
    case "CARMC" === user?.branchCode:
      return <HDCarmenCebu data={data} />;
    case "CERI" === user?.branchCode:
      return <Cerilles data={data} />;
    case "CALAP2" === user?.branchCode:
      return <Calape2 data={data} />;
    case "CARMC2" === user?.branchCode:
      return <CarmenCebu2 data={data} />;
    case "DSMD2" === user?.branchCode:
      return <Dipolog2 data={data} />;
    // case "MOLH" === user?.branchCode:
    //   return <HDMolave data={data} />; //OR
    case "CAMH" === user?.branchCode:
      return <HDCamino data={data} />; //OR
    case "OZAH" === user?.branchCode:
      return <HDOzamiz data={data} />; //OR
    // case "VETH" === user?.branchCode:
    //   return <HDVeterans data={data} />; //OR
    case "DSML" === user?.branchCode:
      return <HDToledo data={data} />; //OR
    // case "AURH" === user?.branchCode:
    //   return <HDAurora data={data} />; //OR
    case "DATH" === user?.branchCode:
      return <HDDatoc data={data} />; //OR
    case "DSMCA" === user?.branchCode:
      return <Calamba data={data} />;
    case "DAAN" === user?.branchCode:
      return <DaanBantayan2 data={data} />;
    case "PARD3" === user?.branchCode:
      return <HDPardo data={data} />;
    case "MARH" === user?.branchCode:
      return <HDMaranding data={data} />;
    case "LABA" === user?.branchCode:
      return <Labason data={data} />;
    case "REMI" === user?.branchCode:
      return <Remigio data={data} />;
    case "LAPU" === user?.branchCode:
      return <LapuLapu2 data={data} />;
    case "SLAP" === user?.branchCode:
      return <LapuLapu data={data} />;
    case "DSMLN" === user?.branchCode:
      return <Liloan data={data} />;
    case "MAND2" === user?.branchCode:
      return <MandaueY3s data={data} />;
    case "OROH" === user?.branchCode:
      return <HDOroquieta data={data} />;
    case "CALIN2" === user?.branchCode:
      return <HDCalinog data={data} />;
    case "OROH2" === user?.branchCode:
      return <HDOroquieta2 data={data} />;
    // case "NABU" === user?.branchCode:
    //   return <Nabunturan data={data} />;
    case "DSMSO" === user?.branchCode:
      return <SuzukiOsamiz data={data} />;
    // case "INIT" === user?.branchCode:
    //   return <HDInitao data={data} />; //OR
    case "CALA" === user?.branchCode:
      return <HDCalamba data={data} />;
    // case "BUUH" === user?.branchCode:
    //   return <HDBuug data={data} />; //OR
    // case "BULU" === user?.branchCode:
    //   return <Bulua2 data={data} />;
    case "AURO" === user?.branchCode:
      return <Aurora data={data} />;
    case "GUSA" === user?.branchCode:
      return <HDGusa data={data} />; //OR
    case "DSMBL" === user?.branchCode:
      return <Bulua data={data} />; //OR
    // case "BALAM" === user?.branchCode:
    //   return <HDBalamban data={data} />; //OR
    // case "AURO" === user?.branchCode:
    //   return <DSMAurora data={data} />; //OR
    case "INAB" === user?.branchCode:
      return <HDInabanga data={data} />; //OR
    case "JAGN" === user?.branchCode:
      return <SMCTJagna data={data} />; //OR
    case "CALI" === user?.branchCode:
      return <Calinan data={data} />;
    case "CAMD" === user?.branchCode:
      return <DAPCaminoNuevo data={data} />; //OR
    // case "PARD" === user?.branchCode:
    //   return <DSMPardo data={data} />; //OR
    case "CALAP" === user?.branchCode:
      return <SMCTCalape data={data} />;
    case "DANAO" === user?.branchCode:
      return <Danao data={data} />;
    case "MING" === user?.branchCode:
      return <Minglanilla data={data} />;
    case "DSMT" === user?.branchCode:
      return <DSMTagbilaran data={data} />; //OR
    case "CALIN" === user?.branchCode:
      return <DSMCalinog data={data} />; //OR
    case "DSMDN" === user?.branchCode:
      return <DSMCarmenCebu data={data} />; //OR
    case "ANTI" === user?.branchCode:
      return <SMCTAntique data={data} />; //OR
    case "DSMTG" === user?.branchCode:
      return <Tagum data={data} />;
    case "SLIL" === user?.branchCode:
      return <SMCTLiloan data={data} />; //OR
    case "BUUD" === user?.branchCode:
      return <Buug data={data} />;
    case "IMED" === user?.branchCode:
      return <DAPImelda data={data} />;
    case "SANJ" === user?.branchCode:
      return <SMCTSanJose data={data} />;
    case "SROS" === user?.branchCode:
      return <SMCTRosario data={data} />;
    // case "TRINI" === user?.branchCode:
    //   return <HDTrinidad data={data} />;
    case "ALAH" === user?.branchCode:
      return <HDAlano data={data} />;
    case "PAGS" === user?.branchCode:
      return <Pagsanjan data={data} />;
    // case "MOLD2" === user?.branchCode:
    //   return <DAPMolave2 data={data} />;
    // case "ANTIP" === user?.branchCode:
    //   return <SMCTAntipolo data={data} />; //OR
    case "KABA" === user?.branchCode:
      return <HDKabasalan data={data} />; //OR
    case "DASMA" === user?.branchCode:
      return <Dasmariñas data={data} />; //OR
    case "DSMB" === user?.branchCode:
      return <Basak data={data} />;
    case "KABA2" === user?.branchCode:
      return <Kabasalan data={data} />;
    // case "BALAM" === user?.branchCode:
    //   return <HDBalamban data={data} />;
    case "CARMO" === user?.branchCode:
      return <SMCTCarmona data={data} />;
    case "TALI2" === user?.branchCode:
      return <SMCTTalibon2 data={data} />;
    case "LIPA" === user?.branchCode:
      return <SMCTLipa data={data} />;
    case "JIMEDSM" === user?.branchCode:
      return <DSMJimenez data={data} />; //OR
    case "CATAR" === user?.branchCode:
      return <SMCTCatarman data={data} />;
    case "SARG" === user?.branchCode:
      return <DSMSARG data={data} />;
    case "DSMDM" === user?.branchCode:
      return <DSMToledo2 data={data} />;
    case "CATAR2" === user?.branchCode:
      return <DSMCatarman2 data={data} />;
    case "GINGO" === user?.branchCode:
      return <Gingoog data={data} />;
    case "SABLA" === user?.branchCode:
      return <Sablayan data={data} />;
    case "TALI" === user?.branchCode:
      return <SMCTTalibon data={data} />;
    case "HO-DSM" === user?.branchCode:
      return <DSMHeadOffice data={data} />;
    case "HO-DAP" === user?.branchCode:
      return <HO_DAP data={data} />;
    case "HO-SMCT" === user?.branchCode:
      return <HO_SMCT data={data} />;
    case "HO-HD" === user?.branchCode:
      return <HO_DAP data={data} />;
    case "QUEZ" === user?.branchCode:
      return <DSMQuezon data={data} />;
    case "CALD" === user?.branchCode:
      return <DAPCalamba data={data} />;
    case "SPVC" === user?.branchCode:
      return <CashSalesPropertyVenturesCorporation data={data} />;
    case "UTAP" === user?.branchCode:
      return <DsmTacloban data={data} />;
    case "BUTU" === user?.branchCode:
      return <DSMButuan data={data} />;
    case "SANPA" === user?.branchCode:
      return <HDSanPablo data={data} />;
    case "FAMY" === user?.branchCode:
    return <SMCTFamy data={data} />;
    case "ANTIP" === user?.branchCode:
    return <SMCTFamy data={data} />;
    default:
      return (
        <div className="text-center flex items-center justify-center h-screen font-bold text-lg">
          Sorry, This printing page is temporary unavailable on your branch.
          Please contact dev team for more information.
        </div>
      );
  }
};

export default CollectionReceipt;
