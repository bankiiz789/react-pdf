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

Font.register({
  family: "Prompt",
  src: "/fonts/Prompt-Regular.ttf",
});

const PDF = () => {
  return (
    <Document title="My Document">
      <Page size="A4" style={styles.body}>
        <Header />
        {/* <RadiologyReportBody /> */}
        {/* <LaboratoryReportBody /> */}
        <PatientReferralBody />
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 20,
    fontFamily: "Prompt",
    fontSize: 16,
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
