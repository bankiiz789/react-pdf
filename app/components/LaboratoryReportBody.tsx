/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable jsx-a11y/alt-text
// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import { Text, View } from "@react-pdf/renderer";

export const LaboratoryReportBody = () => {
  return (
    <View style={{ display: "flex", gap: "20px" }}>
      <View>
        <Text style={{ textAlign: "center", paddingTop: "16px" }}>
          ใบรายงานผลตรวจห้องปฏิบัติการ
        </Text>
        <Text style={{ textAlign: "center", fontSize: "12px" }}>
          Laboratory result Report
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

      {/* Table Zone */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          border: "1px solid #D9D9D9",
          borderRadius: "5px",
        }}
      >
        {/* Header Table  */}
        <View
          style={{
            borderBottom: "1px solid #D9D9D9",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            Test
          </Text>

          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            Result
          </Text>

          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            Unit
          </Text>

          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            Low
          </Text>

          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            High
          </Text>

          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            Status
          </Text>
        </View>

        {/* Body Table  */}
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            RBC
          </Text>
          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            8.87
          </Text>
          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            g/dL
          </Text>
          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            5.65
          </Text>
          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            8.87
          </Text>
          <Text
            style={{
              fontSize: "10px",
              textAlign: "center",
              paddingVertical: "10px",
            }}
          >
            High
          </Text>
        </View>
      </View>
    </View>
  );
};
