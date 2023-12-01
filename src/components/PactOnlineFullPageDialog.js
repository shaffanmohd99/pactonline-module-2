import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BsX } from "react-icons/bs";

export default function PactOnlineFullPageDialog({
  open,
  handleCloseDialog,
  title = "No title",
  time = "no time",
  width = "w-[70%]",
  children,
  progressBar,
}) {
  const fakeHandleClose = () => {
    return null;
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto z-50"
        onClose={fakeHandleClose}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-32 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div>
              <div className="fixed top-0 left-0 right-0 bg-white  border-b border-grayLine   z-99999999">
                <div className="flex items-center justify-between h-16 px-4">
                  <div className="text-h6 text-darkText">{title}</div>
                  <div className="flex gap-2 items-center">
                    <div className="text-body1 text-lightGrayText">{time}</div>
                    <BsX
                      className="pl-2 text-lightGrayText cursor-pointer"
                      size={40}
                      onClick={handleCloseDialog}
                    />
                  </div>
                </div>
                {progressBar && (
                  <div className="relative h-2 bg-grayLine/50">
                    <div
                      className={`absolute top-0 bottom-0 bg-redPrimary ${progressBar} rounded-r-full`}
                    ></div>
                  </div>
                )}
              </div>
              <div className="bg-defaultBg rounded-lg px-8 w-full h-full min-h-screen sm:px-6 flex justify-center overflow-y-auto  ">
                <div className={`bg-white h-full  min-h-screen ${width} py-2`}>
                  <div className="w-full mt-[64px]">{children}</div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
