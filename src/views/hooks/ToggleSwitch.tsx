import { useState } from "react";

const SwitchButton=({toggle}:{toggle:boolean})=>{
  return(
    <span
        className={`cursor-pointer border-2  border-gray-400 h-full max-sm:w-[50%] w-[45%] rounded-full m-0 text-white transition-all duration-300 ease-in-out  flex items-center justify-center font-bold max-sm:text-xs text-sm ${
          toggle
            ? "bg-green-400 translate-x-[0%]"
            : "bg-red-400 translate-x-[110%] "
        }`}
        onClick={()=>alert("test")}
      >
        {toggle ? "ON" : "OFF"}
      </span>
  )
}

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggleChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setToggle((prev) => !prev);
  };


  return (
    <div
      className={`max-sm:w-[5rem] max-sm:h-[2.5rem] w-[8rem] h-[3.5rem] rounded-4xl px-2 py-1 flex items-center transition-all duration-300 ease-in-out ${
        toggle ? "bg-green-400 " : "bg-red-400 "
      }`}
      onClickCapture={handleToggleChange}
    >
      <SwitchButton toggle={toggle}/>
    </div>
  );
};

export default ToggleSwitch;


