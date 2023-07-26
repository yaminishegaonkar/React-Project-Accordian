import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const content = [
  [
    "React is extreamly popular",
    "It makes building complex, interactive UI's a breeze",
    "Its powerful and flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, Jsx and Propes",
    "States",
    "hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web pages (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
]; 


export default function App(){

    const[activeContentIndex, setActiveContentIndex] = useState(0); 

  return(
    <>
   <div>
   <header>
    <img src='react-logo-xs.png' alt='React logo' />
    <div>
      <h1>React.Js</h1>
      <p>i.e., using the react library for rendering the UI</p>
    </div>
   </header>

   <div id='tabs'>
    <menu>
      <button 
      className={activeContentIndex === 0 ? "active" : ""}
      onClick={()=> setActiveContentIndex(0)}
      >
        Why React?
      </button>

       <button 
       className={activeContentIndex === 1 ? "active" : ""}
      onClick={()=> setActiveContentIndex(1)}
      >
        Core Features
      </button>

       <button 
       className={activeContentIndex === 2 ? "active" : ""}
      onClick={()=> setActiveContentIndex(2)}
      >
       Related Resources
      </button>

    </menu>

    <div id='tab-content'>
      <ul>
        {content[activeContentIndex].map((item)=>{
          <li key={item}>{item} </li>
        })}
      </ul>
    </div>
   </div>
   </div> 
    </>
  );
}

