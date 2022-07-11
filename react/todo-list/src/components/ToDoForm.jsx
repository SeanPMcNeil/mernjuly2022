import { useState } from "react";

export const ToDoForm = (props) => {
    const [newTodo, setNewTodo] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(newTodo);
        setNewTodo("");
    }

    return(
        <form onSubmit={ handleSubmit }>
            <label>Task: </label>
            <input style={{paddingRight: "5%"}} type="text" onChange={ (e) => setNewTodo(e.target.value) } value={ newTodo } />
            <input style={{marginLeft: "5%"}} type="submit" value="Add Task" />
        </form>
    )
}