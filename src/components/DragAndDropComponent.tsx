import { FormatFileSize } from "@/utils/size-format/FormatFileSize";
import { useState } from "react";
import { read, utils } from "xlsx";

export default function DragAndDropComponent({
  setFileInfo,
  setExcelData,
  setIsFileUploaded,
  handleUploadFile,
  setIsLoading,
  setIsPrintCr,
}: any) {
  const [isOnDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleOnDrop = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

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
  return (
    <div
      className={`w-80 h-64 p-6 border-2 hover:cursor-pointer border-blue-500 rounded-lg text-center flex flex-col justify-center items-center hover:bg-blue-50 transition-all ${
        isOnDragOver ? "bg-blue-100" : "bg-white border-dashed animate-pulse"
      }`}
      onClick={handleUploadFile}
      id="drop-area"
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div className="flex flex-col gap-2">
        <div className="text-blue-400 text-lg font-medium" id="message">
          Drag and drop an Excel file here
        </div>
        <div className="text-gray-300 text-sm">
          .xlsx, .xlsm, .xltx, .xltm, .csv
        </div>
      </div>
      <div className="mt-2 text-gray-500 text-sm" id="file-info" />
      <div className="mt-2 text-red-500 text-sm" id="error-message" />
    </div>
  );
}
