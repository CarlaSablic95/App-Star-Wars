"use client";
import { useState } from "react";

export default function Details({ id }) {
    
  const [ gender, setGender ] = useState(id);
  
    return (
      <p className="text-white">
        {  (gender === "n/a") ? "" : `Gender: ${ id }`}</p>
      
    );
  }
