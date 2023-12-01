import PactOnlineInlineRadio from "@/components/PactOnlineInlineRadio";
import * as yup from "yup";
import { parse, isValid } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

const gender = [{ title: "Male" }, { title: "Female" }];

const maritial_status = [
  { title: "Single" },
  { title: "Married" },
  { title: "Divorced" },
  { title: "Widowed" },
];
const race = [
  { title: "Malay" },
  { title: "Indian" },
  { title: "Chinese" },
  { title: "Others" },
];
const religion = [
  { title: "Islam" },
  { title: "Christian" },
  { title: "Hindu" },
  { title: "Buddhist" },
  { title: "Others" },
];

export default function CreatePlanForm3({
  setFormData,
  setCurrentStep,
  currentStep,
  formData,
}) {
  const schema = yup.object().shape({
    full_name: yup.string().required("Please enter a name"),
    id_type: yup.string().required("Please enter ID type"),
    id_number: yup
      .string()
      .required("IC number is required")
      .matches(/^\d{12}$/, "IC number must be exactly 12 digits"),
    date_of_birth: yup
      .string()
      .test(
        "is-valid-date",
        "Please enter a valid date in the format dd/mm/yyyy",
        (value) => {
          if (!value) return true; // Allow empty values (optional field)
          const parsedDate = parse(value, "dd/MM/yyyy", new Date());
          return isValid(parsedDate);
        }
      )
      .required("Please enter a date of birth"),
    email: yup
      .string()
      .required("Please enter an email")
      .email("Please enter a valid email address"),
    address: yup.string().required("Please enter an address"),
    contact_number: yup.string().required("Please enter a contact number"),
    gender: yup.string().required("Please enter a gender"),
    maritial_status: yup.string().required("Please enter maritial status"),
    religion: yup.string().required("Please enter a religion"),
    race: yup.string().required("Please enter a race"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setCurrentStep(currentStep + 1);
    const newData = {
      ...formData,
      full_name: data.full_name,
      id_type: data.id_type,
      id_number: data.id_number,
      date_of_birth: data.date_of_birth,
      email: data.email,
      address: data.address,
      contact_number: data.contact_number,
      gender: data.gender,
      maritial_status: data.maritial_status,
      religion: data.religion,
      race: data.race,
    };
    setFormData(newData);
  };

  //   const handleNext = () => {
  //     if (isFormSuccess) {
  //       setCurrentStep(currentStep + 1);
  //     }
  //   };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className=" bg-white py-4 text-left">
        <div className="py-8 border-b border-grayLine text-left">
          <div className="text-body1 text-grayLine  px-4">Will Plan Form</div>
          <div className=" text-darkText font-bold text-[18px] px-4 mt-[10px]">
            Type of Will
          </div>
        </div>
        <div className="px-4 mt-[30px]">
          <div className="text-body1 text-darkText text-left ">
            Testator shall complete all personal particulars, as per NRIC/
            Passport, on the conditions Testator has attained age of majority
            (18 years old for Peninsular Malaysia and Sarawak; 21 years old for
            Sabah) and of sound mind.
          </div>
          <div className="ml-4 mt-5 flex flex-col gap-6">
            <div className="flex items-center">
              <label className="text-textPrimary text-sub1 w-[120px] mb-[4px]">
                Full Name
              </label>
              <div className="w-full flex flex-col justify-center">
                <input
                  defaultValue={formData?.full_name || ""} // Set defaultValue
                  className="px-2 py-1  border border-grayLine w-full rounded  appearance-none outline-none "
                  {...register("full_name")}
                />
                <p className="text-body2 text-error">
                  {errors.full_name?.message}
                </p>
              </div>
            </div>
            <div className="flex w-full gap-4 ">
              <div className="flex  items-center w-1/2">
                <label className="text-textPrimary text-sub1 w-[120px] mb-[4px]">
                  ID type
                </label>
                <div className="w-full flex flex-col justify-center ml-3">
                  <input
                    defaultValue={formData?.id_type || ""} // Set defaultValue
                    className="px-2 py-1  border border-grayLine w-full rounded  appearance-none outline-none "
                    {...register("id_type")}
                  />
                  <p className="text-body2 text-error">
                    {errors.id_type?.message}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center w-1/2 ">
                <label className="text-textPrimary text-sub1 w-[120px] mb-[4px]">
                  ID number
                </label>
                <div className="w-full flex flex-col justify-center">
                  <input
                    defaultValue={formData?.id_number || ""} // Set defaultValue
                    className="px-2 py-1  border border-grayLine w-full rounded  appearance-none outline-none "
                    {...register("id_number")}
                  />
                  <p className="text-body2 text-error">
                    {errors.id_number?.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <label className="text-textPrimary text-sub1 w-[120px] mb-[4px]">
                Date of birth
              </label>
              <div className="w-full flex flex-col justify-center">
                <input
                  defaultValue={formData?.date_of_birth || ""} // Set defaultValue
                  className="px-2 py-1  border border-grayLine w-full rounded  appearance-none outline-none "
                  {...register("date_of_birth")}
                />
                <p className="text-body2 text-error">
                  {errors.date_of_birth?.message}
                </p>
              </div>
            </div>
            <div className="flex w-full gap-4 ">
              <div className="flex  items-center w-1/2">
                <label className="text-textPrimary text-sub1 w-[120px] mb-[4px]">
                  Contact number
                </label>
                <div className="w-full flex flex-col justify-center ml-3">
                  <input
                    defaultValue={formData?.contact_number || ""} // Set defaultValue
                    className="px-2 py-1  border border-grayLine w-full rounded  appearance-none outline-none "
                    {...register("contact_number")}
                  />
                  <p className="text-body2 text-error">
                    {errors.contact_number?.message}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center w-1/2 ">
                <label className="text-textPrimary text-sub1 w-[120px] mb-[4px]">
                  Email address
                </label>
                <div className="w-full flex flex-col justify-center">
                  <input
                    defaultValue={formData?.email || ""} // Set defaultValue
                    className="px-2 py-1  border border-grayLine w-full rounded  appearance-none outline-none "
                    {...register("email")}
                  />
                  <p className="text-body2 text-error">
                    {errors.email?.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <label className="text-textPrimary text-sub1 w-[120px] mb-[4px]">
                Address
              </label>
              <div className="w-full flex flex-col justify-center">
                <textarea
                  defaultValue={formData?.address || ""} // Set defaultValue
                  className="px-2 py-1 h-[80px] resize-none  border border-grayLine w-full rounded  appearance-none outline-none "
                  {...register("address")}
                />
                <p className="text-body2 text-error">
                  {errors.address?.message}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-textPrimary text-sub1 w-[120px] ">
                Gender
              </div>
              <div className="w-full flex flex-col justify-center">
                <PactOnlineInlineRadio
                  data={gender}
                  name="gender"
                  register={register("gender")}
                  defaultValue={formData?.gender || ""} // Set defaultValue
                />
                <p className="text-body2 text-error">
                  {errors.gender?.message}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-textPrimary text-sub1 w-[120px] ">
                Marital status
              </div>
              <div className="w-full flex flex-col justify-center">
                <PactOnlineInlineRadio
                  data={maritial_status}
                  name="maritial_status"
                  register={register("maritial_status")}
                  defaultValue={formData?.maritial_status || ""} // Set defaultValue
                />
                <p className="text-body2 text-error">
                  {errors.maritial_status?.message}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-textPrimary text-sub1 w-[120px] ">
                Religion
              </div>
              <div className="w-full flex flex-col justify-center">
                <PactOnlineInlineRadio
                  data={religion}
                  name="religion"
                  register={register("religion")}
                  defaultValue={formData?.religion || ""} // Set defaultValue
                />
                <p className="text-body2 text-error">
                  {errors.religion?.message}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-textPrimary text-sub1 w-[120px] ">Race</div>
              <div className="w-full flex flex-col justify-center">
                <PactOnlineInlineRadio
                  data={race}
                  name="race"
                  register={register("race")}
                  defaultValue={formData?.race || ""} // Set defaultValue
                />
                <p className="text-body2 text-error">{errors.race?.message}</p>
              </div>
            </div>
          </div>
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
