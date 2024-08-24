const TodoNew = (props) => {
    const { Mynewtodo } = props;
    // Mynewtodo("Hai")
    const handclick = () => {
        alert("Click CMM")
    }
    const handonchage = (name) => {
        console.log("change check", name)
    }
    return (
        <div className="Todo-new">
            <input type="text" onChange={(event) => { handonchage(event.target.value) }} />
            <button onClick={handclick} style={{ cursor: "pointer" }}>Add</button>
        </div>
    )
}
export default TodoNew;
