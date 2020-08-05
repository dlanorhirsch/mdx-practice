// import React, {lazy, Component, Suspense} from 'react';
// import {importMDX} from 'mdx.macro';
// import Appetizers2aCodeEx from "./Appetizers2aCodeEx.mdx";

// const Appetizers2a = lazy(() => importMDX('./Appetizers2a.mdx'))

// class App extends Component {
//   render(){
//     return (
//       <div>
//         <Suspense fallback={<div>Loading...</div>}>
//         {/* <Appetizers2a.mdx /> */}
//         </Suspense>
//       </div>
//     );  
//   }
// }

import React, {lazy, Component, Suspense} from 'react'
import {importMDX} from './mdx.macro'

const Content = lazy(() => importMDX('./content.mdx'))

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </div>
    )
  }
}

export default App;
