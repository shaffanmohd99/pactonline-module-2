import Typography from "@/components/Typography";
import { useRouter } from "next/router";
import { BsDownload, BsChevronRight } from "react-icons/bs";
import Checklist from "./component/Checklist";
import Button from "@/components/Button";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import ChecklistMobile from "./component/CheclistMobile";
import { useState } from "react";
import DraftDialog from "./component/DraftDialog";
import ApproveDialog from "./component/ApproveDialog";

export default function DraftWill({ status }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [openAmend, setOpenAmend] = useState(false);
  const [openApprove, setOpenApprove] = useState(false);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <main className="flex  flex-col  items-center justify-between  bg-defaultBg   h-[calc(100vh-64px)]">
      <div className="w-full h-full y ">
        <div className="w-full flex sm:flex-row flex-col h-full  ">
          <div className="sm:w-2/3 w-full ">
            <div className="flex w-full justify-between items-center px-2 md:px-16  ">
              <div className="w-full flex gap-2 h-16  items-center text-body1">
                <div
                  onClick={() => router.push("/dashboard")}
                  className=" text-blue hover:text-blueHover cursor-pointer underline"
                >
                  My plan
                </div>
                <div className="text-lightGrayText text-[18px]">{">"}</div>
                <div
                  onClick={() => router.back()}
                  className="text-blue hover:text-blueHover cursor-pointer underline"
                >
                  Pacific Willplan
                </div>
                <div className="text-lightGrayText text-[18px]">{">"}</div>
                <div className="text-lightGrayText"> Draft</div>
              </div>
              <a
                href="/assets/fake_data/test.pdf"
                download="test.pdf"
                className="cursor-pointer"
              >
                <BsDownload size={24} className="text-darkText" />
              </a>
            </div>
            <div className="flex flex-col w-full items-center h-[calc(100vh-224px)] ">
              {/* <embed
                src="/assets/fake_data/test.pdf"
                title="test"
                style={{ height: "100%", width: "80%" }}
              /> */}
              <div className=" h-[84%] sm:h-[92%] w-full sm:px-[30px] px-[10px]">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl="/assets/fake_data/test.pdf"
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </Worker>
              </div>
              <div className="w-full sm:px-[30px] px-[10px] h-[8%] flex items-center bg-warningLight border-t sm:border-b-0 border-b  border-grayLine ">
                <Typography type="body1" color="text-warning">
                  Copywriting here to inform that client will be charged for
                  amendment
                </Typography>
              </div>
              <div
                onClick={() => setOpen(true)}
                className="w-full sm:px-[30px] px-[10px] h-[8%] sm:hidden flex justify-between items-center bg-white border-grayLine "
              >
                <Typography
                  type="body1"
                  color="text-blueHover"
                  style="underline"
                >
                  View amendment (2) and checklist
                </Typography>
                <BsChevronRight size={18} className="text-blueHover" />
              </div>
            </div>
            <div className="h-24 border-t sm:border-r border-grayLine bg-white fixed sm:w-2/3 w-full bottom-0 sm:p-4 px-2">
              <div className="w-full flex sm:flex-row flex-col justify-between sm:items-center h-full py-2 sm:py-0">
                <div className="flex sm:flex-col flex-row justify-between sm:items-start items-center">
                  <Typography type="sub_bold">Draft name here</Typography>
                  <Typography type="body1" color="text-warning">
                    Awaiting approval
                  </Typography>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <div onClick={() => setOpenAmend(true)} className="w-1/3">
                    <Button
                      variant="outlined_red"
                      styles="w-full sm:py-4 py-[10px] sm:px-4"
                    >
                      Amend
                    </Button>
                  </div>
                  <div
                    onClick={() => setOpenApprove(true)}
                    className="w-2/3 sm:w-auto"
                  >
                    <Button
                      styles=" sm:py-4 py-[10px] w-full sm:px-16"
                      variant="contained"
                    >
                      Approve
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-white h-full overflow-y-hidden pb-12 sm:block hidden ">
            <Checklist
            // status={status}
            />
          </div>
        </div>
      </div>
      <ChecklistMobile open={open} setOpen={setOpen} />
      <DraftDialog open={openAmend} setOpen={setOpenAmend} />
      <ApproveDialog open={openApprove} setOpen={setOpenApprove} />
    </main>
  );
}
