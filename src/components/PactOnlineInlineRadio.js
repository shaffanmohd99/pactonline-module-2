export default function PactOnlineInlineRadio({
  data,
  name,
  register,
  defaultValue,
}) {
  return (
    <div>
      <fieldset>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {data?.map((item, index) => (
            <div key={index} className="flex items-center">
              <input
                {...register}
                id={index}
                name={name}
                type="radio"
                value={item.title}
                defaultChecked={defaultValue === item.title} // Set defaultChecked based on comparison
                className="focus:ring-blue h-4 w-4 text-blue border-grayLine"
              />
              <label
                htmlFor={item.title}
                className="ml-3 block text-body1  text-darkText"
              >
                {item.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
