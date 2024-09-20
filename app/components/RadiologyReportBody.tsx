/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable jsx-a11y/alt-text
// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import { Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({});

export const RadiologyReportBody = () => {
  return (
    <View style={tw("flex gap-[20px]")}>
      <View style={tw("text-center")}>
        <Text style={tw("pt-[16px]")}>ใบรายงานผลเอ็กซเรย์</Text>
        <Text style={tw("text-[12px]")}>Radiology Report</Text>
      </View>

      <View style={tw("flex flex-col gap-[60px] text-[10px]")}>
        <View style={tw("flex flex-row justify-end gap-[10px]")}>
          <Text>Refer To :</Text>
          <Text style={tw("border-b border-dashed border-[#717591]")}>
            Hello from the another side
          </Text>
        </View>

        <View style={tw("flex flex-col justify-end gap-[10px]")}>
          <View style={tw("flex flex-row justify-between w-[100%]")}>
            <Text>Red No.</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[120px]"
              )}
            >
              1000758
            </Text>
            <Text>Pet Name</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[120px]"
              )}
            >
              Bobby
            </Text>
            <Text>Species</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[120px]"
              )}
            >
              Dog
            </Text>
          </View>
          <View style={tw("flex flex-row justify-between w-[100%]")}>
            <Text>Breed</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[120px]"
              )}
            >
              Golden Retriever
            </Text>
            <Text>Gender</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[120px]"
              )}
            >
              Male
            </Text>
            <Text>Birth Date</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[120px]"
              )}
            >
              28/11/1998 (1 year)
            </Text>
          </View>
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>Owner Name</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[120px]"
              )}
            >
              Mr. Green Smith
            </Text>
            <Text>Phone Number</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[120px]"
              )}
            >
              0967876765
            </Text>
          </View>
          <View style={tw("flex flex-row w-[100%]")}>
            <View style={tw("flex flex-row")}>
              <Text>Address</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[360px]"
                )}
              >
                750 Pattaya Bangkok
              </Text>
            </View>
            <View style={tw("flex flex-row")}>
              <Text>Report Date</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[100px]"
                )}
              >
                09/09/2024
              </Text>
            </View>
          </View>
          <View style={tw("flex flex-row w-[100%]")}>
            <View style={tw("flex flex-row")}>
              <Text>Clinician</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[100px]"
                )}
              >
                Dr. John Doe
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Table Zone */}
      <View style={tw("flex flex-row justify-center w-[100%] text-[10px]")}>
        {/* Left Table  */}
        <View
          style={tw(
            "border border-[#717591] border-r-0 h-[250px] w-[100px] flex grow"
          )}
        >
          <Text style={tw("text-center border-b border-[#717591] py-[10px]")}>
            History
          </Text>
        </View>
        {/* Right Table */}
        <View
          style={tw("border border-[#717591] h-[250px] w-[100px] flex grow")}
        >
          <Text style={tw("text-center border-b border-[#717591] py-[10px]")}>
            Clinician Diagnosis
          </Text>
        </View>
      </View>
    </View>
  );
};
