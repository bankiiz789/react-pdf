/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable jsx-a11y/alt-text
// eslint-disable-next-line @typescript-eslint/no-unused-vars

"use client";
import { Text, StyleSheet, Image } from "@react-pdf/renderer";

export const Header = () => {
  return (
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
          750 ชั้น 1 ถ.สุขุมวิท 30/1 แขวงคลองตัน เขตคลองเตย กรุงเทพมหานคร 10110
        </Text>
        <Text>โทรศัพท์ : 098-886-0687</Text>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "120px",
    height: "40px",
  },
});
