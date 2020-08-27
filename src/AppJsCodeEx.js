import React from 'react';
import { Component } from 'react';

class AppJsCodeEx extends Component {
  state = {
    show: false
  }
  toggle = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show
       }
    })
  }  
  render() {
    return (
      <div>
        <button 
          style={{marginBottom: "15px"}}
          onClick={this.toggle}>
          {this.state.show ? "Hide Code" : "App.js"}
        </button>
      <div style={{display: this.state.show ? "block" : "none"}}>
      
<pre className = "codeExs">{`import React from 'react';
import "./styles.css";
import AppJsCodeEx from "./AppJsCodeEx";
import ArrayChildCode from './ArrayChildCode';
import ArrayChildCodeEx from "./ArrayChildCodeEx";
// import ArrayChildFxEx from "./ArrayChildFxComp";

function App() {
  return (
    <div>
      <div className="examples">
      <h2>Both examples below are rendered by App.js</h2>
      <AppJsCodeEx />
      <h3>This is a class component w/a toggle method.</h3>
        <ArrayChildCode names={["Larry", "Curly", "Mo"]} />
        <ArrayChildCodeEx />
      </div>

        {/* <ArrayChildFxEx name={["Tom","Dick","Harry"]}/> */}
    </div>
  )
}
export default App`}
</pre>
    </div>  
    </div>
    )
  }
}

export default AppJsCodeEx