/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Typography from "@/components/Typography";
import { BsX } from "react-icons/bs";
import Button from "@/components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function ApproveDialog({ open, setOpen }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const schema = yup
    .object()
    .shape({
      date: yup.boolean().oneOf([true], "Need to tick all"),
      testator: yup.boolean().oneOf([true], "Need to tick all"),
      beneficiary: yup.boolean().oneOf([true], "Need to tick all"),
      guardian: yup.boolean().oneOf([true], "Need to tick all"),
      witness: yup.boolean().oneOf([true], "Need to tick all"),
      asset: yup.boolean().oneOf([true], "Need to tick all"),
    })
    .test({
      name: "all-checked",
      message: "All checkboxes must be checked",
      test: (values) => {
        const isChecked = Object.values(values).every(
          (value) => value === true
        );
        return (
          isChecked ||
          new yup.ValidationError(
            "All checkboxes must be checked",
            values,
            "all-checked"
          )
        );
      },
    });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      date: false,
      testator: false,
      beneficiary: false,
      guardian: false,
      witness: false,
      asset: false,
    },
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ file: CreatePlanForm4.js:23 ~ onSubmit ~ data:", data);
    reset({
      date: false,
      testator: false,
      beneficiary: false,
      guardian: false,
      witness: false,
      asset: false,
    });
  };
  //   useEffect(() => {
  //     console.log("moewewe")
  //     if (errors.testator?.message) {
  //       setButtonDisabled(false);
  //       console.log(errors.testator?.message);
  //     }
  //   }, [errors.testator?.message]);
  const fakeHandleClose = () => {
    return null;
  };
  const handleClose = () => {
    setOpen(false); // Close the dialog
    reset({
      date: false,
      testator: false,
      beneficiary: false,
      guardian: false,
      witness: false,
      asset: false,
    });
  };
  const checkboxValue = [
    {
      register: "date",
      description: "Date of making Will/Wasiat is stated",
      error: errors.date?.message,
    },
    {
      register: "testator",
      description: "Testatorʼs particulars are correct",
      error: errors.testator?.message,
    },
    {
      register: "beneficiary",
      description: "Beneficiary(s)’ particulars are correct",
      error: errors.beneficiary?.message,
    },
    {
      register: "guardian",
      description: "Guardian(s)’ particulars are correct",
      error: errors.guardian?.message,
    },
    {
      register: "witness",
      description:
        "Two Witnesses’ particulars are correct. They are not Beneficiary or Beneficiary’s spouse of the Will",
      error: errors.witness?.message,
    },
    {
      register: "asset",
      description:
        "Asset details are correct (Eg: Real property, land, bank account, investment, etc)",
      error: errors.asset?.message,
    },
  ];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={fakeHandleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-darkText bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg  text-left overflow-hidden shadow-xl sm:align-middle transform transition-all w-full sm:w-[50%]">
              <div className="w-full ">
                <div className="border-grayLine border-b">
                  <div className="w-full flex justify-between items-center py-4 px-8   ">
                    <Typography type="sub_bold">Approve draft</Typography>
                    <BsX
                      onClick={handleClose}
                      className="text-darkText hover:text-redPrimary"
                      size={24}
                    />
                  </div>
                </div>
                <div className="px-8 w-full">
                  <div className="flex gap-1 sm:flex-row flex-col">
                    <Typography type="body1" style="sm:py-5 py-0">
                      I hereby declare that the checklist below are true and
                      correct.
                    </Typography>
                    <Typography
                      type="body1"
                      style="pb-5 "
                      color="text-lightGrayText"
                    >
                      (Tick to approve)
                    </Typography>
                  </div>
                  <div className="w-full flex flex-col gap-6">
                    {checkboxValue.map((item, index) => (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-center"
                      >
                        <div className="flex items-center">
                          <input
                            {...register(item.register)}
                            //   id={index}
                            name={item.register}
                            type="checkbox"
                            //   checked
                            className="focus:ring-success h-4 w-4 text-success border-redPrimary"
                          />
                          <Typography style="ml-3 block font-bold" type="sub1">
                            {item.description}
                          </Typography>
                        </div>
                        {/* <p className="text-body2 text-error">{item.error}</p> */}
                      </div>
                    ))}
                    <p className="text-body2 text-error">
                      {errors["all-checked"]?.message}
                    </p>

                    <div className="flex w-full justify-end pb-[30px]">
                      <div className="flex gap-2">
                        <Button
                          onClick={handleClose}
                          variant="outlined"
                          styles="w-[200px]"
                        >
                          Cancel
                        </Button>
                        <Button
                          disabled={
                            !(
                              watch("date") &&
                              watch("testator") &&
                              watch("beneficiary") &&
                              watch("guardian") &&
                              watch("witness") &&
                              watch("asset")
                            )
                          }
                          onClick={handleSubmit(onSubmit)}
                          variant="contained"
                        >
                          Approve draft
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
