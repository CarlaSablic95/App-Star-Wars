"use client";
import { useState } from "react";

export default function Gender({ id }) {
    
  const [ gender, setGender ] = useState(id);

  
    return (
      <p className="">
        {  (gender === "n/a") ? "" : `Género: ${ id }`}
      </p>
    );
  }
