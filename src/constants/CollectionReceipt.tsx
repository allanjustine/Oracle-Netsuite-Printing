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
import MandaueMulti from "@/utils/official-receipt/global/obbus/old/dsm/MandaueMulti";
import HDGeneralTrias from "@/utils/collectionreceipt/global/fdl/new/hd/HDGeneralTrias";
import HDSindangan from "@/utils/collectionreceipt/global/fdl/old/hd/HDSindangan";
import HDDipolog from "@/utils/collectionreceipt/global/fdl/old/hd/HDDipolog";
import HDCarmenCebu from "@/utils/collectionreceipt/global/fdl/old/hd/HDCarmenCebu";
import Cerilles from "@/utils/official-receipt/global/obbus/old/dsm/Cerilles";
import Calape2 from "@/utils/official-receipt/global/fdl/old/smct/Calape2";
import CarmenCebu2 from "@/utils/official-receipt/global/ajd/old/dsm/CarmenCebu2";
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
import HDMaranding from "@/utils/official-receipt/global/fdl/old/hd/HDMaranding";
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
import MandaueY3s from "@/utils/official-receipt/global/obbus/old/dsm/MandaueY3s";
import HDBalamban from "@/utils/official-receipt/global/fdl/old/hd/HDBalamban";
import DSMAurora from "@/utils/official-receipt/global/fdl/old/dsm/DSMAurora";
import FelyOldOrSize from "@/utils/official-receipt/global/fely/old/FelyOldOrSize";
import BjvOldCrSize from "@/utils/collectionreceipt/global/bjv/old/BjvOldCrSize";
// import Argao from "@/utils/collectionreceipt/global/fdl/old/dsm/Argao";

