import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";

export default function LoginPart1({ setSuccessPart1 }) {
  const schema = yup.object({
    IC: yup
      .number("IC need to be numbers")
      .required("IC number is required")
      .typeError("IC number must be a valid number")
      .test(
        "len",
        "IC number must be exactly 12 digits",
        (val) => val && val.toString().length === 12
      ),
    country: yup.string().required("Country is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ file: index.js:20 ~ Login ~ data:", data);
  };
  return (
    <div>
      <div className="text-h6 mt-[60px] text-darkText">
        Let’s find your account
      </div>
      <div className="text-body1 text-lightGrayText">Enter your NRIC</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[60px]">
          <label className="text-textPrimary text-sub1 mb-[4px]">
            ID (NRIC / Passport)
          </label>
          <input
            className="px-2 py-1 border border-grayLine w-full rounded  appearance-none outline-none "
            {...register("IC")}
          />
          <p className="text-sub2 text-error">{errors.IC?.message}</p>
        </div>
        <div className="mt-[30px]">
          <label
            htmlFor="country"
            className="text-textPrimary text-sub1 mb-[4px]"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            className="px-2 py-1 border border-grayLine w-full rounded appearance-none outline-none"
            {...register("country")}
          >
            <option value="" disabled selected>
              Select a country
            </option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
          </select>
          <p className="text-sub2 text-error">{errors.country?.message}</p>
        </div>
        <div className="text-lightGrayText text-caption mt-[30px]">
          By continuing, you agree to our Terms and Conditions
        </div>
        <Button type="submit" variant="contained" styles=" w-full mt-[14px]">
          Continue
        </Button>
      </form>
    </div>
  );
}
