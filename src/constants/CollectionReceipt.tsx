"use client";
import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import LuzonSize from "@/utils/collectionreceipt/LuzonSize";
import Size1Collection from "@/utils/collectionreceipt/size1";
import Size2Collection from "@/utils/collectionreceipt/size2";
import Size3Collection from "@/utils/collectionreceipt/size3";
import Size4Collection from "@/utils/collectionreceipt/size4";
import HondaDESSize from "@/utils/collectionreceipt/global/HondaDESSize";
import DAPSize from "@/utils/collectionreceipt/global/DAPSize";
import SmctCrSize from "@/utils/collectionreceipt/global/SmctCrSize";
import DsmCrSize from "@/utils/collectionreceipt/global/DsmCrSize";
import DAPBalingasag from "@/utils/collectionreceipt/global/dap/DAPBalingasag";
import DAPIligan from "@/utils/collectionreceipt/global/dap/DAPIligan";
import DAPTubod from "@/utils/collectionreceipt/global/dap/DAPTubod";
import DSMBayugan from "@/utils/collectionreceipt/global/dsm/new/fdl/DSMBayugan";
import Consolacion from "@/utils/official-receipt/global/fdl/old/dsm/Consolacion";
import Argao from "@/utils/official-receipt/global/fdl/old/dsm/Argao";
import Alano from "@/utils/collectionreceipt/global/fdl/new/dsm/Alano";
import Balangasan from "@/utils/collectionreceipt/global/obbus/old/dsm/Balangasan";
import Cambaro from "@/utils/official-receipt/global/fdl/old/dsm/Cambaro";
// import Argao from "@/utils/collectionreceipt/global/dsm/new/fdl/Argao";

