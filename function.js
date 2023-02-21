import React from "react";
import ReactDOM from "react-dom/client";

const heading=(
    <div>
    <h1>Heading</h1>
    </div>
    );

const function1 =()=>{
    return (
        <div>
            <h1>Header</h1>
            <h2>Status</h2>
        </div>
    )
}


const function2 =()=>(
    <div>
        <h1>Header</h1>
        <h2>Footer</h2>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading) //if we want to render react element 

root.render(<function1/>) // if we want to render the functional component
