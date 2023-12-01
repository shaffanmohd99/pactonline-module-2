import { PiConfettiBold } from "react-icons/pi";
export default function OnboardingDone() {
  return (
    <main className="flex  flex-col items-center justify-between  bg-defaultBg">
      <div className="w-full">
        <div className="flex items-center justify-center  ">
          <div
            className="w-1/2 bg-white flex items-center  flex-col gap-[30px] px-8"
            style={{
              height: `calc(100vh - 64px)`,
            }}
          >
            <div className=" mt-[80px] w-[140px] h-[140px] rounded-full bg-defaultBg flex justify-center items-center ">
              <PiConfettiBold size={64} className="text-redPrimary" />
            </div>
            <div className="text-h6 text-darkText mt-[30px] ">
              You’re all done
            </div>
            <div className=" text-body1 text-lightGrayText text-center px-9 ">
              Thank you for setting up your account. You can now start creating
              your Plan with us and track the progress of your request.
            </div>
          

            <div className="w-full flex flex-col gap-2">
              <button className="w-full px-4 py-2 bg-redPrimary hover:bg-redSecondary text-white rounded-md ">
                Got it
              </button>
            
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
