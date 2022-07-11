export const ToDoList = props => {
    const { todoList } = props;

    const complete = {
        textDecoration: "line-through",
        cursor: "pointer"
    }
    const incomplete = {
        textDecoration: "none",
        cursor: "pointer"
    }

    const handleBox = (e, todo) => {
        props.handleCheck(todo);
    }

    const handleRemove = (e, todo) => {
        props.removeTask(todo);
    }

    return(
        <div>
            <ul>
                {
                    todoList.map((todo, idx) => {
                        return(
                            <li key={idx} style={ todo.complete ? complete : incomplete }>
                                <span onClick={ e => handleBox(e, todo) } style={{margin: "10%"}}>
                                    {todo.task}
                                </span>
                                <button onClick={ e => handleRemove(e, todo) }>Remove Task</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}