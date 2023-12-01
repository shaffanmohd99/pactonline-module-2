/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsX } from "react-icons/bs";
import Typography from "@/components/Typography";
import Button from "@/components/Button";

export default function TransactionDrawer({ open, setOpen, data }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-darkText bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen sm:max-w-xl max-w-full ">
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className=" border-b border-grayLine">
                    <div className="flex px-4 sm:px-8 items-center justify-between py-4">
                      <Typography type="sub_bold">
                        Transaction details
                      </Typography>
                      <BsX
                        onClick={() => setOpen(false)}
                        className="h-6 w-6 hover:text-error"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="relative  flex-1 ">
                    {/* Replace with your content */}
                    <div className="absolute inset-0 ">
                      <div className="h-[120px] w-full bg-defaultBg flex justify-center items-center">
                        <div className="font-bold sm:text-[30px] text-[24px] sm:leading-[45px] leading-[36px]">
                          {data.amount}
                        </div>
                      </div>
                      <table className="w-full bg-white  text-body1 border-b border-grayBg">
                        <thead>
                          <tr>
                            <td className=" px-8 py-3 w-[140px]">
                              <Typography
                                type="body1"
                                color="text-lightGrayText"
                              >
                                Status
                              </Typography>
                            </td>
                            <td className="  pl-[100px] text-left">
                              <Typography type="body1">
                                {data.status}
                              </Typography>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className=" px-8 py-3 w-[140px]">
                              <Typography
                                type="body1"
                                color="text-lightGrayText"
                              >
                                Time
                              </Typography>
                            </td>
                            <td className="  pl-[100px] text-left">
                              <Typography type="body1">{data.time}</Typography>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table className="w-full bg-white  text-body1 border-b border-grayBg">
                        <thead>
                          <tr>
                            <td className=" px-8 py-3 w-[140px]">
                              <Typography
                                type="body1"
                                color="text-lightGrayText"
                              >
                                Transaction
                              </Typography>
                            </td>
                            <td className="  pl-[100px] text-left">
                              <Typography type="body1">
                                {data.transaction}
                              </Typography>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className=" px-8 py-3 w-[140px] ">
                              <Typography
                                type="body1"
                                color="text-lightGrayText"
                              >
                                Plan
                              </Typography>
                            </td>
                            <td className="  pl-[100px] text-left">
                              <Typography type="body1">
                                WillPlan (replace later)
                              </Typography>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className=" py-3  pl-[270px] text-left"
                              colSpan={2}
                            >
                              <Typography
                                type="body1"
                                color="text-blue hover:text-blueHover"
                                style=" underline cursor-pointer"
                              >
                                View
                              </Typography>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="w-full bg-white  text-body1 border-b border-grayBg">
                        <thead>
                          <tr>
                            <td className=" px-8 py-3 w-[140px]">
                              <Typography
                                type="body1"
                                color="text-lightGrayText"
                              >
                                Payment method
                              </Typography>
                            </td>
                            <td className="  pl-[100px] text-left">
                              <Typography type="body1">yahe123123</Typography>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className=" px-8 py-3 w-[140px] ">
                              <Typography
                                type="body1"
                                color="text-lightGrayText"
                              >
                                Transaction ID
                              </Typography>
                            </td>
                            <td className="  pl-[100px] text-left">
                              <Typography type="body1">
                                meowmewowemweo
                              </Typography>
                            </td>
                          </tr>
                          <tr>
                            <td className=" px-8 py-3 w-[140px] ">
                              <Typography
                                type="body1"
                                color="text-lightGrayText"
                              >
                                Reference ID
                              </Typography>
                            </td>
                            <td className="  pl-[100px] text-left">
                              <Typography type="body1">
                                Woeroeroeroeroero
                              </Typography>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /End replace */}
                  </div>
                  <div className="px-[30px]">
                    <Button variant="outlined">Download receipt</Button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
