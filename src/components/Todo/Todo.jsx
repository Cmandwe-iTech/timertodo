import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import userContext from "../context/contextAPI"
import SideBar from "./Sidbar"

const ToDo = () => {
    const { username, data, Pause_timer, End_timer, Timer, update_Time } = useContext(userContext)
    const [start, setStart] = useState(true);
    const [end, setEnd] = useState(false);
    const [resume, setResume] = useState(true);
    const navigate = useNavigate();
    const check = ()=>{
       if( data.length === 0 || data[data.length-1].Status === "completed"){
        navigate('/newtodo')
       }else{alert("complete current task first")
        navigate('/todo')
    }
    }
    return (
        <> 
            <div className="main-div">
                <nav className="navbar" >
                    <p style={{ float: "right", "marginRight": "80px" }}>{username.split("@")[0]}</p>
                </nav>
                    <button style={{ margin: "30px 0px", "width": "120px", "height": "30px" }} onClick={check}>Add New Ativity</button>
                <table >
                    <tr >
                        <th>Activity</th>
                        <th>Status</th>
                        <th>Time Taken</th>
                        <th>Action</th>
                    </tr>
                    {data.map((items, i) => {
                        return (
                            <tr key={i}>
                                <td >{items.activity}</td>
                                <td>{items.Status}</td>
                                <td>{items.Status === "completed"? <p>{items.time_taken}</p> : ""}</td>
                                {!end && items.Status !== "completed" ? <td>
                                    {start  ? <button onClick={() => {Timer(); update_Time(items._id,"ongoing");setStart(false)}}>{resume ? "start" : "resume"}</button> :
                                    <span><button onClick={() => {End_timer(items._id,"completed"); setEnd(true)}}>End</button><button onClick={() => { setResume(false); setStart(true); Pause_timer(items._id) }}>Pause</button></span>}</td> : <td></td>}

                            </tr>
                        )
                    })}

                </table>
                <SideBar />

            </div>
        </>
    )
}
export default ToDo