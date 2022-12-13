 import React from 'react';

 const Helmet = (props)=>{

document.title = 'Maltimart - '+ props.title;
console.log("Props Children: ",props.children);
    return(
        <div className='w-100'>{props.children}</div>
    )
 }

 export default Helmet;