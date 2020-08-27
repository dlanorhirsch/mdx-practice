import React from "react";


function ArrayChildCode(props) {
    return (
      <div>
      <h4>
        Welcome {` `}
          { props.names
            .map((name) => {
              return name  }
            ).join(", ")
          }
      </h4>
    </div>
    )  
}

export default ArrayChildCode