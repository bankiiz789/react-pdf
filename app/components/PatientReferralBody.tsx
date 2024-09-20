/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable jsx-a11y/alt-text
// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import { Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({});

export const PatientReferralBody = () => {
  return (
    <View style={tw("flex gap-[20px]")}>
      <View style={tw("text-center")}>
        <Text style={tw("pt-[16px]")}>ใบส่งตัวผู้ป่วย</Text>
        <Text style={tw("text-[12px]")}>Patient referral letter</Text>
      </View>

      <View style={tw("flex flex-col gap-[30px]")}>
        <View style={tw("flex flex-col justify-end gap-[10px] text-[10px]")}>
          <View style={tw("flex flex-row justify-end gap-[10px]")}>
            <Text style={tw("w-[50px]")}>Refer No.</Text>
            <Text
              style={tw("border-b border-dashed border-[#717591] w-[100px]")}
            >
              110007
            </Text>
          </View>
          <View style={tw("flex flex-row justify-end gap-[10px]")}>
            <Text style={tw("w-[50px]")}>Date</Text>
            <Text
              style={tw("border-b border-dashed border-[#717591] w-[100px]")}
            >
              24/05/2023
            </Text>
          </View>
        </View>

        {/* Row 1 */}
        <View style={tw("flex flex-col gap-[10px] text-[10px]")}>
          <View style={tw("flex flex-row w-[100%]")}>
            <View style={tw("flex flex-row")}>
              <Text>Pet Name</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[150px]"
                )}
              >
                MooMoo
              </Text>
            </View>
            <View style={tw("flex flex-row")}>
              <Text>Species</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[150px]"
                )}
              >
                Dog
              </Text>
            </View>
            <View style={tw("flex flex-row")}>
              <Text>Breed</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[150px]"
                )}
              >
                Golden Retriever
              </Text>
            </View>
          </View>

          {/* Row 2 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <View style={tw("flex flex-row")}>
              <Text>Gender</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[140px]"
                )}
              >
                Female
              </Text>
            </View>
            <Text>Birth date</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[140px]"
              )}
            >
              24/05/2023 (1 year)
            </Text>
            <Text>Temperature</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[140px]"
              )}
            >
              36
            </Text>
          </View>

          {/* Row 3 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <View style={tw("flex flex-row")}>
              <Text>Wieght</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[140px]"
                )}
              >
                4 kg.
              </Text>
            </View>
            <View style={tw("flex flex-row")}>
              <Text>HR</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[175px]"
                )}
              ></Text>
            </View>
            <View style={tw("flex flex-row")}>
              <Text>PR</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[185px]"
                )}
              ></Text>
            </View>
          </View>

          {/* Row 4 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <View style={tw("flex flex-row")}>
              <Text>Blood pressure</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[100px]"
                )}
              ></Text>
            </View>
            <View style={tw("flex flex-row")}>
              <Text>Mucouse membrane</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[90px]"
                )}
              ></Text>
            </View>
            <View style={tw("flex flex-row")}>
              <Text>Quality</Text>
              <Text
                style={tw(
                  "text-center border-b border-dashed border-[#717591] w-[162px]"
                )}
              ></Text>
            </View>
          </View>

          {/* Row 5 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>BCS</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[153px]"
              )}
            ></Text>

            <Text>PS</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[377px]"
              )}
            ></Text>
          </View>

          {/* Row 6 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>Owner Name</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[153px]"
              )}
            >
              Memee Momo
            </Text>

            <Text>Phone Number</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[270px]"
              )}
            >
              081-1111111
            </Text>
          </View>

          {/* Row 7 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>Address</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[515px]"
              )}
            >
              750 Sukhumvit Rd Khlong Tan Subdistrict Khlong Toei, Bangkok 10110
            </Text>
          </View>

          {/* Row 8 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>Cheif Complaint</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[480px]"
              )}
            ></Text>
          </View>

          {/* Row 9 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>History</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[525px]"
              )}
            ></Text>
          </View>

          {/* Row 10 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>Physical examination</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[460px]"
              )}
            ></Text>
          </View>

          {/* Row 11 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>Laboratory test</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[480px]"
              )}
            ></Text>
          </View>

          {/* Row 12 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>Differential diagnosis</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[460px]"
              )}
            ></Text>
          </View>

          {/* Row 13 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>Procedures / Treatments</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[460px]"
              )}
            ></Text>
          </View>

          {/* Row 14 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>Plan</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[535px]"
              )}
            ></Text>
          </View>

          {/* Row 15 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>Reason for referral</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[465px]"
              )}
            ></Text>
          </View>

          {/* Row 16 */}
          <View style={tw("flex flex-row w-[100%]")}>
            <Text>Other</Text>
            <Text
              style={tw(
                "text-center border-b border-dashed border-[#717591] w-[535px]"
              )}
            ></Text>
          </View>
        </View>

        {/* Signature */}
        <View style={tw("flex flex-row justify-end gap-[10px] text-[10px]")}>
          <View style={tw("flex flex-col items-center gap-[4px]")}>
            <Text
              style={tw("border-b border-dashed border-[#717591] w-[120px]")}
            ></Text>
            <Text>(Dr. Memee Moomoo)</Text>
            <Text>081-1111111</Text>
            <Text>Veterinarian</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
