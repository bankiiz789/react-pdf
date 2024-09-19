"use client";
import dynamic from "next/dynamic";

const InvoicePDF = dynamic(() => import("./PDFView"), {
  ssr: false,
});

const View = () => {
  return <InvoicePDF />;
};

export default View;
