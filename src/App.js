import React from 'react';
import "./styles.css";
// App.js is a class component w/state and toggle method. 
import AppJsCodeEx from "./AppJsCodeEx";



// --- Functional component w/useState and toggle method. ---
// import ArrayChildFxEx from "./ArrayChildFxComp";

function App() {
  return (
    <div>
      <div className="examples">
      <h2>Refactoring a class component to a functional component.</h2>
      <p>The focus of this exercise is to demonstrate using each component type to render a sample of code.</p>

      <AppJsCodeEx />
      

    
     

    
      <h3>Class component w/state and toggle method display the code example.</h3>
      
        
        
      </div>

        {/* <ArrayChildFxEx name={["Tom","Dick","Harry"]}/> */}
    </div>
  )
}
export default App