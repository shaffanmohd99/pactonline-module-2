import Typography from "@/components/Typography";
import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Checklist({ status = "resolved" }) {
  const [tab, setTab] = useState("amendment");
  const checklist = [
    "Date of making Will/Wasiat is stated",
    "Make sure Testator’s particulars are correct",
    "Make sure Beneficiary(s)’ particulars are correct",
    "Make sure Guardian(s)’ particulars are correct",
    "Make sure two Witnesses’ particulars are correct. They cannot be Beneficiary or Beneficiary’s spouse of the Will",
    "Make sure the asset details are correct (Eg: Real property, land, bank account, investment, etc)",
  ];

  const amendment = [
    {
      status: "resolved",
      description: "yabedabeduuuu",
      date: "20/10/2022, 10:30 AM",
    },
    {
      status: "Amendment in progress",
      date: "22/11/2011, 11:30 AM",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      status: "resolved",
      date: "21/12/2012, 09:30 PM",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      status: "resolved",
      description: "yabedabeduuuu",
      date: "20/10/2022, 10:30 AM",
    },
    {
      status: "Amendment in progress",
      date: "22/11/2011, 11:30 AM",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      status: "resolved",
      date: "21/12/2012, 09:30 PM",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const tabTitle = ["amendment", "checklist"];
  return (
    <div className="w-full h-full">
      <div className=" w-full  h-full  pt-4 text-[20px]">
        <div className="flex h-12  border-b border-grayLine pl-4 gap-4">
          {tabTitle.map((item, index) => (
            <div
              key={index}
              onClick={() => setTab(item)}
              className="cursor-pointer h-full"
            >
              <Typography
                type="sub_bold"
                style={`text-[20px] capitalize  transition-colors  duration-300  ease-in-out h-full ${
                  item === tab
                    ? "text-redPrimary  border-b-4 border-redPrimary"
                    : " text-grayLine"
                }  `}
              >
                {item}
              </Typography>
            </div>
          ))}
        </div>
        <div className="h-full overflow-y-auto">
          {tab === "checklist" && (
            <div className="py-4 px-8">
              {/* <Typography type="h6">Checklist</Typography> */}
              <Typography
                type="body1"
                color="text-lightGrayText"
                style="my-[20px]"
              >
                This checklist to be checked to ensure the Will is executed
                correctly:
              </Typography>
              <ul className="list-disc pl-8 flex flex-col gap-4 font-bold">
                {checklist.map((item, index) => (
                  <li key={index}>
                    <Typography type="sub1">{item}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {tab === "amendment" && (
            <>
              {amendment.map((item, index) => (
                <div key={index} className="py-4 border-b border-grayLine">
                  <div className="flex flex-col gap-4 px-8">
                    <Typography type="body1" color="text-lightGrayText">
                      {item.date}
                    </Typography>
                    <Typography type="body1">{item.description}</Typography>
                    <div>
                      <div
                        className={`text-sub1  text-center inline-block py-1 px-2 rounded capitalize ${
                          item.status === "resolved"
                            ? "text-lightGrayText  bg-defaultBg"
                            : "text-warning bg-[#FBF5E2]"
                        } `}
                      >
                        <div className="flex gap-2 items-center">
                          {item.status === "resolved" && (
                            <BsCheckCircleFill className="text-success" />
                          )}
                          {item.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
// }
