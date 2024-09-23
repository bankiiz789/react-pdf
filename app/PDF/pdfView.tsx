/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable jsx-a11y/alt-text
// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { Header } from "../components/Header";
import { RadiologyReportBody } from "../components/RadiologyReportBody";
import { LaboratoryReportBody } from "../components/LaboratoryReportBody";
import { PatientReferralBody } from "../components/PatientReferralBody";
import { PrintCompareBody } from "../components/PrintCompareBody";
import { useEffect } from "react";
import { createTw } from "react-pdf-tailwind";

const registerFonts = () => {
  Font.register({
    family: "PromptRegular",
    src: "/fonts/Prompt-Regular.ttf",
  });
  Font.register({
    family: "PromptMedium",
    src: "/fonts/Prompt-Medium.ttf",
  });
  Font.register({
    family: "PromptSemiBold",
    src: "/fonts/Prompt-SemiBold.ttf",
  });
};

export const tw = createTw({
  theme: {
    fontFamily: {
      promptReg: ["PromptRegular", "serif"],
      promptMed: ["PromptMedium", "serif"],
      promptSemiBold: ["PromptSemiBold", "serif"],
    },
  },
});

const PDF = () => {
  useEffect(() => {
    registerFonts();
  }, []);

  return (
    <Document title="My Document">
      <Page size="A4" style={styles.body}>
        <Header />
        {/* <RadiologyReportBody /> */}
        {/* <LaboratoryReportBody /> */}
        {/* <PatientReferralBody /> */}
        <PrintCompareBody />
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 20,
  },
});

const PDFView = () => {
  return (
    <PDFViewer className="w-full h-screen">
      <PDF />
    </PDFViewer>
  );
};

export default PDFView;
