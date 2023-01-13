// import { SkillsProps } from "./skills.types";


// export const Skills = (props : SkillsProps) => {
//     const {skills}=props;
//   return (
//     <div>
//       <>
//         <ul>
//             {skills.map(skill =>{
//                 return <li key={skill}> {skill}</li>
//             })}
//         </ul>
//       </>
//     </div>
//   )
// }

// import { useState } from "react";
// import { SkillsProps } from "./skills.types";
// export const Skills =(props :SkillsProps)=>{
//   const {skills}=props;
//   const [isLoggedIn,setIsLoggedIn] = useState(false);
//   return (
//     <>
//     <ul>
//       {skills.map(skill =>{
//         return <li key={skill}> {skill}</li>
//       })}
//     </ul>
//     {isLoggedIn?
//     (<button>start learning</button>):<button onClick={()=> setIsLoggedIn(true)}>Login</button>}
//     </>
//   )
// }


import { useState,useEffect } from "react";
import { SkillsProps } from "./skills.types";
export const Skills =(props :SkillsProps)=>{
  const {skills}=props;
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoggedIn(true);
    },1500);
  },[])
  return (
    <>
    <ul>
      {skills.map(skill =>{
        return <li key={skill}> {skill}</li>
      })}
    </ul>
    {isLoggedIn?
    (<button>start learning</button>):<button onClick={()=> setIsLoggedIn(true)}>Login</button>}
    </>
  )
}
