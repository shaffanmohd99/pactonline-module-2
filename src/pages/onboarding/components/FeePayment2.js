import Button from "@/components/Button";
import Typography from "@/components/Typography";

export default function FeePayment2({
  setFormData,
  setCurrentStep,
  currentStep,
  formData,
}) {
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <>
      <div className="w-2/3 bg-redPrimary py-1"></div>

      <div className="px-8">
        <Typography style="mt-[60px]" color="text-lightGrayText" type="sub1">
          Step 2 of 3
        </Typography>
        <Typography type="h6"> One-off Activation Fee Payment</Typography>
        <Typography color="text-lightGrayText" type="body1">
          You’re now required to pay a one-off activation fee before we proceed
          further.
        </Typography>
      </div>
      <div className="flex flex-col mt-[30px] gap-[15px] px-8 ">
        <div className=" text-sub1 text-darkText ">Summary</div>
        <div className="grid grid-cols-3 ">
          <div className="col-span-2 border-b border-grayLine py-2">
            Activation Fee
          </div>
          <div className="col-span-1 border-b border-grayLine text-right  py-2">
            RM 10.00
          </div>
          <div className="col-span-2 text-right  py-2">TOTAL</div>
          <div className="col-span-1 text-right  py-2">RM 10.00</div>
        </div>
      </div>
      <div className="px-8 flex gap-2 mt-[150px]">
        <Button onClick={handlePrevious} variant="outlined" styles="w-1/4">
          Previous
        </Button>
        <Button variant="contained" onClick={handleNext} styles="w-3/4">
          Pay now (RM 10.00)
        </Button>
      </div>
    </>
  );
}
