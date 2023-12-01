import { useEffect, useState } from "react";
import EKYCstep3 from "./EKYCstep3";
import FeePayment2 from "./FeePayment2";
import PersonalDetailsForm1 from "./PersonalDetailsForm1";
import OnboardingLandingPage from "./OnboardingLandingPage";

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="flex items-center justify-center flex-col ">
      <div
        className="w-1/2 bg-white   flex-col gap-[30px] "
        style={{
          height: `calc(100vh - 64px)`,
        }}
      >
        {currentStep === 1 && (
          <OnboardingLandingPage
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 2 && (
          <PersonalDetailsForm1
            formData={formData}
            currentStep={currentStep}
            setFormData={setFormData}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 3 && (
          <FeePayment2
            formData={formData}
            currentStep={currentStep}
            setFormData={setFormData}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 4 && (
          <EKYCstep3
            formData={formData}
            currentStep={currentStep}
            setFormData={setFormData}
            setCurrentStep={setCurrentStep}
          />
        )}
      </div>
    </div>
  );
}
