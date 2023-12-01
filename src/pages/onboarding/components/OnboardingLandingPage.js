import Button from "@/components/Button";
import Typography from "@/components/Typography";
import { BsPersonVcard, BsExclamationCircleFill } from "react-icons/bs";

export default function OnboardingLandingPage({ setCurrentStep, currentStep }) {
  return (
    <div className="flex items-center justify-center  ">
      <div
        className="w-full bg-white flex items-center  flex-col gap-[30px] px-8"
        style={{
          height: `calc(100vh - 64px)`,
        }}
      >
        <div className=" mt-[80px] w-[140px] h-[140px] rounded-full bg-defaultBg flex justify-center items-center ">
          <BsPersonVcard size={64} className="text-redPrimary" />
        </div>
        <div className="text-h6 text-darkText mt-[30px] ">
          Now let’s get you set up
        </div>
        <Typography
          type="body1"
          color="text-lightGrayText"
          styles="text-center px-9"
        >
          This should only take a few minutes. We just need to confirm your
          details with our verification partner (Artemis). This step is required
          to help protect your account. This information is never shared with
          everyone else.
        </Typography>

        <div className="py-5 px-5 flex justify-center items-center gap-4 rounded bg-defaultBg w-full">
          <BsExclamationCircleFill size={24} className="text-blueHover" />
          <Typography type="body1" color="text-lightGrayText">
            A processing fee will be charged during this verification process
          </Typography>
        </div>
        <Button
          onClick={() => setCurrentStep(currentStep + 1)}
          styles="mt-[150px] w-full"
          type="contained"
        >
          Get started
        </Button>
      </div>
    </div>
  );
}
