import React from 'react'

function Task(props) {
    return (
        <div>
           <span>{props.desc}</span> 
           <button onClick = {() =>{props.deleteItem(props.num)}}>delete</button>
        </div>
    )
}

export default Task

