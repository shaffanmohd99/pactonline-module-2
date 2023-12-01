import EmptyState from "@/components/EmptyState";
import Typography from "@/components/Typography";
import { useState } from "react";
import { RiFileForbidLine } from "react-icons/ri";
import TransactionDrawer from "./TransactionDrawer";

/* This example requires Tailwind CSS v2.0+ */
const data = [
  {
    time: "22/09/1983, 11:32AM",
    transaction: "Plan Creation",
    status: "Successful",
    amount: "RM 992,321",
  },
  {
    time: "15/03/2005, 03:45PM",
    transaction: "Payment Received",
    status: "Pending",
    amount: "RM 50,000",
  },
  {
    time: "10/07/2021, 09:15AM",
    transaction: "Account Upgrade",
    status: "Successful",
    amount: "RM 1,200",
  },
  {
    time: "05/12/2018, 02:00PM",
    transaction: "Withdrawal",
    status: "Successful",
    amount: "RM 3,500",
  },
  {
    time: "18/06/2016, 08:30AM",
    transaction: "Deposit",
    status: "Successful",
    amount: "RM 8,000",
  },
  {
    time: "02/04/2019, 04:20PM",
    transaction: "Purchase",
    status: "Pending",
    amount: "RM 600",
  },
  // New entry with status "Failed"
  {
    time: "25/08/2022, 12:45PM",
    transaction: "Failed Transaction",
    status: "Failed",
    amount: "RM 0",
  },
];
export default function Table() {
  const [open, setOpen] = useState(false);
  const [drawerData, setDrawerData] = useState("");
  const handleOpen = (data) => {
    setOpen(true);
    setDrawerData(data);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden   md:rounded-lg">
              <table className="min-w-full divide-y divide-grayBg">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left  text-body2 sm:text-body1 text-lightGrayText sm:pl-6"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left  text-body2 sm:text-body1 text-lightGrayText"
                    >
                      Transaction
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left  text-body2 sm:text-body1 text-lightGrayText"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left  text-body2 sm:text-body1 text-lightGrayText"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-grayBg bg-white">
                  {/* if empty */}
                  {/* <tr className=" bg-white ">
                    <td colSpan={5}>
                      <div className="flex justify-center py-20">
                        <div className="flex flex-col gap-2 items-center">
                          <div className="flex items-center justify-center w-[90px]  h-[90px] rounded-full bg-defaultBg">
                            <RiFileForbidLine
                              className="text-grayLine"
                              size={36}
                            />
                          </div>
                          <Typography
                            type="sub_bold"
                            color=" text-lightGrayText"
                          >
                            No transaction yet
                          </Typography>
                          <Typography type="body1" color=" text-lightGrayText">
                            Any transaction made will appear here
                          </Typography>
                        </div>
                      </div>
                    </td>
                  </tr> */}
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-body2 sm:text-body1  sm:pl-6">
                        {item.time}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-body2 sm:text-body1">
                        {item.transaction}
                      </td>
                      <td
                        className={`whitespace-nowrap px-3 py-4 text-body2 sm:text-body1 ${
                          item.status === "Failed" ? "text-error" : ""
                        } `}
                      >
                        {item.status}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-body2 sm:text-body1">
                        {item.amount}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-body2 sm:text-body1 sm:pr-6">
                        <p
                          onClick={() => handleOpen(item)}
                          className="text-blue hover:text-blueHover underline cursor-pointer"
                        >
                          View<span className="sr-only">, {item.time}</span>
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <TransactionDrawer open={open} setOpen={setOpen} data={drawerData} />
    </div>
  );
}
