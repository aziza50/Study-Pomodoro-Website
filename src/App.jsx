import { useState } from "react";
import Spline from "@splinetool/react-spline";
import Timer from "./components/Timer";
import ToDos from "./components/ToDos";
import Quote from "./components/Quote";
export default function App() {
  return (
    <>
      <div className="fixed inset-0 w-full h-full z-[-1]">
        <Spline scene="https://prod.spline.design/Fs0eEXPghQ0JdNPX/scene.splinecode" />
      </div>
      <div className="justify-items-center mt-[100px]">
        <Timer></Timer>
      </div>
      <div className="absolute top-10 right-20 flex justify-end items-center">
        <ToDos></ToDos>
      </div>
      <div className="bg-white rounded-2xl p-[10px] mt-[50px] absolute top-10 left-20 flex justify-start items-center">
        <Quote></Quote>
      </div>
      <div className="fixed bottom-0 right-0 w-[200px] h-[80px] bg-[#FFD2D2] flex justify-end items-center"></div>
    </>
  );
}
