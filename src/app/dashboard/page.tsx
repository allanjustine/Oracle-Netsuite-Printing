"use client";
import PrivateRoute from "@/components/privateroutes";
import { useAuth } from "@/context/authcontext";
import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckDouble,
  FaCircleNotch,
  FaExclamationTriangle,
  FaEye,
  FaMinus,
  FaPlus,
  FaPrint,
  FaTrashAlt,
  FaUpload,
} from "react-icons/fa";
import { read, utils } from "xlsx";
import PrintPage from "../print/page";
import ReactDOM from "react-dom/client";
import { FaCircleXmark, FaRotate, FaX, FaXmark } from "react-icons/fa6";
import { FormatFileSize } from "@/utils/size-format/FormatFileSize";
import DragAndDropComponent from "@/components/DragAndDropComponent";
import FormattedNumber from "@/utils/FormattedNumber";
import TextLoading from "@/components/loaders/TextLoading";
import BackToTop from "@/components/buttons/BackToTop";
import api from "@/lib/axiosCall";
import { PrintData } from "@/utils/constants";
import { PrintDataType } from "@/types/PrintData";
import { Bounce, toast } from "react-toastify";
import { useVersion } from "@/context/versionContext";
import { printLabel } from "@/utils/printLabel";
import enyeFormat from "@/utils/enyeFormat";
import MaintenanceMode from "@/components/MaintenanceMode";
import ContactAdmin from "@/components/modal/ContactAdmin";
import GlobalLoader from "@/components/loaders/GlobalLoaders";
import FormattedTotalAmountDue from "@/utils/FormattedTotalAmountDue";
import FormattedAmountDue from "@/utils/FormattedAmountDue";
import FormattedSumTotalMinusLessVat from "@/utils/FormattedSumTotalMinusLessVat";
import FormattedSumTotal from "@/utils/FormattedSumTotal";
import FormattedSumTotalLessVat from "@/utils/FormattedSumTotalLessVat";
import FormattedLessWithHoldingTax from "@/utils/FormattedLessWithHoldingTax";
import SubmitReprint from "@/components/modal/SubmitReprint";
import { reprintDialogData } from "./_constants/reprintDialogData";
import PreviewOrCr from "@/components/PreviewOrCr";
import Modal from "@/components/ui/modal";
import PreviewSiCsi from "@/components/PreviewSiCsi";

