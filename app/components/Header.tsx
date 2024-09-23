/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable jsx-a11y/alt-text
// eslint-disable-next-line @typescript-eslint/no-unused-vars

"use client";
import { View, Text, Image } from "@react-pdf/renderer";
import { tw } from "../PDF/PDFView";

export const Header = () => {
  return (
    <View
      style={tw(
        "flex flex-row justify-around gap-[10px] border-b border-[#2B91CC] pb-[16px]"
      )}
    >
      <Image style={tw("w-[120px] h-[40px]")} src="/logo.png" />
      <View style={tw("flex flex-col text-[10] font-promptReg")}>
        <Text style={tw("text-[10] font-promptReg")}>
          โรงพยาบาลสัคว์แฮปปี้เเพ็ท
        </Text>
        <Text style={tw("text-[10] font-promptReg")}>
          750 ชั้น 1 ถ.สุขุมวิท 30/1 แขวงคลองตัน เขตคลองเตย กรุงเทพมหานคร 10110
        </Text>
        <Text style={tw("text-[10] font-promptReg")}>
          โทรศัพท์ : 098-886-0687
        </Text>
      </View>
    </View>
  );
};
