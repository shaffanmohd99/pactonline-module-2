import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Button from "@/components/Button";

export default function NewUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const schema = yup.object().shape({
    password: yup.string().required("Please enter a password"),
    confirm_password: yup
      .string()
      .required("Please repeat the password")
      .test("match", "Passwords do not match", function (value) {
        return value === this.resolve(yup.ref("password"));
      }),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter an email address"),
    name: yup.string().required("Please enter a name"),
  });
  const toggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

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
        Let’s get you started
      </div>
      <div className="text-body1 text-lightGrayText">Fill in your details</div>
      <div className="px-4 py-2 bg-defaultBg rounded flex justify-between items-center mt-[30px]">
        <div className="flex flex-col gap-2">
          <div className="text-sub1 text-[18px] text-darkText">
            990909011234
          </div>
          <div className="text-body1 text-lightGrayText">No account found</div>
        </div>
        <div className="text-sub1 text-blue hover:text-blueHover cursor-pointer underline">
          Change
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[60px]">
          <label className="text-textPrimary text-sub1 mb-[4px]">
            Full name
          </label>
          <input
            className="px-2 py-1 border border-grayLine w-full rounded  appearance-none outline-none "
            {...register("name")}
          />
          <p className="text-body2 text-error">{errors.name?.message}</p>
        </div>
        <div className="mt-[30px]">
          <label className="text-textPrimary text-sub1 mb-[4px]">Email</label>
          <input
            className="px-2 py-1 border border-grayLine w-full rounded  appearance-none outline-none "
            {...register("email")}
          />
          <p className="text-body2 text-error">{errors.email?.message}</p>
        </div>

        <div className="mt-[30px]">
          <label className="text-textPrimary text-sub1 mb-[4px]">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="px-2 py-1 border border-grayLine w-full rounded  appearance-none outline-none "
              {...register("password")}
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <p className="text-body2 text-error">{errors.password?.message}</p>
        </div>

        <div className="mt-[30px]">
          <label className="text-textPrimary text-sub1 mb-[4px]">
            Confirm password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="px-2 py-1 border border-grayLine w-full rounded  appearance-none outline-none "
              {...register("confirm_password")}
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <p className="text-body2 text-error">
            {errors.confirm_password?.message}
          </p>
        </div>

        <Button type="submit" variant="contained" styles=" w-full mt-[14px]">
          Create account
        </Button>
      </form>
    </div>
  );
}
