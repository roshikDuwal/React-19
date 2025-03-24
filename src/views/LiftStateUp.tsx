import { useState } from "react";

const LiftStateUp = () => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DispayComponent inputValue={inputValue} />
    </>
  );
};

export default LiftStateUp;

interface InputComponentProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputComponent = ({ inputValue, setInputValue }: InputComponentProps) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-2 border-black m-8"
      />
    </>
  );
};

const DispayComponent = ({inputValue}:{inputValue:string}) => {
  return <>
  <p>{inputValue}</p>
  </>;
};
