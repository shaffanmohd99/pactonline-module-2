import {
  BsPlus,
  BsFileEarmarkText,
  BsDot,
  BsChevronRight,
} from "react-icons/bs";
export default function PactOnlineCard({
  inProgress,
  completed,
  border = "border-b",
  onClick,
  status = "Draft",
  time = "Last updated on 22/10/2022, 10:30 AM",
}) {
  if (inProgress) {
    return (
      <>
        <div
          onClick={onClick}
          className={`flex items-center cursor-pointer justify-between w-full bg-white p-4 ${border} border-grayLine/30`}
        >
          <div className="flex items-center gap-4  w-full">
            <div>
              <div className="flex justify-center items-center w-[45px] h-[45px] md:w-[65px] md:h-[65px] rounded-full bg-defaultBg">
                <BsFileEarmarkText size={24} className="text-redPrimary" />
              </div>
            </div>
            <div className="flex gap-2 flex-col w-full">
              <div className=" text-sub1 text-darkText">Pacific WillPlan</div>
              <div className="flex items-center gap-0.5">
                <div
                  className={`text-body2 md:text-body1 ${
                    status === "Vetting in progress"
                      ? "text-lightGrayText"
                      : "text-warning"
                  }
                  `}
                >
                  {status}
                </div>
                <BsDot size={24} />
                <div className="text-lightGrayText text-body2 md:text-body1">
                  {time}
                </div>
              </div>
              {/* mobile version */}
              <div className="flex md:hidden items-center justify-between gap-2 w-full ">
                <div className=" w-1/2 sm:w-4/5 border border-grayLine/30 rounded-lg">
                  <div className=" w-1/5 bg-redPrimary    py-1"></div>
                </div>
                <div className="flex items-center cursor-pointer">
                  <div className=" text-sub2 sm:text-sub1 text-blue hover:text-blueHover  ">
                    1/5 Completed
                  </div>
                </div>
              </div>
              {/* mobile version */}
            </div>
          </div>
          {/* web version */}
          <div className="hidden md:flex items-center justify-end gap-2 w-1/2 ">
            <div className="w-1/2 border border-grayLine/30 rounded-lg">
              <div className=" w-1/5 bg-redPrimary    py-1"></div>
            </div>
            <div className="flex items-center cursor-pointer">
              <div className="text-sub1 text-blue hover:text-blueHover  ">
                1/5 Completed
              </div>
              <BsChevronRight
                className="text-blue hover:text-blueHover "
                size={24}
              />
            </div>
          </div>
        </div>
      </>
    );
  } else if (completed) {
    return (
      <>
        <div className="flex items-center  justify-between w-full bg-white p-4 border-b border-grayLine/30 ">
          <div className="flex items-center gap-4  ">
            <div className="flex gap-2 flex-col">
              <div className=" text-sub1 text-darkText">Pacific WillPlan</div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2  sm:w-1/2 md:w-1/3">
            <div className="text-body1 text-lightGrayText sm:flex hidden">
              Last updated on 22/10/2022, 10:30 AM
            </div>
            <div className="text-sub1 text-blue hover:text-blueHover underline cursor-pointer">
              View
            </div>
          </div>
        </div>
      </>
    );
  }
}
