const TodoDaTa = (props) => {
    const { Todolist } = props;
    console.log(props)
    return (
        <div className="Todo-data">
            {Todolist.map((item, index) => {
                return (
                    <div className="Todo-delete">{item.name}
                        <button>Delete</button>
                    </div>

                )
            })}

        </div>
    )
}
export default TodoDaTa;
