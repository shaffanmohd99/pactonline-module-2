import PactOnlineRadioCard from "@/components/PactOnlineRadioCard";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const plan = [
  {
    name: "WillPlan",
    price: "RM 99,999.99",
    description:
      "Short description about this plan here, lorem ipsum dolor sit amet",
  },
  {
    name: "WasiatPlan",
    price: "RM 99,999.99",
    description:
      "Short description about this plan here, lorem ipsum dolor sit amet",
  },
  {
    name: "Estate Administration",
    price: "RM 99,999.99",
    description:
      "Short description about this plan here, lorem ipsum dolor sit amet",
  },
  {
    name: "Pacific Insurance Trust (PINT) / Pacific Islamic Insurance Trust (iPINT)",
    price: "RM 99,999.99",
    description:
      "Short description about this plan here, lorem ipsum dolor sit amet",
  },
  {
    name: "Pacific Investment Trust",
    price: "RM 99,999.99",
    description:
      "Short description about this plan here, lorem ipsum dolor sit amet",
  },
];

export default function CreatePlanForm1({
  setFormData,
  setCurrentStep,
  currentStep,
  formData,
}) {
  // const schema = yup.object().shape({
  //   plan: yup.string().required("Please choose a plan"),
  // });
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  // const onSubmit = (data) => {
  //   console.log("rawrrrrrrrrrrrrrrrrrrrr");
  //   if (Object.keys(errors).length > 0) {
  //     console.log("meow");
  //   } else {
  //     console.log("🚀 ~ file: index.js:20 ~ Login ~ data:", data);
  //     setFormData(...data);
  //     setCurrentStep(currentStep + 1);
  //   }
  // };
  const [planSelected, setPlanSelected] = useState("");
  const [isError, setIsError] = useState(false);
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
  useEffect(() => {
    if (planSelected) {
      setIsError(false);
    }
  }, []);

  const handleNext = () => {
    if (planSelected) {
      // const data = { plan: planSelected };
      const newData = { ...formData, plan: planSelected };
      setIsError(false);
      setFormData(newData);
      setCurrentStep(currentStep + 1);
    } else {
      setIsError(true);
    }
  };
  return (
    <>
      <div className=" bg-white py-4 px-2 md:px-16">
        <div className=" text-darkText  text-left font-bold text-[18px]">
          Select a plan
        </div>
        <div className="mt-[30px]  ">
          <PactOnlineRadioCard
            data={plan}
            setDataSelected={setPlanSelected}
            formData={formData}
          />
          {isError && (
            <p className="text-body2 text-error text-left">Please choose a plan</p>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-[20px]">
        {/* {currentStep > 1 && (
          <button
            onClick={handlePrevious}
            className=" px-4 py-2 border border-grayLine bg-white hover:bg-defaultBg text-darkText rounded-md "
          >
            Previous
          </button>
        )} */}
        <button
          onClick={handleNext}
          type="button"
          className="  items-center w-[200px] px-4 py-2 border  shadow-sm text-sm font-medium rounded-md text-white bg-redPrimary hover:bg-redSecondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redPrimary"
        >
          Next
        </button>
      </div>
    </>
  );
}
