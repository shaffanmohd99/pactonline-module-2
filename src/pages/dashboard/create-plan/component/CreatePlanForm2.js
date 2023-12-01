import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PactOnlineRadioList from "@/components/PactOnlineRadioList";
const type = [
  {
    name: "Conventional will",
  },
  {
    name: "Christian Will",
  },
];

export default function CreatePlanForm2({
  setFormData,
  setCurrentStep,
  currentStep,
  formData,
}) {
  const [isSupplementary, setIsSupplementary] = useState(
    formData.isSupplementary ? formData.isSupplementary : false
  );
  // Validation schema
  const schema = yup.object().shape({
    type: yup.string().required("Please choose type"),
    // Other fields without validation when isSupplementary is false
    ...(isSupplementary && {
      testator_name: yup.string().required("Please enter a testator name"),
      testator_relationship: yup
        .string()
        .required(
          "Please enter relationship with testator of Supplementary Will"
        ),
      testator_ic: yup
        .number("IC need to be numbers")
        .required("IC number is required")
        .typeError("IC number must be a valid number")
        .test(
          "len",
          "IC number must be exactly 12 digits",
          (val) => val && val.toString().length === 12
        ),
    }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setCurrentStep(currentStep + 1);
    const newData = {
      ...formData,
      type: data.type,
      isSupplementary: isSupplementary,
      testator_name: isSupplementary ? data.testator_name : null,
      testator_relationship: isSupplementary
        ? data.testator_relationship
        : null,
      testator_ic: isSupplementary ? data.testator_ic : null,
    };
    setFormData(newData);
  };
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSupplementaryChange = () => {
    if (!isSupplementary) {
      reset();
    }
    setIsSupplementary(!isSupplementary);
  };

  return (
    <>
      <div className=" bg-white py-4  ">
        <div className="py-8 border-b border-grayLine text-left">
          <div className="text-body1 text-grayLine  px-4">Will Plan Form</div>
          <div className=" text-darkText font-bold text-[18px] px-4 mt-[10px]">
            Type of Will
          </div>
        </div>
        <div className="px-4 mt-[30px]">
          <div className="text-sub1 text-darkText text-left ">Type</div>
          <div className="ml-4 mt-5">
            <PactOnlineRadioList
              defaultValue={formData?.type || ""} // Set defaultValue
              data={type}
              name="type"
              register={register("type")}
              formData={formData}
            />
            <p className="text-body2 text-error text-left">
              {errors.type?.message}
            </p>
          </div>
          <div className="mt-[30px]">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isSupplementary}
                onChange={handleSupplementaryChange}
                className="form-checkbox h-5 w-5 text-redPrimary checked:bg-redPrimary border-grayLine"
              />
              <span className="ml-2 text-sub1 text-darkText">
                Supplementary (optional)
              </span>
            </label>
          </div>
          {isSupplementary && (
            <div className="ml-7 mt-4 text-left">
              <div className="text-lightGrayText text-body2 ">
                Applicable for 1 person only (Principal’s spouse, parents or
                child) and the one with the lower number of clauses is deemed as
                Supplementary
              </div>
              <div>
                <div className=" border-l-[10px] border-defaultBg pl-7">
                  <div className="mt-[30px] ">
                    <label className="text-textPrimary text-body1 mb-[4px]">
                      Testator Name (Principal Will)
                    </label>
                    <input
                      defaultValue={formData?.testator_name || ""} // Set defaultValue
                      className="px-2 py-1 border border-grayLine w-full rounded  appearance-none outline-none "
                      {...register("testator_name")}
                    />
                    <p className="text-body2 text-error text-left">
                      {errors.testator_name?.message}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full mt-[30px] gap-4">
                    <div className="w-1/2">
                      <label className="text-textPrimary text-body1 mb-[4px] w-1/2">
                        Testator’ NRIC No. (Principal Will)
                      </label>
                      <input
                        defaultValue={formData?.testator_ic || ""} // Set defaultValue
                        className="px-2 py-1 border border-grayLine w-full rounded  appearance-none outline-none "
                        {...register("testator_ic")}
                      />
                      <p className="text-body2 text-error">
                        {errors.testator_ic?.message}
                      </p>
                    </div>
                    <div className="w-1/2">
                      <label className="text-textPrimary text-body1 mb-[4px] w-1/2">
                        Relationship with testator of Supplementary Will
                      </label>
                      <input
                        defaultValue={formData?.testator_relationship || ""} // Set defaultValue
                        className="px-2 py-1 border border-grayLine w-full rounded  appearance-none outline-none "
                        {...register("testator_relationship")}
                      />
                      <p className="text-body2 text-error">
                        {errors.testator_relationship?.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-[20px]">
        {currentStep !== 1 && (
          <button
            onClick={handlePrevious}
            className=" px-4 py-2 border border-grayLine bg-white hover:bg-defaultBg text-darkText rounded-md "
          >
            Previous
          </button>
        )}
        <button
          onClick={handleSubmit(onSubmit)}
          type="button"
          className="  items-center w-[200px] px-4 py-2 border  shadow-sm text-sm font-medium rounded-md text-white bg-redPrimary hover:bg-redSecondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redPrimary"
        >
          Next
        </button>
      </div>
    </>
  );
}
