import { useEffect, useState } from "react";

export default function PhoneNumberInput({
  title = "Phone number",
  register,
  error,
  onChange,
}) {
  const [option, setOption] = useState("+60");
  const [number, setNumber] = useState();
  useEffect(() => {
    onChange(`${option}${number}`);
  }, [option, number]);
  return (
    <div>
      <label className="block text-sub1 text-darkText">{title}</label>
      <div className="mt-1  rounded-md shadow-sm flex ">
        <div className=" inset-y-0 left-0 flex items-center">
          <select
            id="country"
            name="country"
            value={option}
            autoComplete="country"
            onChange={(e) => setOption(e.target.value)}
            className="focus:ring-grayLine focus:border-grayLine h-full py-0 pl-3 pr-7 border border-grayLine bg-transparent text-darkText text-body1 rounded-l-md"
          >
            <option
              value="+65"
              className="hover:bg-redPrimary hover:text-white"
            >
              SG +65
            </option>
            <option
              value="+60"
              className="hover:bg-redPrimary hover:text-white"
            >
              MY +60
            </option>
          </select>
        </div>
        <input
          type="text"
          onChange={(e) => setNumber(e.target.value)}
          name="phone-number"
          value={number} // Set the value of the input element to the number state
          className="focus:ring-grayLine focus:border-grayLine py-2 outline-none block w-full pl-4 border text-darkText border-grayLine rounded-r-md"
          placeholder="+1 (555) 987-6543"
        />
      </div>
    </div>
  );
}
