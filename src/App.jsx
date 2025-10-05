import { useState } from "react";
import Spline from "@splinetool/react-spline";
import Timer from "./components/Timer";
import ToDos from "./components/ToDos";
export default function App() {
  return (
    <>
      <div className="fixed inset-0 w-full h-full z-[-1]">
        <Spline scene="https://prod.spline.design/Fs0eEXPghQ0JdNPX/scene.splinecode" />
      </div>
      <div className="absolute top-20 right-155">
        <Timer></Timer>
      </div>
      <div className="absolute top-10 right-20">
        <ToDos></ToDos>
      </div>
      <div className="w-[200px] h-[50px] absolute top-180 right-0 bg-[#FFD2D2]"></div>
    </>
  );
}
