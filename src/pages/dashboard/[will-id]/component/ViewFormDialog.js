import PactOnlineFullPageDialog from "@/components/PactOnlineFullPageDialog";

export default function ViewFormDialog({
  open,
  handleCloseDialog,
  title = "No title",
  time = "no time",
}) {
  return (
    <PactOnlineFullPageDialog
      open={open}
      handleCloseDialog={handleCloseDialog}
      title={title}
      time={time}
    >
      <div className="px-8">
        <div className=" py-2 font-bold text-[18px] text-darkText bg-defaultBg text-left px-4">
          Type of will
        </div>
        <div className="flex flex-col gap-2 mt-[30px]">
          <div className="flex items-center gap-4">
            <div className="text-sub1 text-darkText w-[250px]  text-left">
              Type
            </div>
            <div className="text-darkText text-body1">Conventional will</div>
          </div>
          <div className="text-lightGrayText text-left text-body1 py-2 ">
            Supplimentary
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sub1 text-darkText w-[250px]  text-left">
              Testator Name (Prinicipal Will)
            </div>
            <div className="text-darkText text-body1">Ahmad Ali Bin Abu</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sub1 text-darkText w-[250px]  text-left">
              Testator’ NRIC No (Prinicipal Will)
            </div>
            <div className="text-darkText text-body1">990909011234</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sub1 text-darkText w-[250px]  text-left">
              Relationship with Testator of Supplementary will
            </div>
            <div className="text-darkText text-body1">Father</div>
          </div>
          <div className=" mt-[30px] py-2 font-bold text-[18px] text-darkText bg-defaultBg text-left px-4">
            Testator’s Personal Details
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sub1 text-darkText w-[250px]  text-left">
              Full name
            </div>
            <div className="text-darkText text-body1">Ahmad Ali Bin Abu</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sub1 text-darkText w-[250px]  text-left">
              Date of Birth
            </div>
            <div className="text-darkText text-body1">990909011234 (Mykad)</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sub1 text-darkText w-[250px]  text-left">
              Address
            </div>
            <div className="text-darkText text-body1">
              4 Jalan Perniagaan, Taman Desa Rahmat, Tampoi, 81200, Johor Bahru,
              Johor
            </div>
          </div>
          
        </div>
      </div>
    </PactOnlineFullPageDialog>
  );
}
