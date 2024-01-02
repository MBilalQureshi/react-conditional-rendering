import React from 'react'

function ConditionalRenderingFunctional(props) {
  return (
    <div>
        <h1>
            {/* Using ES6 Ternary condiotion below that is short hand if statement */}
            {props.connected ? "Connected" : "Not Connected"}
        </h1>
    </div>
  )
}

export default ConditionalRenderingFunctional