export const FormatFileSize = (sizeInBytes: number) => {
  if (sizeInBytes < 1024) {
    return sizeInBytes.toFixed(2) + " B";
  } else if (sizeInBytes < 1024 * 1024) {
    return (sizeInBytes / 1024).toFixed(2) + " KB";
  } else if (sizeInBytes < 1024 * 1024 * 1024) {
    return (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB";
  } else if (sizeInBytes < 1024 * 1024 * 1024 * 1024) {
    return (sizeInBytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  } else {
    return (sizeInBytes / (1024 * 1024 * 1024 * 1024)).toFixed(2) + " TB";
  }
};
