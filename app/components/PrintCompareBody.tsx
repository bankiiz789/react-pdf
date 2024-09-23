/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable jsx-a11y/alt-text
// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import { Text, View } from "@react-pdf/renderer";
import { tw } from "../PDF/PDFView";

export const PrintCompareBody = () => {
  return (
    <View style={tw("flex gap-[20px] pt-[20px]")}>
      <Text style={tw("font-promptMed text-base text-[#4E5161]")}>
        Happy Pet Hospital
      </Text>

      <View
        style={tw(
          "flex flex-row justify-between text-base text-[#2E3038] font-promptReg"
        )}
      >
        <View>
          <View style={tw("flex flex-row gap-2")}>
            <Text style={tw("w-[70px]")}>Date Order</Text>
            <Text>:</Text>
            <Text>10/05/2024</Text>
          </View>

          <View style={tw("flex flex-row gap-2")}>
            <Text style={tw("w-[70px]")}>Pet id</Text>
            <Text>:</Text>
            <Text>0001</Text>
          </View>

          <View style={tw("flex flex-row gap-2")}>
            <Text style={tw("w-[70px]")}>Pet Name</Text>
            <Text>:</Text>
            <Text style={tw("font-promptSemiBold")}>Happy</Text>
          </View>
        </View>

        <View>
          <View style={tw("flex flex-row gap-2")}>
            <Text style={tw("w-[70px]")}>Species</Text>
            <Text>:</Text>
            <Text>Dog</Text>
          </View>

          <View style={tw("flex flex-row gap-2")}>
            <Text style={tw("w-[70px]")}>Breed</Text>
            <Text>:</Text>
            <Text>Bichon Frisé</Text>
          </View>

          <View style={tw("flex flex-row gap-2")}>
            <Text style={tw("w-[70px]")}>Gender</Text>
            <Text>:</Text>
            <Text>Male</Text>
          </View>
        </View>

        <View>
          <View style={tw("flex flex-row gap-2")}>
            <Text style={tw("w-[70px]")}>Doctor</Text>
            <Text>:</Text>
            <Text>XXXX</Text>
          </View>

          <View style={tw("flex flex-row gap-2")}>
            <Text style={tw("w-[70px]")}>Weight</Text>
            <Text>:</Text>
            <Text>6 kg.</Text>
          </View>

          <View style={tw("flex flex-row gap-2")}>
            <Text style={tw("w-[70px]")}>Owner</Text>
            <Text>:</Text>
            <Text>Jaehyun</Text>
          </View>
        </View>
      </View>

      <Text style={tw("border-0 border-b border-[#D9D9D9]")}></Text>

      <Text style={tw("font-promptMed text-base text-[#4E5161]")}>Compare</Text>

      <View
        style={tw(
          "flex flex-row gap-2 font-promptMed text-base text-[#4E5161]"
        )}
      >
        <Text>Lab Order No.</Text>
        <Text>:</Text>
        <Text>L0001</Text>
      </View>

      {/* Table Zone */}
      <View
        style={tw(
          "flex flex-col w-[100%] border border-[#D9D9D9] rounded-[5px] text-base"
        )}
      >
        {/* Header Table  */}
        <View
          style={tw(
            "border-b border-[#D9D9D9] w-full flex flex-row justify-around py-[10px] pl-[10px] text-[#2E3038] font-promptMed"
          )}
        >
          <Text style={tw("w-[12%]")}>Parameter</Text>
          <View style={tw("flex flex-col w-[19%] text-center")}>
            <Text>Lasted visit Date</Text>
            <Text style={tw("text-[#4E5161] font-promptReg")}>20/08/2024</Text>
          </View>
          <View style={tw("flex flex-col w-[13%] text-center")}>
            <Text>Visit1</Text>
            <Text style={tw("text-[#4E5161] font-promptReg")}>20/08/2024</Text>
          </View>
          <View style={tw("flex flex-col w-[17%] text-center")}>
            <Text>Visit1</Text>
            <Text style={tw("text-[#4E5161] font-promptReg")}>20/08/2024</Text>
          </View>
          <Text style={tw("w-[8%]")}>Low</Text>
          <Text style={tw("w-[8%]")}>High</Text>
          <Text style={tw("w-[8%]")}>Status</Text>
        </View>

        {/* Body Table  */}
        <View
          style={tw(
            "w-full flex flex-row justify-around py-[10px] pl-[10px] font-promptReg"
          )}
        >
          <Text style={tw("w-[12%]")}>HGB</Text>
          <View style={tw("flex flex-row gap-2 w-[19%]")}>
            <Text>5.65</Text>
            <Text>g/dL</Text>
          </View>
          <Text style={tw("w-[13%] text-center")}>5.65</Text>
          <Text style={tw("w-[17%] text-center text-[#D85050]")}>8.87</Text>
          <Text style={tw("w-[8%]")}>4.87</Text>
          <Text style={tw("w-[8%]")}>8.87</Text>
          <Text style={tw("w-[8%] font-promptMed")}>Normal</Text>
        </View>
      </View>
    </View>
  );
};
