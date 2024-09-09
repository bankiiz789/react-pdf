/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable jsx-a11y/alt-text
// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import {
  Document,
  Page,
  PDFViewer,
  Text,
  StyleSheet,
  Font,
  Image,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Prompt",
  src: "/fonts/Prompt-Regular.ttf",
});

const PDF = () => {
  return (
    <Document title="My Document">
      <Page size="A4" style={styles.body}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            gap: "10px",
            borderBottom: "1px solid #2B91CC",
            paddingBottom: "16px",
          }}
        >
          <Image style={styles.image} src="/logo.png" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "10px",
            }}
          >
            <Text>โรงพยาบาลสัคว์แฮปปี้เเพ็ท</Text>
            <Text>
              750 ชั้น 1 ถ.สุขุมวิท 30/1 แขวงคลองตัน เขตคลองเตย กรุงเทพมหานคร
              10110
            </Text>
            <Text>โทรศัพท์ : 098-886-0687</Text>
          </div>
        </div>
        <Text style={{ textAlign: "center", paddingTop: "16px" }}>
          ใบรายงานผลเอ็กซเรย์
        </Text>
        <Text style={{ textAlign: "center", fontSize: "12px" }}>
          Radiology Report
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "10px",
            paddingRight: "16px",
            paddingTop: "16px",
          }}
        >
          <Text
            style={{
              fontSize: "10px",
            }}
          >
            Refer To :
          </Text>
          <Text
            style={{
              fontSize: "10px",
              borderBottom: "1px dashed black",
              // width: "100px",
            }}
          >
            Hello from the another side
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: "10px" }}>Red No.</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: "10px",
              borderBottom: "1px dashed black",
              width: "120px",
            }}
          >
            1000758
          </Text>
          <Text style={{ fontSize: "10px" }}>Pet Name</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: "10px",
              borderBottom: "1px dashed black",
              width: "120px",
            }}
          >
            Bobby
          </Text>
          <Text style={{ fontSize: "10px" }}>Species</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: "10px",
              borderBottom: "1px dashed black",
              width: "120px",
            }}
          >
            Dog
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: "10px" }}>Breed</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: "10px",
              borderBottom: "1px dashed black",
              width: "120px",
            }}
          >
            Golden Retriever
          </Text>
          <Text style={{ fontSize: "10px" }}>Gender</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: "10px",
              borderBottom: "1px dashed black",
              width: "120px",
            }}
          >
            Male
          </Text>
          <Text style={{ fontSize: "10px" }}>Birth Date</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: "10px",
              borderBottom: "1px dashed black",
              width: "120px",
            }}
          >
            28/11/1998
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            // justifyContent: "",
          }}
        >
          <Text style={{ fontSize: "10px" }}>Owner Name</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: "10px",
              borderBottom: "1px dashed black",
              width: "120px",
            }}
          >
            Mr. Green Smith
          </Text>
          <Text style={{ fontSize: "10px" }}>Phone Number</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: "10px",
              borderBottom: "1px dashed black",
              width: "120px",
            }}
          >
            0967876765
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontSize: "10px" }}>Address</Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: "10px",
                borderBottom: "1px dashed black",
                width: "280px",
              }}
            >
              750 Pattaya Bangkok
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontSize: "10px" }}>Report Date</Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: "10px",
                borderBottom: "1px dashed black",
                width: "300px",
              }}
            >
              09/09/2024
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontSize: "10px" }}>Clinician</Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: "10px",
                borderBottom: "1px dashed black",
                width: "300px",
              }}
            >
              Dr. John Doe
            </Text>
          </View>
        </View>
        {/* Table Zone */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* Left Table  */}
          <View
            style={{
              border: "1px solid black",
              borderRight: "none",
              height: "100px",
              width: "100px",
              flexGrow: 1,
            }}
          >
            <Text
              style={{
                fontSize: "10px",
                borderBottom: "1px solid black",
                textAlign: "center",
              }}
            >
              History
            </Text>
          </View>
          {/* Right Table */}
          <View
            style={{
              border: "1px solid black",
              height: "100px",
              width: "100px",
              flexGrow: 1,
            }}
          >
            <Text
              style={{
                fontSize: "10px",
                borderBottom: "1px solid black",
                textAlign: "center",
              }}
            >
              Clinician Diagnosis
            </Text>
          </View>
        </View>
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
  image: {
    width: "120px",
    height: "40px",
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