const CollectionReceipt: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  const luzonSizeData = ["CARMO", "DASMA"];

  const HondaDESSizeData = [
    //"AURH",
    "BALAM",
    //"BUUH",
    //"CALIN",
    "BUUH",
    "CALIN",
    //"CAMH",
    //"CARMC",
    //"DATH",
    //"DSML",
    "GUSA",
    ///"PARD3",
    "TRINI",
    //"SDIP",
    "KABA",
    //"MARH",
    //"SINDA",
    "SMCT",
    //"VETH",
    "VILLA2",
  ];

  const DAPSizeData = [
    "AURD",
    "BUUD",
    "CALD",
    "CAMD",
    "IMED",
    "SIND",
    "DAPI",
    "DIPD",
    "INIT2",
    "KABD",
    "LABD",
    "MANO",
    "MARA2",
    "MARD",
    "OZAD",
    "PUTD",
    "VITA",
  ];

  const smctCrSizeData = [
    // "ALEN",
    "BANTA",
    "BAYB",
    "CALAP",
    "CALI",
    "FAMY",
    "GUIN",
    "JAGN",
    "BOHK",
    "LOAY",
    "MADRI",
    "MANG",
    "NAIC",
    //"PAGS",
    "SALA",
    // "SANJ",
    "SANP",
    "SANT2",
    "SILA",
    "AKLA",
    "CALAP2",
    // "LIPA",
    "SROS",
    "TALI2",
    "TANZ",
    //"TANZ2",
    "TRINI2",
    "VALEN",
    "YATI",
  ];

  const dsmCrSizeData = [
    "BOGO",
    "CALIN",
    "CARS",
    "CATAR2",
    "CATM",
    "COMPO",
    "CONSO",
    "DIGOS",
    "DONC",
    "CARCAR",
    "DSMB",
    "DSMBN",
    "DSMCN",
    "DSMCN",
    "DSMD",
    "DSMD2",
    "DSMK",
    "DSMPO",
    "DSMSB",
    "DSMT2",
    "DSMTA",
    "DSMV",
    "ELSA",
    "ILIG",
    "ILOI",
    "JIMEDSM",
    "KABA2",
    "KATI",
    "MARA",
    "MATI",
    "MEDE",
    "RIZA",
    "SARG",
    // "SLIL",
    "TACU",
    "TAGUM",
    "TOMAS",
    "TORI",
    "TUBU",
    "VILLA",
  ];

  //FDL
  const fdlCrNewSizeData = ["TANH", "TANZ2", "JIME", "IPID", "OROD"];

  const fdlCrOldSizeData = ["CARMB", "CATAR", "SANJ", "LIPA", "ALEN", "GUIN2", "MALA", "MOLD", "MOLD2", "LILD"];

  const fdlOrNewSizeData = [];

  const fdlOrOldSizeData = ["PAGS", "NUND2"];

  // OBBUS
  const obbusCrNewSizeData = [];

  const obbusCrOldSizeData = [""];

  const obbusOrNewSizeData = [];

  const obbusOrOldSizeData = ["SLIL"];

  //FELY
  const felyCrNewSizeData = [];

  const felyCrOldSizeData = [""];

  const felyOrNewSizeData = [];

  const felyOrOldSizeData = ["ANTIP"];

  // AJD
  const ajdCrNewSizeData = [];

  const ajdCrOldSizeData = [];

  const ajdOrNewSizeData = [];

  const ajdOrOldSizeData = [""];

  // BJV
  const bjvCrNewSizeData = [];

  const bjvCrOldSizeData = [
    // "UBAY",
    "INAB",
  ];

  const bjvOrNewSizeData = [];

  const bjvOrOldSizeData = ["UBAY"];

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
    case "DSMP" === user?.branchCode:
      return <Consolacion data={data} />;
    case "NORZA" === user?.branchCode:
      return <DSMNorzagaray data={data} />;
    case "SANM" === user?.branchCode:
      return <DAPSanMiguel data={data} />;
    case "BINAN" === user?.branchCode:
      return <Binan data={data} />;
    case "DSMAO" === user?.branchCode:
      return <Argao data={data} />;
    case "ALAD" === user?.branchCode:
      return <Alano data={data} />;
    case "BALA" === user?.branchCode:
      return <Balangasan data={data} />;
    case "DSMA" === user?.branchCode:
      return <Cambaro data={data} />;
    case "CARMCDO" === user?.branchCode:
      return <CarmenCdo data={data} />;
    case "IPIH" === user?.branchCode:
      return <Ipil data={data} />; //OR
    case "SUCD" === user?.branchCode:
      return <Sucabon data={data} />;
    case "MAND" === user?.branchCode:
      return <MandaueMulti data={data} />;
    case "GENT" === user?.branchCode:
      return <HDGeneralTrias data={data} />;
    case "SINDA" === user?.branchCode:
      return <HDSindangan data={data} />;
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
    case "MOLH" === user?.branchCode:
      return <HDMolave data={data} />; //OR
    case "CAMH" === user?.branchCode:
      return <HDCamino data={data} />; //OR
    case "OZAH" === user?.branchCode:
      return <HDOzamiz data={data} />; //OR
    case "VETH" === user?.branchCode:
      return <HDVeterans data={data} />; //OR
    case "DSML" === user?.branchCode:
      return <HDToledo data={data} />; //OR
    case "AURH" === user?.branchCode:
      return <HDAurora data={data} />; //OR
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
      return <Remigio data={data} />; //OR
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
    case "NABU" === user?.branchCode:
      return <Nabunturan data={data} />;
    case "DSMSO" === user?.branchCode:
      return <SuzukiOsamiz data={data} />;
    case "INIT" === user?.branchCode:
      return <HDInitao data={data} />; //OR
    case "CALA" === user?.branchCode:
      return <HDCalamba data={data} />; //OR
    case "BUUH" === user?.branchCode:
      return <HDBuug data={data} />; //OR
    case "BULU" === user?.branchCode:
      return <Bulua2 data={data} />;
    case "AURO" === user?.branchCode:
      return <Aurora data={data} />;
    case "GUSA" === user?.branchCode:
      return <HDGusa data={data} />; //OR
    case "DSMBL" === user?.branchCode:
      return <Bulua data={data} />; //OR
    case "BALAM" === user?.branchCode:
      return <HDBalamban data={data} />; //OR
    case "AURO" === user?.branchCode:
      return <DSMAurora data={data} />; //OR
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
