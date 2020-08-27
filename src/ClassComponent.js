import React from 'react';
import { Component } from 'react';

class ClassComponent extends Component {
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
          {this.state.show ? "Hide Code" : "ClassComponent.js"}
        </button>
      <div style={{display: this.state.show ? "block" : "none"}}>
      
<pre className = "codeExs">{`import React from 'react';
import { Component } from 'react';

class ClassComponent extends Component {
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
          {this.state.show ? "Hide Code" : "ClassComponent.js"}
        </button>
      <div style={{display: this.state.show ? "block" : "none"}}>
      </div>  
    </div>
    )
  }
}
      `}
</pre>
    </div>  
    </div>
    )
  }
}

export default ClassComponent