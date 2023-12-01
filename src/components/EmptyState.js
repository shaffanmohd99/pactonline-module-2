import { BsFileEarmarkText, BsPlus } from "react-icons/bs";

export default function EmptyState() {
  return (
    <div className="w-full flex items-center justify-center flex-col py-8">
      <div className="flex items-center justify-center flex-col">
        <div className=" mt-[80px] w-[90px] h-[90px] rounded-full bg-defaultBg flex justify-center items-center ">
          <BsFileEarmarkText size={48} className="text-grayLine" />
        </div>
        <div className=" text-[18px] font-bold text-lightGrayText mt-[20px]">
          No purchased plan yet
        </div>
        <div className="text-body1  text-lightGrayText">
          Start creating your first Plan by clicking on the button below
        </div>
        <button
          type="button"
          className="mt-[30px] inline-flex items-center px-4 py-2 border  shadow-sm text-sm font-medium rounded-md text-white bg-redPrimary hover:bg-redSecondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redPrimary"
        >
          <BsPlus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Create Plan
        </button>
      </div>
    </div>
  );
}
