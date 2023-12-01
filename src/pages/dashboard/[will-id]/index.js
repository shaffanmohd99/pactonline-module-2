import PactOnlineCard from "@/components/PactOnlineCard";
import PactOnlineFullPageDialog from "@/components/PactOnlineFullPageDialog";
import PactOnlineProgress from "@/components/PactOnlineProgress";
import { useRouter } from "next/router";
import { useState } from "react";
import ViewFormDialog from "./component/ViewFormDialog";

export default function WillId() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="flex  flex-col items-center justify-between  bg-defaultBg min-h-[calc(100vh-64px)]">
        <div className="w-full px-2 md:px-16">
          <div className="flex items-center justify-between flex-col">
            <div className="w-full flex gap-2 py-6 text-body1">
              <div
                onClick={() => router.push("/dashboard")}
                className=" text-blue hover:text-blueHover cursor-pointer underline"
              >
                My plan
              </div>
              <div className="text-lightGrayText text-[18px]">{">"}</div>
              <div className="text-lightGrayText"> Pacific Willplan</div>
            </div>
            <div className="my-[30px] w-full">
              <div>
                <PactOnlineCard
                  inProgress
                  border=""
                  status="Vetting in progress"
                />
              </div>
              <div className="text-lightGrayText text-sub1 mt-[30px]">
                Progress
              </div>
              <div>
                <PactOnlineProgress
                  status="done"
                  onClick={() => setOpen(true)}
                  receipt
                  title="Filling up form"
                />
                <PactOnlineProgress
                  title="Drafting and vetting"
                  description="Your draft is currently being prepared by PTSupport which usually takes up to 72 hours. You will receive a notification once the draft is ready for your approval"
                  status="in progress"
                />
                <PactOnlineProgress
                  description="Your draft is now ready for your approval. Please review and make sure all the details are correct before confirming."
                  title="Document Preparation"
                  status="awaiting approval"
                  onClick={() =>
                    router.push(`/dashboard/${router.query["will-id"]}/draft`)
                  }
                />
                <PactOnlineProgress
                  onClick={() =>
                    router.push(`/dashboard/${router.query["will-id"]}/draft`)
                  }
                  title="Drafting and vetting"
                  status="amendment in progress"
                  description="Your draft is now ready for your approval. Please review and make sure all the details are correct before confirming."
                />
                <PactOnlineProgress
                  onClick={() =>
                    router.push(`/dashboard/${router.query["will-id"]}/draft`)
                  }
                  title="Drafting and vetting"
                  status="awaiting confirmation"
                  description="Your Pacific Willplan has been confirmed. You’re now required to prepare all the documents listed in the checklist. Kindly mark as “Ready for collection” once the documents are ready and our team will arrange for the collection of documents."
                />
                <PactOnlineProgress
                  title="Collection of documents"
                  status="in progress"
                  dateTag="22/10/2022"
                  description="Your Pacific Willplan has been confirmed. You’re now required to prepare all the documents listed in the checklist. Kindly mark as “Ready for collection” once the documents are ready and our team will arrange for the collection of documents."
                />
                <PactOnlineProgress
                  title="Collection of documents"
                  status="done"
                  description="Your Pacific Willplan has been confirmed. You’re now required to prepare all the documents listed in the checklist. Kindly mark as “Ready for collection” once the documents are ready and our team will arrange for the collection of documents."
                />
                <PactOnlineProgress
                  title="Drafting and vetting"
                  status="pending"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* viewFormDialog */}
      <ViewFormDialog
        open={open}
        handleCloseDialog={() => setOpen(false)}
        time="Submitted on 22/08/2022, 10:15 AM"
        title="Pacific Will Plan Form"
      />
    </>
  );
}
