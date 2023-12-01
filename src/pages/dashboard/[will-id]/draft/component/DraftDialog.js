/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Typography from "@/components/Typography";
import { BsX } from "react-icons/bs";
import Button from "@/components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function DraftDialog({ open, setOpen }) {
  const schema = yup.object().shape({
    feedback: yup.string().required("Feedback is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ file: CreatePlanForm4.js:23 ~ onSubmit ~ data:", data);
    reset({ feedback: "" });
  };
  const fakeHandleClose = () => {
    return null;
  };
  const handleClose = () => {
    setOpen(false); // Close the dialog
    reset({ feedback: "" });
  };

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
                  <div className="w-full flex justify-between items-center py-4 px-8  ">
                    <Typography type="sub_bold">Amend Draft</Typography>
                    <BsX
                      onClick={handleClose}
                      className="text-darkText hover:text-redPrimary"
                      size={24}
                    />
                  </div>
                </div>
                <div className="px-8 w-full">
                  <Typography type="body1" style="py-5">
                    Description here: write your feedback, then will be reviewed
                    by our advisor. You will be notified once the draft is ready
                    again for approval
                  </Typography>
                  <div className="w-full">
                    <Typography type="sub1" style="font-bold">
                      Feedback
                    </Typography>
                    <textarea
                      {...register("feedback")}
                      placeholder="E.g The date of making Will/Wasiat is not stated"
                      className="px-2 mt-4 py-1 h-[180px] resize-none  border border-grayLine w-full rounded  appearance-none outline-none "
                    />
                    <p className=" text-body2 text-error">
                      {errors.feedback?.message}
                    </p>

                    <Typography type="sub1" style="font-bold mt-[25px]">
                      Summary
                    </Typography>
                    <div className="w-full mt-4 mb-[50px]">
                      <div className="w-full items-center justify-between flex pb-2 border-b border-grayLine ">
                        <Typography type="body1" color="text-lightGrayText">
                          First amendment
                        </Typography>
                        <Typography type="body1" color="text-success">
                          FREE
                        </Typography>
                      </div>
                      <div className="flex w-full justify-end">
                        <div className="flex gap-[40px] pt-2">
                          <Typography type="sub1" style="font-bold">
                            Total
                          </Typography>
                          <Typography type="sub1" style="font-bold">
                            RM0.00
                          </Typography>
                        </div>
                      </div>
                    </div>
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
                          onClick={handleSubmit(onSubmit)}
                          variant="contained"
                        >
                          Submit
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
