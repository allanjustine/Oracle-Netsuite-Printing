import { FormatFileSize } from "@/utils/size-format/FormatFileSize";
import { useState } from "react";
import * as XLSX from "xlsx";

export default function DragAndDropComponent({
  setFileInfo,
  setExcelData,
  setIsFileUploaded,
  handleUploadFile,
  setIsLoading
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
      const data = event.target?.result;

      const workbook = XLSX.read(data, { type: "binary" });

      const worksheet = workbook.Sheets[workbook.SheetNames[0]];

      const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
      });

      const stringData = jsonData.map((row) =>
        row.map((cell: any) => {
          return String(cell);
        })
      );

      setExcelData(stringData);
    };

    setIsFileUploaded(true);
    reader.readAsBinaryString(file);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
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
      <div className="text-blue-400 text-lg font-medium" id="message">
        Drag and drop an Excel file here
      </div>
      <div className="mt-2 text-gray-500 text-sm" id="file-info" />
      <div className="mt-2 text-red-500 text-sm" id="error-message" />
    </div>
  );
}
