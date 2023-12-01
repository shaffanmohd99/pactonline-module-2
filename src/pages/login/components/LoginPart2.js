import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Button from "@/components/Button";

export default function LoginPart2() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const schema = yup.object({
    password: yup.string().required("Sila masukkan kata laluan"),
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
      <div className="text-h6 mt-[60px] text-darkText">Welcome back</div>
      <div className="text-body1 text-lightGrayText">
        Enter your password to login
      </div>
      <div className="px-4 py-2 bg-defaultBg rounded flex justify-between items-center mt-[30px]">
        <div className="flex flex-col gap-2">
          <div className="text-sub1 text-[18px] text-darkText">
            Taylor Swift
          </div>
          <div className="text-body1 text-lightGrayText">990909011234</div>
        </div>
        <div className="text-sub1 text-blue hover:text-blueHover cursor-pointer underline">
          Change
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <p className="text-sub2 text-error">{errors.password?.message}</p>
        </div>

        <div className="text-blue hover:text-blueHover cursor-pointer text-sub1 mt-2 flex justify-end">
          Forgot password?
        </div>
        <Button type="submit" variant="contained" styles=" w-full mt-[14px]">
          Login
        </Button>
      </form>
    </div>
  );
}
