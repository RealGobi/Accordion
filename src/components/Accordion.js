import React, { useState } from 'react'

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <div className="App">
    <div className="accordion">
    <div onClick={()=> {setIsOpen(!isOpen)}} className="accordion-header"><h2>npx create-react-app</h2><span className="inducator">{isOpen ? '-' : '+'}</span></div>

   {isOpen && (
     <div className="accordion-body"><p>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production</p></div>
   )}
    </div>
   </div>
    </div>
  )
}

export default Accordion
