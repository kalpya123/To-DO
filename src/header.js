import React from "react"

function header(){
    const styleHead = {
        fontStyle: "italic",
       
       textAlign:"center",
       
    }
    return(
        <div>
        <h2 style={styleHead}>Add into list: <input type="text" id="myText" placeholder="insert list"></input><button onclick="myFunction()">Add </button></h2>
</div>
    )
}
export default header;