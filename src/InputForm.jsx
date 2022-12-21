import React from 'react'

export default function InputForm(props) {
    return (
        <>
            <p>New task</p>
            <form action="submit" onSubmit={props.handleSubmit}>
            <input
                value={props.value} 
                type="text" placeholder="add a task..." 
                onChange={props.handleChange}/>
            <button className="btn btn-primary">Add +</button>
            </form>
        </>
    )
}
