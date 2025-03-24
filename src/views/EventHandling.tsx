
const EventHandling = () => {

    const handleButtonClick=(event:any)=>{
        console.log(event)
    }

    const handleWelcomeUser=(name:string)=>{ //parameters
      console.log(name)
  }

  return (
    <>
    <button onClick={handleButtonClick}>Click Me</button>
    <button onClick={(event)=>handleButtonClick(event)}>ClickMe 2</button>
    {/* arguments */}
    <button onClick={()=>handleWelcomeUser('vinod')}>ClickMe 2</button>
    
   
    </>
  )
}

export default EventHandling