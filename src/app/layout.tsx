import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/authcontext";
import { ToastContainer } from "react-toastify";
import { VersionProvider } from "@/context/versionContext";

export const metadata: Metadata = {
  title: {
    template: "%s | SMCT Group - Printing",
    default: "SMCT Group - Printing",
  },
  description:
    "This system is intended for importing data from Printing and generating a uniform design related to SMCT Group of Companies.",
  openGraph: {
    title: "SMCT Group - Printing",
    description:
      "This system is intended for importing data from Printing and generating a uniform design related to SMCT Group of Companies.",
    url: "https://netsuite-print.smctgroup.ph/",
    siteName: "SMCT Group - Printing",
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
      <body className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] scroll-smooth">
        <AuthProvider>
          <VersionProvider>{children}</VersionProvider>
        </AuthProvider>
        <ToastContainer />
        <script>
          console.log("%c 𝒮𝑀𝒞𝒯", "font-family:monospace; font-weight: 900;
          font-size: 120px;color: red; text-shadow: 3px 3px 0 rgb(217,324, 422)
          , 6px 6px 0 rgb(333,91,14) , 9px 9px 0 rgb(122,221,8) , 12px 12px 0
          rgb(5,45,68) , 15px 15px 0 rgb(2,22,206) , 18px 18px 0 rgb(4,77,155) ,
          21px 21px 0 rgb(42,21,155)"), console.log("%c 𝓞𝓻𝓪𝓬𝓵𝓮 𝓝𝓮𝓽𝓼𝓾𝓲𝓽𝓮",
          "font-family:monospace; font-weight: 900; font-size: 120px;color: red;
          text-shadow: 3px 3px 0 rgb(217,324, 422) , 6px 6px 0 rgb(333,91,14) ,
          9px 9px 0 rgb(122,221,8) , 12px 12px 0 rgb(5,45,68) , 15px 15px 0
          rgb(2,22,206) , 18px 18px 0 rgb(4,77,155) , 21px 21px 0
          rgb(42,21,155)"), console.log("%c 𝓟𝓻𝓲𝓷𝓽𝓲𝓷𝓰", "font-family:monospace;
          font-weight: 900; font-size: 120px;color: red; text-shadow: 3px 3px 0
          rgb(217,324, 422) , 6px 6px 0 rgb(333,91,14) , 9px 9px 0
          rgb(122,221,8) , 12px 12px 0 rgb(5,45,68) , 15px 15px 0 rgb(2,22,206)
          , 18px 18px 0 rgb(4,77,155) , 21px 21px 0 rgb(42,21,155)")
        </script>
      </body>
    </html>
  );
}
