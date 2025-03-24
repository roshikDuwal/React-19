
const EventPropagation = () => {
  // EventPropagation (when any event is triggered)
  // -Capturing Phase -(in Js Tree,event is first captured in root element,then goes down to the target element)
  // -Target Value
  // -Bubbling Phase-(in Js Tree,event is first captured in target element,then bubble up to the root element)

  const handleGGPButtonClicked = () => {
    console.log("Grand grand Parent Div");
  };
  const handleGPButtonClicked = () => {
    console.log("Grand  Parent Div");
  };

  const handlePButtonClicked = () => {
    console.log("Parent Div Clicked");
  };

  const handleButtonClicked = (event:any) => {
    event.stopPropagation();
    console.log("Child Div Clicked");
  };

  return (
    <>
      <div onClickCapture={handleGGPButtonClicked}>
        <div onClickCapture={handleGPButtonClicked}>
          <div onClickCapture={handlePButtonClicked}>
            <button onClick={handleButtonClicked}>Child Div </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPropagation;
