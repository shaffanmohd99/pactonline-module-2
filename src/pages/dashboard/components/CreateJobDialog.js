import { useEffect, useState } from "react";
import CreatePlanForm1 from "../create-plan/component/CreatePlanForm1";
import CreatePlanForm2 from "../create-plan/component/CreatePlanForm2";
import CreatePlanForm3 from "../create-plan/component/CreatePlanForm3";
import CreatePlanForm4 from "../create-plan/component/CreatePlanForm4";
import PaymentSummary from "@/components/PaymentSummary";
import PactOnlineFullPageDialog from "@/components/PactOnlineFullPageDialog";

export default function CreateJobDialog({
  open,
  handleCloseDialog,
  title = "No title",
  time = "no time",
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isFormSuccess, setFormIsFormSuccess] = useState(false);

  // const handleNext = () => {
  //   if (isFormSuccess) {
  //     setCurrentStep(currentStep + 1);
  //   }
  // };

  // const handlePrevious = () => {
  //   setCurrentStep(currentStep - 1);
  // };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  let progress;

  switch (currentStep) {
    case 1:
      progress = "w-0";
      break;
    case 2:
      progress = "w-1/4";
      break;
    case 3:
      progress = "w-2/4";
      break;
    case 4:
      progress = "w-3/4";
      break;
    case 5:
      progress = "w-full";
      break;
  }
  const closeDialog = () => {
    handleCloseDialog();
    setCurrentStep(1);
    setFormData({});
  };
  return (
    <>
      <PactOnlineFullPageDialog
        open={open}
        handleCloseDialog={closeDialog}
        title={title}
        time={time}
        width="w-full"
        progressBar={progress}
      >
        {/* <div className="w-full fixed top-[64px] z-10">
          <div className="relative h-2 bg-grayLine/50">
            <div className="absolute top-0 bottom-0 bg-redPrimary w-1/5 rounded-r-full"></div>
          </div>
        </div> */}
        <main className="mt-[8px] flex  flex-col items-center justify-between  bg-defaultBg min-h-[calc(100vh-64px)]">
          <div className="w-full flex gap-4 px-2 md:px-16">
            <div className="w-2/3">
              {/* <div className=" bg-white py-4  "> */}
              {currentStep === 1 && (
                <CreatePlanForm1
                  formData={formData}
                  currentStep={currentStep}
                  setFormData={setFormData}
                  setCurrentStep={setCurrentStep}
                />
              )}
              {currentStep === 2 && (
                <CreatePlanForm2
                  formData={formData}
                  currentStep={currentStep}
                  setFormData={setFormData}
                  setCurrentStep={setCurrentStep}
                />
              )}
              {currentStep === 3 && (
                <CreatePlanForm3
                  formData={formData}
                  currentStep={currentStep}
                  setFormData={setFormData}
                  setCurrentStep={setCurrentStep}
                />
              )}
              {currentStep === 4 && (
                <CreatePlanForm4
                  formData={formData}
                  currentStep={currentStep}
                  setFormData={setFormData}
                  setCurrentStep={setCurrentStep}
                />
              )}
              {/* </div> */}
              {/* <div className="flex justify-end gap-4 mt-[20px]">
              {currentStep !== 1 && (
                <button
                  onClick={handlePrevious}
                  className=" px-4 py-2 border border-grayLine bg-white hover:bg-defaultBg text-darkText rounded-md "
                >
                  Previous
                </button>
              )}
              <button
                onClick={handleNext}
                type="button"
                className="  items-center w-[200px] px-4 py-2 border  shadow-sm text-sm font-medium rounded-md text-white bg-redPrimary hover:bg-redSecondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redPrimary"
              >
                Next
              </button>
            </div> */}
            </div>
            <div className="w-1/3 bg-white p-4 h-[calc(100vh-64px)] ">
              <PaymentSummary />
            </div>
          </div>
        </main>
      </PactOnlineFullPageDialog>
    </>
  );
}
