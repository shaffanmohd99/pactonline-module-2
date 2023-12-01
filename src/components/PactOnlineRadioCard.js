import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PactOnlineRadioCard({
  data,
  setDataSelected,
  formData,
}) {
  const [selected, setSelected] = useState();
  useEffect(() => {
    // setDataSelected(selected?.name);
    if (selected !== "") {
      setDataSelected(selected?.name);
    }
  }, [selected]);

  useEffect(() => {
    if (formData?.plan) {
      const index = data.findIndex((item) => item.name === formData?.plan);
      setSelected(data[index]);
    }
  }, []);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
      <div className="bg-white  flex flex-col gap-4 rounded-md -space-y-px">
        {data.map((item) => (
          <RadioGroup.Option
            key={item.name}
            value={item}
            className={({ checked }) =>
              classNames(
                checked ? "border-blueHover z-10" : "border-grayLine",
                "relative border p-4 flex cursor-pointer rounded-lg focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <span
                      className={classNames(
                        checked ? "bg-blueHover " : "bg-white border-grayLine",
                        active ? "ring-2 ring-offset-2 ring-blueHover" : "",
                        "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                      )}
                      aria-hidden="true"
                    >
                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                    </span>
                    <div className="ml-3 flex flex-col">
                      <RadioGroup.Label
                        as="span"
                        className={classNames(
                          // checked ? "text-indigo-900" : "text-gray-900",
                          "block text-sub1 text-darkText text-left"
                        )}
                      >
                        {item.name}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="span"
                        className={classNames(
                          // checked ? "text-indigo-700" : "text-gray-500",
                          "block text-body1 text-lightGrayText"
                        )}
                      >
                        {item.description}
                      </RadioGroup.Description>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-defaultBg text-sub1 text-blue">
                    {item.price}
                  </div>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