const CollectionReceipt: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  // const size1 = [
  //   "JIME",
  //   "MADRI",
  //   "OROD",
  //   "DSMBN",
  //   "DSMBN",
  //   "DSMSB",
  //   "MARA2",
  //   "BALA",
  //   "DIPD",
  //   "SALA",
  //   "DSMV",
  //   "CARC2",
  //   "LIPA",
  //   "DSMDB",
  //   "DSMCA",
  //   "RIZD",
  //   "AURD",
  //   "JIMEDSM",
  //   "ILID",
  //   "DATH",
  //   "KATI",
  //   "MOLD2",
  //   "DSMTA",
  //   "BONI",
  //   "DSMTG",
  //   "SDAV",
  //   "DAPI",
  //   "CARMB",
  //   "LABD",
  //   "ILIG",
  //   "VITA",
  //   "BANTA",
  //   "CATAR",
  //   "DIPD2",
  //   "IPID",
  //   "MOLD",
  //   "SUCD",
  //   "DSMK",
  //   "TALI",
  //   "BALAM",
  //   "CALD",
  //   "DSMPO",
  //   "YATI",
  //   "ALEN",
  //   "BINAN",
  //   "LILD",
  //   "OROH",
  //   "SIND",
  //   "TUBOD",
  //   "BULU",
  //   "MARD",
  //   "MEDE",
  //   "ALIC",
  //   "IMED",
  //   "LOAY",
  //   "MOLDS",
  //   "MALA",
  //   "VILLA",
  //   "CARC",
  //   "GUIN2",
  //   "REMI",
  // ];
  // const size2 = [
  //   "GENT",
  //   "SANT2",
  //   "SAGBA",
  //   "TALI2",
  //   "SANM",
  //   "TANZ2",
  //   "ALAD",
  //   "TANZ3",
  //   "INIT2",
  // ];
  // const size3 = ["BOLOD", "MING", "DANAO", "TOMAS", "CATAR2", "CARMC2"];
  // const size4 = ["SANP", "FAMY", "LAPU", "ANTIP", "SROS", "UBAY", "NAIC"];

  const luzonSizeData = [
    // "ANTIP",
    // "BINAN",
    "CARMO",
    "DASMA",
    // "FAMY",
    // "LIPA",
    // "NAIC",
    // "PAGS",
    // "SANJ",
    // "SANM",
    // "SANP",
    // "SILA",
    "SLAS",
    // "SROS",
    "TANH",
    // "TANZ",
  ];

  const HondaDESSizeData = [
    "AURH",
    "BALAM",
    "BUUH",
    "CALIN",
    "CAMH",
    "CARMC",
    "DATH",
    "DSML",
    "GENT",
    "GUSA",
    "PARD3",
    "TRINI",
    "SDIP",
    "INAB",
    "KABA",
    "MARH",
    "OROH",
    "OROH2",
    "SINDA",
    "SMCT",
    "VETH",
    "VILLA2",
  ];

  const DAPSizeData = [
    "AURD",
    "BUUD",
    "CALD",
    "CAMD",
    "IMED",
    "IPID",
    "SIND",
    "DAPI",
    "DIPD",
    "DIPD2",
    "INIT2",
    "JIME",
    "KABD",
    "LABD",
    "LILD",
    "MANO",
    "MARA2",
    "MARD",
    "MOLD",
    "NUND2",
    "OROD",
    "OZAD",
    "PUTD",
    "SANM",
    "VITA",
  ];

  const smctCrSizeData = [
    "ALEN",
    "BANTA",
    "BAYB",
    "CALAP",
    "CALI",
    "CARMB",
    "CATAR",
    "FAMY",
    "GUIN",
    "JAGN",
    "BOHK",
    "LOAY",
    "MADRI",
    "MALA",
    "MANG",
    "NAIC",
    "PAGS",
    "SALA",
    "SANJ",
    "SANP",
    "SANT2",
    "SILA",
    "AKLA",
    "ANTIP",
    "CALAP2",
    "BINAN",
    "LIPA",
    "SROS",
    "TALI2",
    "TANZ",
    "TANZ2",
    "TRINI2",
    "VALEN",
    "YATI",
  ];

  const dsmCrSizeData = [
    "AURO",
    "BOGO",
    "BULU",
    "CALIN",
    "CAMBARO",
    "CARMC2",
    "CARMCDO",
    "CARS",
    "CATAR2",
    "CATM",
    "CERI",
    "COMPO",
    "CONSO",
    "DIGOS",
    "DONC",
    "CARCAR",
    "DSMB",
    "DSMBL",
    "DSMBN",
    "DSMCA",
    "DSMCN",
    "DSMCA",
    "DSMCN",
    "DSMD",
    "DSMD2",
    "DSMK",
    "DSMLN",
    "DSMPO",
    "DSMSB",
    "DSMSO",
    "DSMT2",
    "DSMTA",
    "DSMV",
    "ELSA",
    "ILIG",
    "ILOI",
    "JIMEDSM",
    "KABA2",
    "KATI",
    "LABA",
    "LAPU",
    "MARA",
    "MATI",
    "MEDE",
    "REMI",
    "RIZA",
    "SARG",
    "SLIL",
    "TACU",
    "TAGUM",
    "TOMAS",
    "TORI",
    "TUBU",
    "VILLA",
    "DSMBL",
  ];

  // if (size1.some((branch) => branch === user?.branchCode)) {
  //   return <Size1Collection data={data} />;
  // } else if (size2.some((branch) => branch === user?.branchCode)) {
  //   return <Size2Collection data={data} />;
  // } else if (size3.some((branch) => branch === user?.branchCode)) {
  //   return <Size3Collection data={data} />;
  // } else if (size4.some((branch) => branch === user?.branchCode)) {
  //   return <Size4Collection data={data} />;
  // } else {
  //   return <>None</>;
  // }
  if (luzonSizeData.some((branch) => branch === user?.branchCode)) {
    return <LuzonSize data={data} />;
  } else if (HondaDESSizeData.some((branch) => branch === user?.branchCode)) {
    return <HondaDESSize data={data} />;
  } else if (DAPSizeData.some((branch) => branch === user?.branchCode)) {
    return <DAPSize data={data} />;
  } else if (smctCrSizeData.some((branch) => branch === user?.branchCode)) {
    return <SmctCrSize data={data} />;
  } else if (dsmCrSizeData.some((branch) => branch === user?.branchCode)) {
    return <DsmCrSize data={data} />;
  } else if ("BALD" === user?.branchCode) {
    return <DAPBalingasag data={data} />;
  } else if ("ILID" === user?.branchCode) {
    return <DAPIligan data={data} />;
  } else if ("TUBOD" === user?.branchCode) {
    return <DAPTubod data={data} />;
  } else if ("BAYU" === user?.branchCode) {
    return <DSMBayugan data={data} />;
  } else if ("DSMP" === user?.branchCode) {
    return <Consolacion data={data} />;
  } else if ("DSMAO" === user?.branchCode) {
    return <Argao data={data} />;
  } else if ("ALAD" === user?.branchCode) {
    return <Alano data={data} />;
  } else if ("BALA" === user?.branchCode) {
    return <Balangasan data={data} />;
  } else if ("DSMA" === user?.branchCode) {
    return <Cambaro data={data} />;
  } else {
    return (
      <div className="text-center flex items-center justify-center h-screen font-bold text-lg">
        Sorry, This page is temporary unavailable on your branch
      </div>
    );
  }
};

export default CollectionReceipt;
