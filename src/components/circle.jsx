import React from "react";

const Circle = ({ n ,bg}) => {
  return (
    <div className={`rounded-full w-[35px] h-[80%] border  grid justify-center items-center ${bg}`}> 
      {n}
    </div>
    // bg-slate-200
  );
};

export default Circle;
