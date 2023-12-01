/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsCheck, BsChevronExpand } from "react-icons/bs";

const people = [
  { id: 1, name: "Argentina" },
  { id: 2, name: "Belarus" },
  { id: 3, name: "Cambodia" },
  { id: 4, name: "Denmark" },
  { id: 5, name: "England" },
  { id: 6, name: "Finland" },
  { id: 7, name: "Ghana" },
  { id: 8, name: "Hungary" },
  { id: 9, name: "Iceland" },
  { id: 10, name: "Jamaica" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectInput({
  label = "Assigned to",
  value,
  onChange,
}) {
  const [selected, setSelected] = useState();
  const handleValueChange = (newValue) => {
    setSelected(newValue); // Update the selected value using setSelected
    onChange(newValue.name); // Call the provided onChange function
  };
  return (
    <Listbox value={selected} onChange={handleValueChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sub1 text-darkText">
            {label}
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border text-body1 border-grayLine rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-grayLine focus:border-grayLine ">
              <span className="block truncate">
                {selected?.name ? selected?.name : "Choose a country"}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <BsChevronExpand
                  className="h-5 w-5 text-grayLine"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-body1 overflow-auto focus:outline-none ">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-white bg-redSecondary"
                          : " text-darkText",
                        "cursor-default select-none relative py-2 pl-3 pr-9 "
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-darkText",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <BsCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
