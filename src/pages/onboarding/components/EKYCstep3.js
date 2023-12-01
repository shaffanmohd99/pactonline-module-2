import { LuScanFace } from "react-icons/lu";
import { BsPersonVcard } from "react-icons/bs";
import Button from "@/components/Button";
import Typography from "@/components/Typography";

export default function EKYCstep3() {
  return (
    <>
      <div className="w-full bg-redPrimary py-1"></div>

      <div className="px-8">
        <Typography style="mt-[60px]" color="text-lightGrayText" type="sub1">
          Step 3 of 3
        </Typography>
        <Typography type="h6">Customer Due Diligences</Typography>
        <Typography color="text-lightGrayText" type="body1">
          You’re almost there. You will be directed to the page of our digital
          onboarding service provider, Ares to proceed with our customer due
          diligence process. We will only use the information collected here for
          us to comply with the relevant legislations on Anti-Money Laundering
          and Counter Financing of Terrorism.
        </Typography>
      </div>
      <div className="flex flex-col mt-[30px] gap-[30px] px-8 ">
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-[65px] h-[65px] rounded-full bg-defaultBg">
            <LuScanFace size={24} className="text-redPrimary" />
          </div>
          <div className="flex gap-2 flex-col">
            <Typography type="sub1">Snap selfie</Typography>
            <Typography color="text-lightGrayText" type="body1">
              Snap a selfie of your face
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-[65px] h-[65px] rounded-full bg-defaultBg">
            <BsPersonVcard size={24} className="text-redPrimary" />
          </div>
          <div className="flex gap-2 flex-col">
            <Typography type="sub1">Verify photo ID</Typography>
            <Typography color="text-lightGrayText" type="body1">
              Take pictures of your ID (NRIC, Passport or Driving Licence)
            </Typography>
          </div>
        </div>
      </div>
      <div className="px-8 mt-[150px]">
        <Button variant="contained">Continue</Button>
      </div>
    </>
  );
}
