
import React from 'react';
import { useState } from "react";

function FunctionalComponent() {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(prevState => {
      return {
        show: !prevState.show
       }
    })
  }  
    return (
      <div>
        <button 
          style={{marginBottom: "15px"}}
          onClick={toggle}>
          {show ? "Hide Code" : "FunctionalComponent.js Ex."}
        </button>
      <div style={{display: show ? "block" : "none"}}>
 <pre className = "codeExs">{`
 import React from 'react';

import { useState } from "react";

function FunctionalComponent() {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(prevState => {
      return {
        show: !prevState.show
       }
    })
  }  
    return (
      <div>
        <button 
          style={{marginBottom: "15px"}}
          onClick={toggle}>
          {show ? "Hide Code" : "FunctionalComponent.js Ex."}
        </button>
      <div style={{display: show ? "block" : "none"}}>
      </div>  
    </div>
    )
  }

`}
</pre>
    </div>  
    </div>
    )
  }


export default FunctionalComponent