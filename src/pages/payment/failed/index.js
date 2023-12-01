import { BsXCircleFill } from "react-icons/bs";

export default function OnboardingFailed() {
  return (
    <main className="flex  flex-col items-center justify-between  bg-defaultBg">
      <div className="w-full">
        <div className="flex items-center justify-center  ">
          <div
            className="w-1/2 bg-white flex items-center  flex-col gap-[30px] px-8"
            style={{
              height: `calc(100vh - 64px)`,
            }}
          >
            <div className=" mt-[80px] w-[140px] h-[140px] rounded-full  flex justify-center items-center ">
              <BsXCircleFill size={120} className="text-error" />
            </div>
            <div className="text-h6 text-darkText mt-[30px] ">
              Payment Received
            </div>
            <div className=" text-body1 text-lightGrayText text-center px-9 ">
              Thank you for your attempted payment. Unfortunately, your payment
              for order ID below cannot be processed. Please try again
            </div>
            <table className="w-full bg-defaultBg text-lightGrayText text-body1">
              <thead>
                <tr>
                  <td className="bg-gray-300 p-2 w-[130px]">Order ID</td>
                  <td className="bg-gray-300 p-2 pl-[200px] text-left">
                    123abc456def789ghi
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-gray-300 p-2 w-[130px]">Plan</td>
                  <td className="bg-gray-300 p-2 pl-[200px] text-left">
                    WillPlan
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-300 p-2 w-[130px]">Amount paid</td>
                  <td className="bg-gray-300 p-2 pl-[200px] text-left">
                    RM 999,999.99
                  </td>
                </tr>
                <tr>
                  <td className="bg-gray-300 p-2 w-[130px]">Payment date</td>
                  <td className="bg-gray-300 p-2 pl-[200px] text-left">
                    09/11/2022, 10:30:18 AM
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="w-full flex flex-col gap-2">
              <button className="w-full px-4 py-2 bg-redPrimary hover:bg-redSecondary text-white rounded-md ">
                Return
              </button>
              {/* <button className="w-full px-4 py-2 border border-grayLine bg-white hover:bg-defaultBg text-darkText rounded-md ">
                Download receipt
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
