export default function PactOnlineRadioList({
  data,
  name,
  register,
  defaultValue,
}) {

  return (
    <fieldset>
      <legend className="sr-only">Plan</legend>
      <div className="space-y-5">
        {data.map((item, index) => (
          <div key={index} className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                {...register}
                id={index}
                name={name}
                value={item.name}
                defaultChecked={defaultValue === item.name}
                type="radio"
                // defaultChecked={item.id === "small"}
                className="focus:ring-redPrimary checked:bg-redPrimary h-4 w-4  border border-grayLine"
              />
            </div>
            <div className="ml-3 text-sm ">
              <label htmlFor={item.name} className="text-body1 text-darkText">
                {item.name}
              </label>
              {/* <span id={`${plan.id}-description`} className="text-gray-500">
                {plan.description}
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
