import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import PhoneNumberInput from "./PhoneNumberInput";
import SelectInput from "./SelectInput";
import Button from "@/components/Button";
import Typography from "@/components/Typography";

export default function PersonalDetailsForm1({
  setFormData,
  setCurrentStep,
  currentStep,
  formData,
}) {
  // Validation schema
  const schema = yup.object().shape({
    nationality: yup.string().required("Please select nationality"),
    phone_number: yup
      .string()
      .matches(
        /^(?:\+\d{1,3}[-\.\s]?)?\(?\d{3}\)?[-\.\s]?\d{3}[-\.\s]?\d{4}$/,
        "Please enter a valid phone number with a country code"
      )
      .required("Phone number is required"),
    address: yup.string().required("Please enter your address"),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setCurrentStep(currentStep + 1);
    const newData = {
      ...formData,
      data,
    };
    setFormData(newData);
  };
  return (
    <>
      <div className="w-1/3 bg-redPrimary py-1"></div>

      <div className="px-8">
        <Typography style="mt-[60px]" color="text-lightGrayText" type="sub1">
          Step 1 of 3
        </Typography>
        <Typography type="h6">Personal details</Typography>
      </div>
      <div className="flex flex-col mt-[60px] gap-[30px] px-8 ">
        <div>
          <Controller
            name="nationality"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <SelectInput
                  label="Nationality"
                  onChange={onChange}
                  value={value}
                />
                {errors.nationality?.message && (
                  <Typography type="body2" color="text-error">
                    {errors.nationality?.message}
                  </Typography>
                )}
              </>
            )}
          />
        </div>
        <div>
          <Controller
            name="phone_number"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <PhoneNumberInput
                  title="Contact number"
                  onChange={onChange}
                  value={value}
                />
                {errors.phone_number?.message && (
                  <Typography type="body2" color="text-error">
                    {errors.phone_number?.message}
                  </Typography>
                )}
              </>
            )}
          />
        </div>

        <div>
          <label className="text-darkText text-sub1 ">Address</label>
          <textarea
            {...register("address")}
            placeholder="Address "
            className={`w-full resize-none p-2 text-textPrimary border outline-none border-grayLine rounded focus:h-[120px] focus:border-grayLine h-[120px]`}
          />
          <Typography type="body2" color="text-error">
            {errors.address?.message}
          </Typography>
        </div>
      </div>
      <div className="px-8 mt-[150px]">
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Next
        </Button>
      </div>
    </>
  );
}
