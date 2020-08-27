import React from 'react';
import "./styles.css";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
 
function App() {
  return (
    <div>
      <div className="examples">
      <h2>
        Refactoring a class component to a functional component.
      </h2>
      <p>
        The focus of this exercise is to demonstrate using each component type to render a sample of code.
      </p>
      <p>The following steps will guide you through refactoring the code:</p>
      <h3>
        Class component w/state and toggle method display the code example.
      </h3>
      <ClassComponent />

      <h3>
        Functionalcomponent w/useState and toggle method display the code example.
        </h3>
      <FunctionalComponent />
    </div>
  </div>
  )
}
export default App