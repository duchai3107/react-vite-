const TodoDaTa = (props) => {
    const { name, age, data } = props;
    return (
        <div className="Todo-data">
            <div>My name is {name}</div>
            <div>Nguyen Duc Hai</div>
            <div>Machine learning</div>
        </div>
    )
}
export default TodoDaTa;
