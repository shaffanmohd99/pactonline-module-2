import { BsCheckCircleFill, BsCalendar3 } from "react-icons/bs";
import Button from "./Button";
import Typography from "./Typography";

export default function PactOnlineProgress({
  status,
  onClick,
  receipt,
  title,
  description,
  dateTag,
}) {
  if (status === "done") {
    return (
      <>
        <div className="flex items-center   gap-8 w-full bg-white p-6 border-b border-grayLine/30 ">
          <div>
            <BsCheckCircleFill size={24} className="text-success" />
          </div>
          <div className=" flex w-full sm:items-center items-start sm:justify-between sm:flex-row flex-col">
            <div className=" text-sub1 text-darkText">{title}</div>
            <div className="flex items-center justify sm:justify-end gap-8  sm:w-1/2 md:w-1/3">
              {title === "Filling up form" && (
                <div className="text-body1 text-blue underline flex  ">
                  Receipt
                </div>
              )}
              {title === "Filling up form" && (
                <Button
                  onClick={onClick}
                  variant="outlined"
                  styles="px-2 sm:px-8"
                >
                  View form
                </Button>
              )}
              {title === "Drafting and vetting" && (
                <Button
                  onClick={onClick}
                  variant="outlined"
                  styles="px-2 sm:px-8"
                >
                  View draft
                </Button>
              )}
              {title === "Document Preparation" && (
                <Button
                  onClick={onClick}
                  variant="outlined"
                  styles="px-2 sm:px-8"
                >
                  View checklist
                </Button>
              )}
              {title === "Collection of documents" && (
                <Typography type="body1" color="text-lightGrayText">
                  Collected on 22/10/2022, 05:30 PM
                </Typography>
              )}
            </div>
          </div>
          {/* <div className="flex items-center gap-4  ">
            <div className="flex gap-8 items-center">
              <div>
                <BsCheckCircleFill size={24} className="text-success" />
              </div>
              <div className=" text-sub1 text-darkText">{title}</div>
            </div>
          </div> */}
        </div>
      </>
    );
  } else if (
    status === "in progress" ||
    status === "awaiting approval" ||
    status === "amendment in progress" ||
    status === "awaiting confirmation"
  ) {
    return (
      <>
        <div className="flex items-center gap-8 w-full bg-white p-6 border-b border-grayLine/30">
          <div className="my-1 w-[25px] h-[25px] rounded-full border border-redPrimary flex justify-center items-center text-redPrimary text-sub1">
            2
          </div>
          <div className=" flex sm:flex-row flex-col w-full gap-2 sm:gap-0 items-start sm:items-center justify-between ">
            <div className="flex flex-col max-w-[90%] gap-2">
              <div className="flex items-center gap-2">
                <div className="text-sub1 text-darkText">{title}</div>
                <div
                  className={`text-sub1 text-center py-1 px-2 rounded ${
                    status === "in progress" ||
                    status === "amendment in progress"
                      ? "text-lightGrayText  bg-defaultBg"
                      : "text-warning bg-[#FBF5E2]"
                  } `}
                >
                  {status}
                </div>
              </div>
              <div className="text-body1 text-darkText ">{description}</div>
            </div>
            {status === "awaiting approval" && (
              <Button
                variant="contained"
                onClick={onClick}
                styles="px-2 sm:px-8"
              >
                View draft
              </Button>
            )}
            {status === "amendment in progress" && (
              <Button
                variant="outlined"
                onClick={onClick}
                styles="px-2 sm:px-8"
              >
                View draft
              </Button>
            )}
            {status === "awaiting confirmation" && (
              <Button
                variant="contained"
                onClick={onClick}
                styles="px-2 sm:px-8"
              >
                View draft
              </Button>
            )}
            {dateTag && (
              <div className="text-sub1 py-2 px-4 rounded text-darkText flex items-center gap-2 bg-defaultBg">
                <BsCalendar3 size={18} className="text-darkText" />
                {dateTag}
              </div>
            )}
          </div>
       
        </div>
      </>
    );
  } else if (status === "pending") {
    return (
      <>
        <div className="flex items-center justify-between w-full bg-defaultBg p-6 border-b border-x border-grayLine/30">
          <div className="flex items-center gap-4">
            <div className="flex gap-8 items-start">
              <div>
                <div className=" w-[25px] h-[25px] rounded-full border border-grayLine flex justify-center items-center text-lightGrayText text-sub1">
                  2
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center">
                  {/* Center the text with Flexbox */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-sub1 text-darkText">
                      Document Preparation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
