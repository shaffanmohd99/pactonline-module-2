import EmptyState from "@/components/EmptyState";
import PactOnlineCard from "@/components/PactOnlineCard";
import { useRouter } from "next/router";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";
import Table from "./components/Table";
export default function Transaction() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const people = [
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    // More people...
  ];

  return (
    <main className="flex  flex-col items-center justify-between  bg-defaultBg min-h-[calc(100vh-64px)]">
      <div className="w-full px-2 md:px-16">
        <div className="flex items-center justify-between flex-col">
          <div className="w-full flex py-6">
            <div className="text-h6 text-darkText">Transaction History</div>
         
          </div>
          {/* <div className="w-full bg-white ">
            <EmptyState />
          </div> */}
          <div className="my-[30px] w-full">
           <Table/>
          </div>
        </div>
      </div>
    </main>
  );
}
