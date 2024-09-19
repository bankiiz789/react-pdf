/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable jsx-a11y/alt-text
// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import { Text, View } from "@react-pdf/renderer";

export const RadiologyReportBody = () => {
  return (
    <View style={{ display: "flex", gap: "20px" }}>
      <View>
        <Text style={{ textAlign: "center", paddingTop: "16px" }}>
          ใบรายงานผลเอ็กซเรย์
        </Text>
        <Text style={{ textAlign: "center", fontSize: "12px" }}>
          Radiology Report
        </Text>
      </View>

      <View style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "10px",
            paddingRight: "16px",
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
              borderBottom: "1px dashed #717591",
              // width: "100px",
            }}
          >
            Hello from the another side
          </Text>
        </View>

        <View style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                borderBottom: "1px dashed #717591",
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
                borderBottom: "1px dashed #717591",
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
                borderBottom: "1px dashed #717591",
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
                borderBottom: "1px dashed #717591",
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
                borderBottom: "1px dashed #717591",
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
                borderBottom: "1px dashed #717591",
                width: "120px",
              }}
            >
              28/11/1998 (1 year)
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
                borderBottom: "1px dashed #717591",
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
                borderBottom: "1px dashed #717591",
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
                  borderBottom: "1px dashed #717591",
                  width: "360px",
                }}
              >
                750 Pattaya Bangkok
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: "10px" }}>Report Date</Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  borderBottom: "1px dashed #717591",
                  width: "100px",
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
                  borderBottom: "1px dashed #717591",
                  width: "100px",
                }}
              >
                Dr. John Doe
              </Text>
            </View>
          </View>
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
            border: "1px solid #717591",
            borderRight: "none",
            height: "250px",
            width: "100px",
            flexGrow: 1,
          }}
        >
          <Text
            style={{
              fontSize: "10px",
              borderBottom: "1px solid #717591",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            History
          </Text>
        </View>
        {/* Right Table */}
        <View
          style={{
            border: "1px solid #717591",
            height: "250px",
            width: "100px",
            flexGrow: 1,
          }}
        >
          <Text
            style={{
              fontSize: "10px",
              borderBottom: "1px solid #717591",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            Clinician Diagnosis
          </Text>
        </View>
      </View>
    </View>
  );
};
