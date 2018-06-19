import React from 'react';

// export default ( props )=> {
//     return(
//         (component) => (
//             <component></component>
//         )
//     )
// }

// export default (anything) => (props) => <h1>:)</h1>

export default (PassedComponent) => {
    return(
({ children, ...props }) => {
    debugger
    return(
  <PassedComponent {...props}>
     {children.toUpperCase()}!
  </PassedComponent>
    )
}
    )
}