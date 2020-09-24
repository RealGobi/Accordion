import React, { useState } from 'react';

function Accordion({title, body}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <div className="App">
    <div className="accordion">
    <div onClick={()=> {setIsOpen(!isOpen)}} className="accordion-header"><h2>{title}</h2><span className="inducator">{isOpen ? '-' : '+'}</span></div>

   {isOpen && (
     <div className="accordion-body"><p>{body}</p></div>
   )}
    </div>
   </div>
    </div>
  )
}

export default Accordion
