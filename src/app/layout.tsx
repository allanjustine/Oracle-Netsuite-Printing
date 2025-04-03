import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/authcontext";
import { ToastContainer } from "react-toastify";
import { VersionProvider } from "@/context/versionContext";

export const metadata: Metadata = {
  title: {
    template: "%s | SMCT Group - Oracle NetSuite",
    default: "SMCT Group - Oracle NetSuite",
  },
  description:
    "This system is intended for importing data from Oracle NetSuite and generating a uniform design related to SMCT Group of Companies.",
  openGraph: {
    title: "SMCT Group - Oracle NetSuite",
    description:
      "This system is intended for importing data from Oracle NetSuite and generating a uniform design related to SMCT Group of Companies.",
    url: "https://netsuite-print.smctgroup.ph/",
    siteName: "SMCT Group - Oracle NetSuite",
    images: [
      {
        url: "https://netsuite-print.smctgroup.ph/smct_group.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <VersionProvider>{children}</VersionProvider>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
