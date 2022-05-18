import React from 'react';
let Answer=({Name,second})=>
{
    return(
        <div >

        <h1>Mobile Operating System</h1>
       <ul>
        {Name}
       </ul>
       <h1>Mobile Manufacturers</h1>
       <ul>
        {second}
       </ul>
        </div>

    )
}
export { Answer};