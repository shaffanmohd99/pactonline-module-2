import { BsFileEarmarkText } from "react-icons/bs";

export default function PaymentSummary() {
  return (
    <>
      <div className="font-bold text-[18px] text-darkText w-full border-b border-grayLine pb-2">
        Summary
      </div>
      <div className="flex gap-2 mt-[20px] items-center">
        <div>
          <div className="flex items-center justify-center rounded-full bg-defaultBg w-[45px] h-[45px] ">
            <BsFileEarmarkText className="text-redPrimary" size={24} />
          </div>
        </div>
        <div className="text-darkText text-sub1">WillPlan</div>
      </div>
      <table className="mt-[30px] w-full text-left text-body1 text-lightGrayText">
        <thead>
          <tr className=" border-b border-grayLine">
            <td colSpan={2} className="py-2">
              Set-up fee
            </td>
            <td className="text-right">RM 999,999.99</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className="py-2">
              Subtotal
            </td>
            <td className="text-right">RM 999,999.99</td>
          </tr>
          <tr>
            <td colSpan={2} className="py-2">
              Set-up fee
            </td>
            <td className="text-right">RM 999,999.99</td>
          </tr>
          <tr className="text-darkText text-sub1">
            <td colSpan={2} className="py-2 text-right">
              Total
            </td>
            <td className="text-right">RM 999,999.99</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
