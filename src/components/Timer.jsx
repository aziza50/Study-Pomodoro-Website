//In React, we use PascalCasing!
export default function Timer() {
  //JSX Javascript --> this eventually becomes javascript code
  return (
    <>
      <div className="text-[#E58B98] text-center justify-center text-8xl font-extralight flex flex-row ">
        <h1>50</h1>
        <h1>:</h1>
        <h1>00</h1>
      </div>
      <div className="flex flex-row"></div>
      <div className="justify-center text-[#E58B98] text-3xl flex flex-row gap-10">
        <button>Start</button>
        <button>Reset</button>
      </div>
    </>
  );
}
