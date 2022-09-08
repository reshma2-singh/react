import React,{useContext} from "react";
import {FirstName} from "../App";
import ChildD from "./ChildD";
function ChildC() {
   const {appColor} = useContext(FirstName);
 
  
    return (
      <>
       
      <h1 style={{color:appColor}}>child</h1>
        <ChildD/>
      </>
    );
  }
  export default ChildC