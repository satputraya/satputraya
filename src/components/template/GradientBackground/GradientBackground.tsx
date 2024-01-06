import React from "react";

export default function GradientBackground() {
  return (
    <React.Fragment>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-35rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
    </React.Fragment>
  );
}
