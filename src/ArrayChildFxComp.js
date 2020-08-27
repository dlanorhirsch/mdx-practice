
import React from 'react';
import { useState } from "react";


function ArrayChildFxEx(props) {
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
          {show ? "Hide Code" : "ArrayChildCode.js Ex."}
        </button>
      <div style={{display: show ? "block" : "none"}}>
      <hr></hr>
  <div>This code is from ArrayChildFxEx</div> 
<pre className = "function">{`
import React from 'react';

function ArrayChildCode(props) {
  return (
    <div>
      <h4>Hi {props.names} </h4>
    </div>
  )
}

export default ArrayChildCode

`}
</pre>
    </div>  
    </div>
    )
  }


export default ArrayChildFxEx