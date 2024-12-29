import { useEffect, useState } from "react"

const Todo = () => {

    const [arr, setarr] = useState(["apple", "orange"]);
    const [val, setval] = useState();

    function getTodofromlocalstorage() {
        let localvalue = JSON.parse(localStorage.getItem("todoData"))
        if (localvalue === null) {
            return []
        }
        else { return localvalue }
    }

    useEffect(() => {
        const localaccess = getTodofromlocalstorage();
        setarr([...localaccess])

    }, [])


    function saveTODOvalues() {
        localStorage.setItem("todoData", JSON.stringify(arr));
    }

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
        <div style={{ 
            width: "50vw", 
            margin: "auto",
            }}>
                <label>Enter Text : </label>
            <input style={{
                border: "2px solid rgb(97, 90, 90)",
                padding: "4px",
                marginRight: "11px",
                borderRadius:"13px"
            }} placeholder="Enter your Goals" value={val} onChange={(evt) => { setval(evt.target.value) }} />
            <button style={{
                backgroundColor: "blue",
                color: "white",
                padding: "5px",
                borderRadius:"6px"
            }} onClick={addvl}>Add...</button>
            <ul style={{ listStyle: "none" }}>
                {
                    arr.map((itm, index) => {
                        if (itm !== null) {
                            return (
                                <>
                                    <div id={index} style={{
                                        display: "flex", justifyContent: "space-between", margin: "12px", border: "1.5px solid", padding
                                            : '3px', boxShadow: "2px 3px rgb(150, 133, 133)",borderRadius:"7px"
                                    }}>
                                        <li key={index}>{itm}</li>
                                        <button style={{
                                            backgroundColor: "rgba(173, 65, 65, 0.81)",
                                            color: "whitesmoke"
                                        }} onClick={() => {
                                            deleteItem({ val: { itm }, ind: { index } }, event)
                                        }} >Delete</button>
                                    </div>
                                </>
                            )
                        }
                    })
                }
            </ul>
            <button
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "3px",
                    float: "left"
                }}
                onClick={saveTODOvalues}>Save</button>
        </div>
    )
}



export default Todo