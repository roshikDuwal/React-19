import { SeriesCard } from "../components/SeriesCard";
import seriesData from "../json/seriesData.json"
import "../style/Netfilx.module.css"

export type dataTypes={
  name:string;
  id:string;
  img_url:string;
  rating:string;
  description:string;
  cast:string[];
  genre:string[];
  watch_url:string;
}

const NetflixSeries = () => {
  //Naming Convention-PascalCase for Component
  //React ?->Hot Reload
  //JSX-Javascript XML
  //Component-> function
  //Fragment
  //Dynamic Value in Jsx: {value} 
  //Conditional rendering: ternary operation
  //import and export :default,named,mixed
  //looping:map
  //props: passing parameters in component
  //Destructuring:desctructuring the props
  //Css-inline css,module css
  //Tailwindcss-Utility class Css
  //Event Handling-> event handle like mouse click 
    // -always start from prefix 'on' and function must be start with prefix handle in camelCase
  //Event Propagation-Capturing Phase,Target Value,Bubbling Phase

  //Hooks
  // -state work: 
    // Reconcilition:process where React updates the Browser DOM if there is any changes in ReactDOM using diff algorithm.
    //Diff Alogrithm:used to differentiate the DOM Tree to make new changes.
  
    // -when state is  changed  then it re-render that component and its all Children. 
    // -why state value doesnot reset on re-render -> state value take the initial value for the first time then it takes the state current value.
  
  //Lift State up-React
    // pattern to move child component(props) into common parent component so that multiple child component can be share and syncronized



  return (
    <ul className="flex gap-8 flex-wrap justify-center items-center ">
      {seriesData.map((curElem:dataTypes) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;