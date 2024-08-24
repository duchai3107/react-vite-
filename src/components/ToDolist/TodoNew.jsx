import { useState } from "react";

const TodoNew = (props) => {
    const { Mynewtodo } = props;
    // Mynewtodo("Hai")
    const [valueinput, setvalueinput] = useState("Khong co gia tri")
    const handclick = () => {
        console.log("check gia tri ", valueinput)
    }
    const handonchage = (name) => {
        setvalueinput(name);
    }
    return (
        <div className="Todo-new">
            <input type="text" onChange={(event) => { handonchage(event.target.value) }} />
            <button onClick={handclick} style={{ cursor: "pointer" }}>Add</button>
            <div>
                My is value:{valueinput}
            </div>
        </div>
    )
}
export default TodoNew;
