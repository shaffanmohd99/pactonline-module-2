import { useState } from "react";
import LoginPart1 from "./components/LoginPart1";
import LoginPart2 from "./components/LoginPart2";
import NewUser from "./components/NewUser";

export default function Login() {
  const [successPart1, setSuccessPart1] = useState(false);
  return (
    <div>
      <main className="flex flex-col items-center justify-between ">
        <div className="w-full">
          <div className="flex justify-center ">
            <div className="w-1/2 h-full relative">
              <img
                src="/handshake.svg"
                alt="Image"
                style={{
                  height: `calc(100vh - 64px)`,
                }}
                className="w-full object-cover opacity-80"
              />
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background:
                    "linear-gradient(251deg, rgba(51, 122, 183, 0.32) 0%, rgba(218, 37, 28, 0.32) 100%, rgba(249, 67, 27, 0.32) 100%)",
                }}
              ></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
                <div className="text-h4 text-[48px] " >PACT Online B2C Platform</div>
              </div>
            </div>
            <div className="w-1/2 px-[32px] ">
              <LoginPart1 setSuccessPart1={setSuccessPart1} />
              {/* <LoginPart2/> */}
              {/* <NewUser /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