export default function Page() {
  const { user } = useAuth();
  const {
    updateVersion,
    version,
    oldVersion,
    isOutDated,
    setIsOutDated,
    isAbnormalVersion,
    setIsAbnormalVersion,
    isLoading: checkingVersionLoading,
    isPrintable,
    setIsPrintable,
    isFetchingVersion,
    isMaintenance,
  }: any = useVersion();
  const [excelData, setExcelData] = useState<any[]>([]);
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileInfo, setFileInfo] = useState<{ name: string; size: string }>({
    name: "",
    size: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isHideTable, setIsHideTable] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [progress, setProgress] = useState(0);
  const [isPrintCr, setIsPrintCr] = useState(false);
  const [backToTop, setBackToTop] = useState(false);
  const [formInput, setFormInput] = useState<PrintDataType>(PrintData);
  const [isPrintLoading, setIsPrintLoading] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRefModal = useRef<HTMLButtonElement | null>(null);
  const [isAlreadyPrinted, setIsAlreadyPrinted] = useState(false);
  const [isReprintDialog, setIsReprintDialog] = useState(reprintDialogData);
  const [isShowIndicator, setIsShowIndicator] = useState(true);
  const [isPreview, setIsPreview] = useState(false);
  const [isReadyPrint, setIsReadyPrint] = useState(false);
  const isCrOrMessageError =
    "You uploaded a Cash Sales Invoice/Sales Invoice, so you can't print a Collection Receipt/Official Receipt.";
  const isCsiSiMessageError =
    "You uploaded a Collection Receipt/Official Receipt, so you can't print a Cash Sales Invoice/Sales Invoice.";

  // const internalIdColumnIndex = 0;
  const mainLineName = 0;
  const date = 1;
  const taxNumber = 2;
  const terms = 3;
  const billingAddress = 4;
  const oscaPwdIdNo = 5;
  const businessStyle = 6;
  const cardHolderSignatures = 7;
  const quantity = 8;
  const unitOfMeasurement = 9;
  const articles = 10;
  const rateInclusiveVat = 11;
  const totalAmount = 12;
  const totalSalesVatExclusive = 13;
  const vatAmount = 14;
  const totalSalesVatInclusive = 15;
  const vatAmount2 = 16;
  const totalSalesVatExclusive2 = 17;
  const totalSalesVatExclusive3 = 18;
  const vatAmount3 = 19;
  const totalSalesVatInclusive2 = 20;
  const serialNumber = 21;
  const chassisNumber = 22;
  const conductionSticker = 23;
  const rateInclusiveOfTax = 24;
  const color = 25;
  const cashier = 26;
  const refNumber = 27;
  const lessWithHoldingTax = 28;

  const CR_Date = 0;
  const CR_Name = 1;
  const CR_TIN = 2;
  const CR_Address = 3;
  const CR_BusinessStyle = 4;
  const CR_AmountInFigures = 5;
  const CR_AmountInWords = 6;
  const CR_Memo = 7;
  const CR_FormOfPayment = 8;
  const CR_PartnerName = 9;
  const CR_Reference = 10;

  // const billingAddress1 = 2;
  // const billingAddress2 = 3;
  // const billingAddress3 = 5;
  // const item = 9;
  // const units1 = 12;
  // const itemRate = 13;
  // const itemRate1 = 14;
  // const amount = 15;
  // const amountTax = 17;
  // const netTax = 18;
  // const transactionTotal = 19;

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRefModal.current &&
        !buttonRefModal.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [buttonRefModal, modalRef]);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsReprintDialog(reprintDialogData);
        setIsShowIndicator(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [modalRef]);

  useEffect(() => {
    const handleBackToTop = () => {
      if (window.scrollY > 400) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleBackToTop);

    return () => {
      window.removeEventListener("scroll", handleBackToTop);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isLoading]);

  useEffect(() => {
    if (isPrintable && isToggle) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [isPrintable, isToggle]);

  const handleBackToTop = () => {
    const options: any = {
      top: 0,
      behavior: "smooth",
    };
    window.scrollTo(options);
  };

  const handlePrint = (componentType: string) => {
    setIsDropdownOpen(false);
    setIsToggle(false);
    setIsPrintable(false);
    if (isAlreadyPrinted) {
      handlePrintCount();
      return;
    }
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      const printContent = (
        <PrintPage componentType={componentType} data={excelData} />
      );

      const printDocument = printWindow.document;
      printDocument.open();
      printDocument.write(`
          <html>
          <head>
          <script src="https://cdn.tailwindcss.com"></script>
          <title>
          ${
            isPrintCr
              ? "Collection Receipt Print"
              : "Sales Invoice/Cash Sales Invoice Print"
          }
          </title>
          <style>`);
      printDocument.write(`
          @page{
          margin: 0;
          }
          body {
            font-family: Arial, sans-serif;
          }
        `);
      printDocument.write("</style></head><body>");
      printDocument.write(`
            <div
              class="p-2 text-white fixed top-0 w-full h-auto z-50 ${
                isAbnormalVersion
                  ? "bg-yellow-500"
                  : isOutDated
                  ? "bg-red-500"
                  : "hidden"
              }"
            >
              <div class="flex justify-between items-center">
                <div class="flex space-x-3 items-center">
                  ${
                    isAbnormalVersion
                      ? '<i class="fa fa-exclamation-triangle text-2xl"></i>'
                      : '<i class="fa fa-circle-xmark text-2xl"></i>'
                  }
                  <p class="text-sm">
                    ${
                      isAbnormalVersion
                        ? "Ops! You are using an abnormal version of Oracle NetSuite Printing"
                        : "You are using the old version of Oracle NetSuite Printing. Please reload the page for the latest version"
                    }
                    . ${" "}
                    <span class="font-bold">
                      (Current Version: v${oldVersion} - Latest Version: v${version})
                    </span>
                  </p>
                  <button
                    onclick="window.close();"
                    type="button"
                    class="p-2 flex gap-2 items-center rounded-sm text-sm bg-blue-500 hover:bg-blue-400"
                  >
                    <i class="fa fa-circle-xmark"></i> <span>Close</span>
                  </button>
                </div>
              </div>
            </div>
          `);

      printDocument.write(`<div id="root"></div>`);
      printDocument.write("</body></html>");
      printDocument.close();

      printWindow.onload = () => {
        const rootElement = printWindow.document.getElementById("root");
        if (rootElement) {
          const reactRoot = ReactDOM.createRoot(rootElement);
          reactRoot.render(printContent);

          setTimeout(() => {
            printWindow.focus();
            printWindow.print();
          }, 50);
        }

        printWindow.onafterprint = () => {
          printWindow.close();
          handlePrintCount();
        };
      };
    }
  };

  const handleErrorPrint = (title: string) => {
    toast.info(title, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const printOptions = [
    {
      label: printLabel("Collection Receipt/Official Receipt", isPrintCr),
      action: () =>
        isPrintCr
          ? handlePrint("Collection Receipt")
          : handleErrorPrint(isCrOrMessageError),
    },
    {
      label: printLabel("Cash Sales Invoice/Sales Invoice", !isPrintCr),
      action: () =>
        !isPrintCr
          ? handlePrint("Cash Sales Invoice")
          : handleErrorPrint(isCsiSiMessageError),
    },
  ];

  const toggleDropdown = () => {
    setIsToggle(true);
    updateVersion();
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setIsToggle(false);
        setIsPrintable(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsPrintable]);
  useEffect(() => {
    let interval: any;
    let timeout: any;

    if (isLoading) {
      interval = setInterval(() => {
        setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
      }, 5);

      timeout = setTimeout(() => {
        setIsLoading(false);
        clearInterval(interval);
        setProgress(100);
      }, 500);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isLoading]);

  useEffect(() => {
    if (excelData.length <= 0) return;

    const fetchRecords = async () => {
      try {
        const response = await api.get("receipt-records", {
          params: {
            external_id: isPrintCr ? excelData[1][10] : excelData[1][27],
          },
        });

        const totalAmountDueFn = FormattedTotalAmountDue(
          FormattedAmountDue(
            FormattedSumTotalMinusLessVat(
              FormattedSumTotal(excelData, rateInclusiveVat, 16, quantity),
              FormattedSumTotalLessVat(
                excelData,
                rateInclusiveVat,
                16,
                quantity
              )
            ),
            FormattedLessWithHoldingTax(excelData, lessWithHoldingTax, 16)
          ),
          FormattedSumTotalLessVat(excelData, rateInclusiveVat, 16, quantity)
        );

        const totalAmountDueCrOrOr = FormattedNumber(
          excelData[1]?.[CR_AmountInFigures]
        );

        const result = response?.data?.datas?.searching_if_exists;

        // const result = receipts?.some((item: any) => {
        //   return (
        //     item.external_id ===
        //       (isPrintCr ? excelData[1][10] : excelData[1][27]) &&
        //     item.print_count >= 1 &&
        //     item.re_print === false
        //   );
        // });
        setIsAlreadyPrinted(result);
        setFormInput({
          external_id: isPrintCr ? excelData[1][10] : excelData[1][27],
          print_by: `${user?.branchCode}-${user?.branchName}`,
          total_amount_due: isPrintCr
            ? Number(totalAmountDueCrOrOr.replace(/,/g, ""))
            : Number(totalAmountDueFn.replace(/,/g, "")),
        });
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchRecords();
  }, [excelData, isPrintCr, user]);

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    setProgress(0);
    setIsPreview(false);
    setIsReadyPrint(false);
    const fileName = file.name;

    const fileSize = FormatFileSize(file.size);

    setFileInfo({
      name: fileName,
      size: fileSize,
    });

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target?.result as string;

      const workbook = read(data, { type: "array" });

      const worksheetName = workbook.SheetNames[0];

      const worksheet = workbook.Sheets[worksheetName];

      const jsonData: any[] = utils.sheet_to_json(worksheet, {
        header: 1,
        raw: false,
      });

      const stringData = jsonData.map((row) =>
        row.map((cell: any) => {
          return String(cell);
        })
      );

      setExcelData(stringData);

      if (stringData[0]?.length <= 11) {
        setIsPrintCr(true);
      } else {
        setIsPrintCr(false);
      }
    };

    setIsFileUploaded(true);
    reader.readAsArrayBuffer(file);

    setIsLoading(true);
  };

  const handleRemoveFile = () => {
    setExcelData([]);
    setFileInfo({ name: "", size: "" });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setIsFileUploaded(false);
    setProgress(0);
    setFormInput(PrintData);
    setIsPreview(false);
    setIsReadyPrint(false);
  };
  const handleCancelUpload = () => {
    setExcelData([]);
    setFileInfo({ name: "", size: "" });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setIsFileUploaded(false);
    setIsLoading(false);
    setProgress(0);
    setFormInput(PrintData);
    setIsPreview(false);
    setIsReadyPrint(false);
  };

  const handleUploadFile = () => {
    updateVersion();
    if (isOutDated || isAbnormalVersion) {
      window.location.reload();
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleCloseTable = (rowIndex: number) => () => {
    setIsHideTable((isHideTable) => ({
      ...isHideTable,
      [rowIndex]: !isHideTable[rowIndex],
    }));
  };

  const handlePrintCount = async () => {
    setIsPrintLoading(true);
    try {
      const response = await api.post("/print-receipt-count", formInput);
      if (response.status === 201) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error: any) {
      console.error(error);
      if (error.response.status === 400) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        setIsReprintDialog({
          isOpen: true,
          message: error.response.data.message,
        });
        setIsShowIndicator(true);
      }
    } finally {
      setIsPrintLoading(false);
      setExcelData([]);
      setFileInfo({ name: "", size: "" });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setIsFileUploaded(false);
      setProgress(0);
      setFormInput(PrintData);
      setIsPreview(false);
      setIsReadyPrint(false);
    }
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsReprintDialog(reprintDialogData);
    setIsShowIndicator(true);
  };

  if (isFetchingVersion) return <GlobalLoader />;

  if (isMaintenance && !isFetchingVersion)
    return (
      <>
        <MaintenanceMode handleModal={handleModal} buttonRef={buttonRefModal} />
        <ContactAdmin
          isOpen={isOpen}
          onClose={handleModal}
          modalRef={modalRef}
        />
      </>
    );

  const handlePreview = () => {
    setIsPreview(!isPreview);
  };

  const handleGoPrint = () => {
    setIsReadyPrint(true);
    setIsPreview(false);
    toggleDropdown();
  };

  return (
    <PrivateRoute handleModal={handleModal} buttonRefModal={buttonRefModal}>
      {(isOutDated || isAbnormalVersion) && (
        <div
          className={`p-2 text-white fixed top-0 w-full h-auto z-50 ${
            isAbnormalVersion ? "bg-yellow-500" : "bg-red-500"
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="flex space-x-3 items-center">
              {isAbnormalVersion ? (
                <FaExclamationTriangle className="text-2xl" />
              ) : (
                <FaCircleXmark className="text-2xl" />
              )}
              <p className="text-sm">
                {isAbnormalVersion
                  ? "Ops! You are using an abnormal version of Oracle NetSuite Printing"
                  : "You are using the old version of Oracle NetSuite Printing. Please reload the page for the latest version"}
                .{" "}
                <span className="font-bold">
                  (Current Version: v{oldVersion} - Latest Version: v{version})
                </span>
              </p>
              <button
                onClick={() => window.location.reload()}
                type="button"
                className="p-2 flex gap-2 items-center rounded-sm text-sm bg-blue-500 hover:bg-blue-400"
              >
                <FaRotate /> <span>Reload now</span>
              </button>
            </div>
            <button
              onClick={() =>
                isAbnormalVersion
                  ? setIsAbnormalVersion(false)
                  : setIsOutDated(false)
              }
              type="button"
              className="mr-3"
            >
              <FaX />
            </button>
          </div>
        </div>
      )}
      <div className="mt-5 pl-5">
        <h2 className="text-2xl text-[#333] uppercase">
          Welcome to the official Oracle NetSuite Printing System,{" "}
          <span className="font-semibold">{user?.branchName}</span>!
        </h2>
      </div>
      <div className="mt-5 px-5">
        <div className="border border-[#005483] pl-5 py-5 relative">
          <div className="mb-2 text-xl font-bold">
            {isLoading ? (
              <TextLoading />
            ) : excelData.length > 0 && !isOutDated && !isAbnormalVersion ? (
              "Preview Data"
            ) : isOutDated ? (
              "New Version Detected"
            ) : isAbnormalVersion ? (
              "Abnormal Version Detected"
            ) : (
              "Import Data"
            )}
          </div>
          <div className="z-10">
            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx, .xls, .csv"
              className="hidden"
              id="fileInput"
              onChange={handleFileUpload}
            />
            <div className="flex gap-2">
              <button
                type="button"
                disabled={isLoading}
                onClick={handleUploadFile}
                className="p-2 flex gap-2 items-center bg-blue-500/80 text-white hover:bg-blue-600/80 hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-md"
              >
                {isLoading ? (
                  <>
                    <FaCircleNotch
                      size={20}
                      color="#fff"
                      className="animate-spin"
                    />{" "}
                    Uploading
                  </>
                ) : (
                  <>
                    {excelData.length > 0 &&
                    !isOutDated &&
                    !isAbnormalVersion ? (
                      <>
                        <FaRotate size={20} color="#fff" /> Re-Upload
                      </>
                    ) : isOutDated || isAbnormalVersion ? (
                      <>
                        <FaRotate size={20} color="#fff" /> Reload Now
                      </>
                    ) : (
                      <>
                        <FaUpload size={20} color="#fff" /> Upload
                      </>
                    )}
                  </>
                )}
              </button>
              {isLoading
                ? excelData.length > 0 && (
                    <button
                      type="button"
                      onClick={handleCancelUpload}
                      className="p-2 flex gap-2 items-center bg-yellow-500/80 text-white hover:bg-yellow-600/80 hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-md"
                    >
                      <FaXmark size={20} color="#fff" /> Cancel Upload
                    </button>
                  )
                : excelData.length > 0 &&
                  !isOutDated &&
                  !isAbnormalVersion && (
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-2 flex gap-2 items-center bg-red-500/80 text-white hover:bg-red-600/80 hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-md"
                    >
                      <FaTrashAlt size={20} color="#fff" /> Remove
                    </button>
                  )}
              {/* {!isLoading &&
                excelData.length > 0 &&
                !isOutDated &&
                !isAbnormalVersion && (
                  <button
                    type="button"
                    disabled={isPrintLoading}
                    onClick={handlePrintCount}
                    className="p-2 gap-2 items-center bg-green-500/80 text-white hover:bg-green-600/80 hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-md"
                  >
                    {isPrintLoading ? (
                      <span className="flex items-center gap-2">
                        <FaCircleNotch
                          className="animate-spin"
                          size={20}
                          color="#fff"
                        />{" "}
                        <span>Please wait...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <FaCheckDouble size={20} color="#fff" />{" "}
                        <span>Done Print</span>
                      </span>
                    )}
                  </button>
                )} */}
            </div>
            {fileInfo.name && !isLoading && (
              <div className="mt-2">
                <p>
                  <strong>File Name:</strong> {fileInfo.name}
                </p>
                <p>
                  <strong>File Size:</strong> {fileInfo.size}
                </p>
              </div>
            )}
          </div>

          <div
            className={`absolute top-0 transition-all duration-100 ease-linear left-0 h-full -z-10 ${
              progress === 100 && !isOutDated && !isAbnormalVersion
                ? "bg-green-100/70"
                : isOutDated
                ? "bg-red-100/70"
                : isAbnormalVersion
                ? "bg-yellow-100/70"
                : "bg-gradient-to-r from-[#005483] to-[#2eb2ff] opacity-20"
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div
          className={`w-full flex justify-end relative pr-5 ${
            isFileUploaded ? "py-2" : "py-4"
          } my-5 bg-[#dfe4eb]`}
        >
          {isFileUploaded && (
            <>
              <div className="flex gap-3 items-center">
                {!isReadyPrint && (
                  <button
                    type="button"
                    onClick={handlePreview}
                    className="font-semibold flex gap-2 items-center"
                  >
                    <FaEye size={20} color="#333" /> <span>Preview</span>
                  </button>
                )}
                <div className="group">
                  <button
                    type="button"
                    disabled={!isReadyPrint}
                    ref={buttonRef}
                    onClick={toggleDropdown}
                    className={`flex items-center gap-2 font-semibold ${
                      isLoading && "opacity-0"
                    } ${!isReadyPrint && "cursor-not-allowed opacity-50"}`}
                    title={`${
                      isReadyPrint
                        ? "Print Now"
                        : "Please Preview First to Proceed"
                    }`}
                  >
                    {checkingVersionLoading ? (
                      <>
                        <FaCircleNotch
                          className="animate-spin"
                          size={20}
                          color="#333"
                        />{" "}
                        Checking Version...
                      </>
                    ) : (
                      <>
                        <FaPrint size={20} color="#333" /> Print Now
                      </>
                    )}
                  </button>

                  {!isReadyPrint && (
                    <>
                      <span className="group-hover:opacity-100 text-sm scale-90 group-hover:scale-100 opacity-0 transition-all duration-300 ease-in-out absolute bottom-10 z-50 right-0 bg-gray-900 px-2 py-1 text-white rounded">
                        Please Preview First to Proceed
                      </span>
                      <span className="w-0 h-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 ease-in-out absolute bottom-8 right-16 rotate-180 z-50 opacity-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-black"></span>
                    </>
                  )}
                </div>
              </div>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute flex flex-col right-5 mt-10 bg-[#dfe4eb] border border-slate-200 shadow-xl z-50"
                >
                  {printOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={option.action}
                      className="px-2 text-center text-sm font-medium py-1 hover:bg-white"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        {isLoading ? (
          <div className="text-blue-500 flex justify-center items-center h-32">
            <FaCircleNotch size={50} className="animate-spin" />
          </div>
        ) : excelData && excelData[0]?.length > 11 ? (
          excelData.slice(1).map((row, rowIndex, array) => (
            <div key={rowIndex} className="relative">
              <button
                type="button"
                id="button-for-hide"
                onClick={handleCloseTable(rowIndex)}
                className="absolute -top-[48px] left-3 rounded-lg bg-[#a1c1ed] px-2 py-0.5 hover:bg-[#8caad4]"
              >
                {isHideTable[rowIndex] ? (
                  <FaPlus size={13} color="#333" />
                ) : (
                  <FaMinus size={13} color="#333" />
                )}
              </button>
              <div
                className={`${
                  isHideTable[rowIndex]
                    ? "max-h-0 overflow-y-hidden"
                    : "max-h-[1000px] overflow-y-auto"
                } my-5 grid grid-cols-5 gap-3 text-sm text-[#333] px-10 transform transition-all duration-300 ease-in-out`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>Chassis Number</p>
                    <p className="font-semibold">
                      {row[chassisNumber] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Mainline Name</p>
                    <p className="font-semibold">
                      {row[mainLineName]
                        ?.replace(/Ã/g, "Ñ")
                        .replace(/Ã‘/g, "Ñ")
                        .replace(/Ã±/g, "ñ") || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Billing Address</p>
                    <p className="font-semibold">
                      {row[billingAddress] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Color</p>
                    <p className="font-semibold">{row[color] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Cashier</p>
                    <p className="font-semibold">
                      {row[cashier]
                        ?.replace(/Ã/g, "Ñ")
                        .replace(/Ã‘/g, "Ñ")
                        .replace(/Ã±/g, "ñ") || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>Tax Number</p>
                    <p className="font-semibold">{row[taxNumber] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Date</p>
                    <p className="font-semibold">{row[date] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Terms</p>
                    <p className="font-semibold">{row[terms] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Serial Number</p>
                    <p className="font-semibold">
                      {row[serialNumber] || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>Articles</p>
                    <p className="font-semibold">{row[articles] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Quantity</p>
                    <p className="font-semibold">
                      {row[quantity]?.replace(/.0$/, "") || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Unit of Measurement</p>
                    <p className="font-semibold">
                      {row[unitOfMeasurement] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Conduction Sticker</p>
                    <p className="font-semibold">
                      {row[conductionSticker] || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>OSCA/PWD ID No.</p>
                    <p className="font-semibold">{row[oscaPwdIdNo] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Business Style</p>
                    <p className="font-semibold">
                      {row[businessStyle] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Cardholder's Signature</p>
                    <p className="font-semibold">
                      {row[cardHolderSignatures] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Unit Price</p>
                    <p className="font-semibold">
                      {FormattedNumber(row[rateInclusiveVat]) || "0.00"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Amount</p>
                    <p className="font-semibold">
                      {FormattedNumber(row[quantity] * row[rateInclusiveVat]) ||
                        "0.00"}
                    </p>
                  </div>
                </div>
                <div>
                  <table>
                    <thead>
                      <tr className="bg-[#607799]">
                        <th colSpan={2} className="text-white p-2 text-left">
                          SUMMARY
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#f1f1f1]">
                      <tr>
                        <td className="text-left p-2">
                          Total Sales (VAT Inclusive)
                        </td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(
                            row[quantity] * row[totalSalesVatInclusive]
                          ) || "0.00"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left p-2">Less: VAT</td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(row[vatAmount]) || "0.00"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left p-2">Amount: Net of VAT</td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(
                            row[quantity] * row[totalSalesVatExclusive]
                          ) || "0.00"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left p-2">Amount Due</td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(
                            row[quantity] * row[totalSalesVatExclusive2]
                          ) || "0.00"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left p-2">Add: VAT</td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(row[vatAmount2]) || "0.00"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left p-2">TOTAL AMOUNT DUE</td>
                        <td className="text-right p-2 font-semibold">
                          {FormattedNumber(
                            row[quantity] * row[totalSalesVatInclusive]
                          ) || "0.00"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div></div>
              </div>
              <div
                className={`w-full flex justify-end pr-5 py-5 my-5 bg-[#dfe4eb] 
                  ${
                    isHideTable[rowIndex] && rowIndex === array.length - 1
                      ? "hidden"
                      : ""
                  }
                  `}
              />
            </div>
          ))
        ) : excelData && excelData[0]?.length <= 11 ? (
          excelData.slice(1).map((row, rowIndex, array) => (
            <div key={rowIndex} className="relative">
              <button
                type="button"
                id="button-for-hide"
                onClick={handleCloseTable(rowIndex)}
                className="absolute -top-[48px] left-3 rounded-lg bg-[#a1c1ed] px-2 py-0.5 hover:bg-[#8caad4]"
              >
                {isHideTable[rowIndex] ? (
                  <FaPlus size={13} color="#333" />
                ) : (
                  <FaMinus size={13} color="#333" />
                )}
              </button>
              <div
                className={`${
                  isHideTable[rowIndex]
                    ? "max-h-0 overflow-y-hidden"
                    : "max-h-[1000px] overflow-y-auto"
                } my-5 grid grid-cols-5 gap-3 text-sm text-[#333] px-10 transform transition-all duration-300 ease-in-out`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>Customer Name</p>
                    <p className="font-semibold">
                      {enyeFormat(row[CR_Name]) || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Date</p>
                    <p className="font-semibold">{row[CR_Date] || "N/A"}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>TIN</p>
                    <p className="font-semibold">{row[CR_TIN] || "N/A"}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Address</p>
                    <p className="font-semibold">{row[CR_Address] || "N/A"}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>Business Style</p>
                    <p className="font-semibold">
                      {row[CR_BusinessStyle] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Memo</p>
                    <p className="font-semibold">{row[CR_Memo] || "N/A"}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>Amount in Figures</p>
                    <p className="font-semibold">
                      {row[CR_AmountInFigures] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Amount in Words</p>
                    <p className="font-semibold">
                      {row[CR_AmountInWords] || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <p>Form of Payment</p>
                    <p className="font-semibold">
                      {row[CR_FormOfPayment] || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Partner Name</p>
                    <p className="font-semibold">
                      {row[CR_PartnerName] || "N/A"}
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
              <div
                className={`w-full flex justify-end pr-5 py-5 my-5 bg-[#dfe4eb] 
                  ${
                    isHideTable[rowIndex] && rowIndex === array.length - 1
                      ? "hidden"
                      : ""
                  }
                  `}
              />
            </div>
          ))
        ) : (
          <div className="flex justify-center my-5">
            <DragAndDropComponent
              setFileInfo={setFileInfo}
              setExcelData={setExcelData}
              setIsFileUploaded={setIsFileUploaded}
              handleUploadFile={handleUploadFile}
              setIsLoading={setIsLoading}
              setIsPrintCr={setIsPrintCr}
            />
          </div>
        )}
      </div>
      <BackToTop backToTop={backToTop} handleBackToTop={handleBackToTop} />
      <ContactAdmin isOpen={isOpen} onClose={handleModal} modalRef={modalRef} />
      <SubmitReprint
        isOpen={isReprintDialog.isOpen}
        onClose={handleClose}
        modalRef={modalRef}
        message={isReprintDialog.message}
        setIsShowIndicator={setIsShowIndicator}
        isShowIndicator={isShowIndicator}
      />
      <Modal
        isOpen={isPreview}
        onClose={handlePreview}
        handleGoPrint={handleGoPrint}
      >
        {isPrintCr ? (
          <PreviewOrCr data={excelData} />
        ) : (
          <PreviewSiCsi data={excelData} />
        )}
      </Modal>
    </PrivateRoute>
  );
}
