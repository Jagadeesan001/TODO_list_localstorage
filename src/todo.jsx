import { useState } from "react"

const Todo = () => {

    const [arr, setarr] = useState(["Learn html","learn css"]);
    const [val, setval] = useState();
    
    function addvl() {
        if (val.length > 0) {            
            setarr([...arr, val])
            setval("")            
        }
        else {
            alert("Enter TODO Item")
        }
    }
    function deleteItem(props, event) {
        let val = props.ind.index
        let parent = event.target.parentElement
        parent.remove()
        delete arr[val];
        setarr([...arr]);
    }
    
    return (
        <div style={{ width: "50vw", margin: "auto" }}>
            <input value={val} onChange={(evt) => { setval(evt.target.value) }} />
            <button onClick={addvl}>Add...</button>
            <ul style={{ listStyle: "none" }}>
                {
                    arr.map((itm, index) => {
                        return ( 
                            <div id={index} style={{
                                display: "flex", justifyContent: "space-between", margin: "12px", border: "1px solid", padding
                                    : '3px', boxShadow: "2px 3px rgb(150, 133, 133)"
                            }}>
                                <li key={index}>{itm}</li>
                                <button onClick={() => {
                                    deleteItem({ val: { itm }, ind: { index } }, event)
                                }} >Delete</button>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}



export default Todo