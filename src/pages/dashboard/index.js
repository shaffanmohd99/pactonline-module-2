import EmptyState from "@/components/EmptyState";
import PactOnlineCard from "@/components/PactOnlineCard";
import { useRouter } from "next/router";
import { BsPlus } from "react-icons/bs";
import CreateJobDialog from "./components/CreateJobDialog";
import { useState } from "react";
export default function Dashboard() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <main className="flex  flex-col items-center justify-between  bg-defaultBg min-h-[calc(100vh-64px)]">
      <div className="w-full px-2 md:px-16">
        <div className="flex items-center justify-between flex-col">
          <div className="w-full flex justify-between py-6">
            <div className="text-h6 text-darkText">My plan</div>
            <button
              // onClick={() => router.push("/dashboard/create-plan")}
              onClick={() => setOpen(true)}
              className="inline-flex items-center px-4 py-2 border  shadow-sm text-sm font-medium rounded-md text-white bg-redPrimary hover:bg-redSecondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redPrimary"
            >
              <BsPlus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Create Plan
            </button>
          </div>
          {/* <div className="w-full bg-white ">
            <EmptyState />
          </div> */}
          <div className="my-[30px] w-full">
            <div className="text-lightGrayText text-sub1">In progress (2)</div>
            <div className="flex flex-col mt-[12px]">
              <PactOnlineCard
                inProgress
                status="Draft"
                onClick={() => router.push("/dashboard/1")}
              />
              <PactOnlineCard
                inProgress
                status="Manual preparation"
                onClick={() => router.push("/dashboard/2")}
              />
              <PactOnlineCard
                inProgress
                onClick={() => router.push("/dashboard/3")}
              />
            </div>
            <div className="text-lightGrayText text-sub1 mt-[30px]">
              Completed (3)
            </div>
            <div className="flex flex-col mt-[12px]">
              <PactOnlineCard completed />
              <PactOnlineCard completed />
              <PactOnlineCard completed />
            </div>
          </div>
        </div>
      </div>
      {/* dialog */}
      <CreateJobDialog
        open={open}
        handleCloseDialog={() => setOpen(false)}
        time="Submitted on 22/08/2022, 10:15 AM"
        title="Pacific Will Plan Form"
      />
    </main>
  );
}
