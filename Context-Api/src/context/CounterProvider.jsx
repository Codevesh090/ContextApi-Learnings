import { useState } from "react";
import { CounterContext } from "./CounterContext";

export function CounterProvider(props) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
}


//Step-2
//Uske baad humne usi context folder me ek "CounterProvider.jsx" banaya ,jo CounterContext jo humne banaya tha usse components ka stable connection stablish karne me madad karta hai .To create CounterProvider what we did we imported CounterContext and then we made a function CounterProvider in which we gave the parameter named "props" and then in return humne {props.children} ko wrap kar diya under <CounterContext.Provider> and jo bhi value ab us context me yaani database me rakhni hai use hum value attribute ke andar de dete hai like here we give count:0,setCount:f()these two key-value pairs.Now , {props.children} ke wrap hone ka matlab hua kya , toh hua yeh ki,Humne main.jsx me hum <CounterProvider> se wrap kar diya hai <App> ko , yaani <CounterProvider> is the parent and <App> is child , so when code runs then when <CounterProvider> gets called then <App> as children go to "props" parameter and that means props.children ka matlab hum <App> ki hi baat kar rahe hai . And <App> ko now ab <CounterContext.Provider> me wrap karne ka matlab ab app ke andar jitne bhi components aayenge , sabhi ke sabhi contextProvider me aa gaye hai and context toh pehle se hi context provider me tha , so, Iska matlab ab <App> ke andar aane waale sabhi components ka ek persistent connection ban gaya hai "context" yaani db ke saath .